import numpy as np
import pandas as pd
import requests
from io import BytesIO
from PIL import Image
import math
from tensorflow.keras.applications import VGG16
from tensorflow.keras.applications.vgg16 import preprocess_input
from tensorflow.keras.models import Model

# Inicializa o modelo VGG16
base_model = VGG16(weights='imagenet', include_top=False)
feature_extractor = Model(inputs=base_model.input, outputs=base_model.output)

# Função para converter latitude e longitude em coordenadas de tile
def latlon_to_tile(lat, lon, zoom):
    lat_rad = math.radians(lat)
    n = 2.0 ** zoom
    x_tile = int((lon + 180.0) / 360.0 * n)
    y_tile = int((1.0 - math.log(math.tan(lat_rad) + (1 / math.cos(lat_rad))) / math.pi) / 2.0 * n)
    return x_tile, y_tile

def download_image(lat, lon, zoom=18):
    TILE_URL = "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
    x_tile, y_tile = latlon_to_tile(lat, lon, zoom)
    url = TILE_URL.format(x=x_tile, y=y_tile, z=zoom)
    response = requests.get(url)
    img = Image.open(BytesIO(response.content))
    return img

def extract_features_from_image(image):
    # Redimensiona a imagem para o tamanho esperado pelo modelo
    img = image.resize((224, 224))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)

    # Extrai as características
    features = feature_extractor.predict(img_array)
    features_flattened = features.flatten()
    return features_flattened

def add_features_to_dataframe(df, lat, lon, zoom=18):
    img = download_image(lat, lon, zoom)
    features = extract_features_from_image(img)
    
    # Adiciona as características como novas colunas ao DataFrame
    feature_columns = [f'feature_{i}' for i in range(len(features))]
    feature_df = pd.DataFrame([features], columns=feature_columns)
    
    # Concatena o DataFrame original com as novas características
    df = pd.concat([df, feature_df], axis=1)
    return df

# Exemplo de uso
df = pd.DataFrame()  # Cria um DataFrame vazio
lat, lon = 37.7749, -122.4194  # Exemplo de coordenadas de São Francisco
df = add_features_to_dataframe(df, lat, lon)
print(df)