from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import Any, Dict, List
import pandas as pd
from io import BytesIO
from sklearn.preprocessing import RobustScaler, OneHotEncoder
import numpy as np

router = APIRouter()
def preprocess_data(df: pd.DataFrame) -> Dict[str, Any]:
    # Assuming the uploaded DataFrame contains both df_consumo and df_fraudes identified by column `FRAUDE_FLAG`
    df_consumo = df[df['FRAUDE'] == 0].copy()  # Consumption data (no fraud)
    df_fraudes = df[df['FRAUDE'] == 1].copy()  # Fraud data

    # 1. Preencher valores nulos
    for df_part in [df_consumo, df_fraudes]:
        for col in df_part.columns:
            if df_part[col].dtype == 'object':
                df_part[col].fillna('Desconhecido', inplace=True)
            else:
                df_part[col].fillna(df_part[col].median(), inplace=True)

    # 3. Codificar colunas categóricas
    encoder = OneHotEncoder(handle_unknown='ignore', sparse_output=False)
    categorical_cols = ['CATEGORIA', 'SUB_CATEGORIA', 'TIPO_LIGACAO', 'EXCECAO', 'FATURADO_MEDIA']
    
    if all(col in df_consumo.columns for col in categorical_cols):
        encoded_data_consumo = encoder.fit_transform(df_consumo[categorical_cols])
        encoded_df_consumo = pd.DataFrame(encoded_data_consumo, columns=encoder.get_feature_names_out(categorical_cols))

        encoded_df_consumo.reset_index(drop=True, inplace=True)
        df_consumo.reset_index(drop=True, inplace=True)
        df_consumo = df_consumo.drop(categorical_cols, axis=1)
        df_consumo = pd.concat([df_consumo, encoded_df_consumo], axis=1)

    # 4. Converter a coluna 'REFERENCIA' para o tipo datetime, se existir
    if 'REFERENCIA' in df_consumo.columns:
        df_consumo['REFERENCIA'] = pd.to_datetime(df_consumo['REFERENCIA'], errors='coerce')

    # 5. Análise de fraudes: marcar fraudes com base nas matrículas
    matriculas_fraude = set(df_fraudes['MATRICULA'])
    fraudes_consumo = df_consumo.copy()
    fraudes_consumo['FRAUDE'] = fraudes_consumo['MATRICULA'].apply(lambda x: 1 if x in matriculas_fraude else 0)

    # 6. Criar uma lista de dicionários para cada "MATRICULA" e adicionar as novas colunas "CATEGORIA" e "TIPO_LIGACAO"
    response_data = []
    for _, row in fraudes_consumo.iterrows():
        row_dict = row.to_dict()

        # Determinar a categoria como string
        categoria_str = (
            'Comercial' if row_dict.get('CATEGORIA_COMERCIAL') == 1 else
            'Industrial' if row_dict.get('CATEGORIA_INDUSTRIAL') == 1 else
            'Pública' if row_dict.get('CATEGORIA_PUBLICA') == 1 else
            'Residencial' if row_dict.get('CATEGORIA_RESIDENCIAL') == 1 else
            'Não identificada'
        )
        row_dict['CATEGORIA'] = categoria_str
        
        # Determinar o tipo de ligação como string
        tipo_ligacao_str = (
            'Consumo Fixo' if row_dict.get('TIPO_LIGACAO_Consumo Fixo') == 1 else
            'Hidrometrado' if row_dict.get('TIPO_LIGACAO_Hidrometrado') == 1 else
            'Não identificado'
        )
        row_dict['TIPO_LIGACAO'] = tipo_ligacao_str

        # Adicionar o dicionário atualizado ao array de resposta
        response_data.append(row_dict)

    # 7. Calcular a média de "FRAUDE" e "CONS_MEDIDO" por "CATEGORIA"
    category_columns = ['CATEGORIA_COMERCIAL', 'CATEGORIA_INDUSTRIAL', 'CATEGORIA_PUBLICA', 'CATEGORIA_RESIDENCIAL']

    # Create a new column to represent the category as a string
    def map_category(row):
        if row['CATEGORIA_COMERCIAL'] == 1:
            return 'Comercial'
        elif row['CATEGORIA_INDUSTRIAL'] == 1:
            return 'Industrial'
        elif row['CATEGORIA_PUBLICA'] == 1:
            return 'Pública'
        elif row['CATEGORIA_RESIDENCIAL'] == 1:
            return 'Residencial'
        else:
            return 'Não identificada'

    fraudes_consumo['CATEGORY'] = fraudes_consumo.apply(map_category, axis=1)

    # Group by the CATEGORY and calculate means
    fraude_mean_by_category = fraudes_consumo.groupby('CATEGORY')['FRAUDE'].mean().to_dict()
    consumo_mean_by_category = fraudes_consumo.groupby('CATEGORY')['CONS_MEDIDO'].mean().to_dict()

    # Format the response to the desired structure
    formatted_fraude_means = [{"category": cat, "fraude": round(fraude_mean_by_category.get(cat, 0), 2)} for cat in fraude_mean_by_category]
    formatted_consumo_means = [{"category": cat, "consumo": round(consumo_mean_by_category.get(cat, 0), 2)} for cat in consumo_mean_by_category]

    # New: Calculate the percentage of rows where "FRAUDE" equals 1
    fraude_mean = round((df['FRAUDE'].sum() / len(df)) * 100, 2)

    # Calculate the mean of "CONS_MEDIDO" for fraud cases
    fraude_cases = df[df['FRAUDE'] == 1]
    cons_medido_mean_fraude = round(fraude_cases['CONS_MEDIDO'].mean(), 2)

    # 8. Calcular "big numbers" por REFERENCIA (data)
    big_numbers_by_referencia = []
    grouped_by_date = fraudes_consumo.groupby('REFERENCIA')
    
    for date, group in grouped_by_date:
        mean_consumo = round(group['CONS_MEDIDO'].mean(), 2)
        mean_consumo_fraude = round(group[group['FRAUDE'] == 1]['CONS_MEDIDO'].mean(), 2)
        
        big_numbers_by_referencia.append({
            "referencia": date.strftime('%Y-%m-%d'),  # Convert to string format
            "consumo_mean": mean_consumo,
            "consumo_mean_fraude": mean_consumo_fraude
        })

    # 9. Agrupar o consumo por MATRÍCULA, com as referências e consumos correspondentes
    matricula_consumption_data = []
    grouped_by_matricula = fraudes_consumo.groupby('MATRICULA')

    for matricula, group in grouped_by_matricula:
        referencia_consumptions = [
            {
                "referencia": row['REFERENCIA'].strftime('%Y-%m-%d'),
                "consumo": round(row['CONS_MEDIDO'], 2)
            }
            for _, row in group.iterrows()
        ]
        
        matricula_consumption_data.append({
            "matricula": int(matricula),
            "consumo_by_referencia": referencia_consumptions
        })

    # Define a function to recursively sanitize the data
    def sanitize_data(obj):
        if isinstance(obj, dict):
            return {k: sanitize_data(v) for k, v in obj.items()}
        elif isinstance(obj, list):
            return [sanitize_data(v) for v in obj]
        elif isinstance(obj, float):
            if pd.isna(obj) or np.isinf(obj):
                return 0  # Replace with 0 or None
            else:
                return float(round(obj, 2))
        elif isinstance(obj, (np.integer, int)):
            return int(obj)
        else:
            return obj

    # Prepare the output data
    output = {
        "processed_data": response_data,
        "fraude_mean_by_category": formatted_fraude_means,
        "consumo_mean_by_category": formatted_consumo_means,
        "fraude_mean": fraude_mean,
        "cons_medido_mean_fraude": cons_medido_mean_fraude,
        "big_numbers_by_referencia": big_numbers_by_referencia,
        "matricula_consumption_data": matricula_consumption_data
    }

    # Sanitize the output data
    sanitized_output = sanitize_data(output)
    
    return sanitized_output


    
@router.post("/preprocess/")
async def preprocess_file(file: UploadFile = File(...)):
    # Ensure that the file uploaded is a CSV or Excel file
    if file.content_type not in ['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']:
        raise HTTPException(status_code=400, detail="Invalid file type. Only CSV or Excel files are accepted.")

    # Read the file content
    contents = await file.read()

    try:
        # Check the file type and read accordingly
        if file.content_type == 'text/csv':
            df = pd.read_csv(BytesIO(contents))
        else:  # It's an Excel file
            df = pd.read_excel(BytesIO(contents))
    except Exception as e:
        raise HTTPException(status_code=400, detail="Failed to read the file.")

    # Preprocess the data using the function
    processed_data = preprocess_data(df)

    return {
        "processed_data": processed_data["processed_data"],
        "fraude_mean_by_category": processed_data["fraude_mean_by_category"],
        "consumo_mean_by_category": processed_data["consumo_mean_by_category"],
        "fraude_mean": processed_data["fraude_mean"],
        "cons_medido_mean_fraude": processed_data["cons_medido_mean_fraude"],
        "big_numbers_by_referencia": processed_data["big_numbers_by_referencia"],
        "matricula_consumption_data": processed_data["matricula_consumption_data"]
    }
