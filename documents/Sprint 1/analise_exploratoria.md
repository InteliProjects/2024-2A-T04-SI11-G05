# Análise exploratória

A análise exploratória foi realizada em um notebook do Google Colab que pode ser acessado por este link:
https://colab.research.google.com/drive/1kz6cKeyFa5XJe0wAAidUxrGeTVfTREaX?authuser=1#scrollTo=EzDtamA60bvf

## 1. Entendimento dos dados

### 1.1. CSV do consumo

#### 1.1.1. Tipos de Dados e suas Características

**Identificações:** 
- `MATRICULA`:  Índice numérico da ligação* da residência do cliente. 
- `SEQ_RESPONSAVEL`:  Índice numérico atrelado ao cliente.

**Dados classificatórios:** 
- As colunas `CATEGORIA`, `SUBCATEGORIA` e `TIPO_LIGACAO` fornecem informações que dividem os clientes 'PUBLICA', 'COMERCIAL', 'RESIDENCIAL', 'RES. SOCIAL', 'INDUSTRIAL' ou 'RES. INDUBRASIL', além de classificar a ligação entre “hidrometrado” (aquele consumo que foi medido) ou “consumo fixo” (aquele consumo que não é ou não pode ser medido, é registrado na média de consumo).
  
**Dados numéricos:** 
- `DIAS_LEITURA`: Intervalo de dias entre a última leitura e a atual. 
- `CONS_MEDIDO`: É o valor do consumo em m³.
- `ECO_PUBLICA, etc...`:  Quantidade de economias públicas e de outras categorias.

**Localização e data:** 
- `COD_LATITUDE e COD_LONGITUDE`:   São as coordenadas (latitude e longitude) das ligações.
- `REFERENCIA`:  Data do registro do consumo medido;
  
 **Tipo dos dados:** 

|**Coluna**                  |**Tipo**|
| - | - |
|REFERENCIA                           |object         |
|MATRICULA                            |int64          |
|SEQ_RESPONSAVEL                      |float64        |
|ECO_RESIDENCIAL                      |float64        |
|ECO_COMERCIAL                        |float64        |
|ECO_INDUSTRIAL                       |float64        |
|ECO_PUBLICA                          |float64        |
|ECO_OUTRAS                           |float64        |
|DIAS_LEITURA                         |float64        |
|CONS_MEDIDO                          |float64        |
|TIPO_LIGACAO                         |object         |
|CATEGORIA                            |object         |
|SUB_CATEGORIA                        |object         |
|DSC_OCORRENCIA                       |object         |
(...)
|HORA_LEITURA                         |object         |
|DSC_SIMULTANEA                       |object         |
|STA_ACEITA_LEITURA                   |object         |
|COD_LATITUDE                         |float64        |
|COD_LONGITUDE                        |float64        |

#### 1.1.2. Importância para o projeto

Esta tabela possui a maioria dos dados que serão utilizados para as análises realisadas no projeto. Dados como consumo, categoria, localização e os dados de leitura são muito ricos para as análises que deverão ser realizadas.

### 1.2. CSV de fraudes

#### 1.2.1. Tipos de Dados

 **Tipo dos dados:** 

|**Coluna**                   |**Tipo**|
| - | - |
|TIPOOS                               |object         |
|ANOOS                                |float64        |
|IDOSP                                |int64          |
|ANOMES                               |object         |
|MATRICULA                            |int64          |
|SERVICO                              |int64          |
|DESCRICAO                            |object         |
|SETOR                                |float64        |
|EQP                                  |object         |
|DATAEMISSAO                          |object         |
|DATAPROGRAMACAO                      |object         |
|DATAINICIO                           |object         |
|DATACONCLUSAO                        |object         |
|STATUS                               |object         |
(...)
|CODEXECOCOR                          |float64        |
|MOTIVOEXECOCOR                       |object         |
|TEMPOPADRAO                          |float64        |
|TEMPOATENDIMENTO                     |float64        |
|DESCRSETOR                           |object         |
|DESCRSETORSOLICITANTE                |object         |
|DS_SERVICO_SOLICITADO                |object         |
|FL_EXECUTADO                         |float64        |
|PARECER_EXECUCAO                     |object         |

#### 1.2.2. Importância para o projeto

A variável alvo será a ocorrência de fraude. Esta tabela é, portanto, essencial para o projeto e levará a maiores insights após a junção com a tabela "consumo".

## 2. Tratamento dos dados

### 2.1. Tratamento de valores nulos

Valores Nulos / Ausentes (CONSUMO)

|**Nome da Coluna**        |**Valores Nulos / Ausentes**|
| - | - |
|COD_GRUPO                 |60|
|COD_SETOR_COMERCIAL       |60|
|NUM_QUADRA                |60|
|COD_ROTA_LEITURA          |60|
|COD_LEITURA_INF_1       |3,677,323|
|COD_LEITURA_INF_2       |4,273,316|
|COD_LEITURA_INF_3       |4,296,577|
|FATURADO_MEDIA           |4,201,723|
|COD_LATITUDE              |24|
|COD_LONGITUDE             |24|

Valores Nulos / Ausentes (FRAUDES)

|**Nome da Coluna**              |**Valores Nulos / Ausentes**|
| - | - |
|COD_GRUPO                       |73,790|
|SETOR                           |4|
|DATAPROGRAMACAO                 |1,599|
|MOTIVOEXECOCOR                  |49,913|
|TEMPOPADRAO                     |49,913|
|TEMPOATENDIMENTO                |49,913|
|DESCRSETORSOLICITANTE           |211,590|
|DAT_AGENDAMENTO                 |177,267|
|SF                              |49,913|
|NR_ROTA                         |49,915|
|CD_SUB_REGIAO                   |49,913|
|CD_REGIAO                       |49,913|
|DT_FECHAMENTO                   |435|
|PARECER_EXECUCAO                |122,250|
|FL_PROGRAMACAO_AUTOMATICA       |49,913|
|NMCOMUNIDADE                    |225,997|
|AREAATUACAO                     |225,997|

### 2.2. Normalização das variáveis numéricas

o `StandardScaler` da biblioteca `sklearn` foi a ferramenta utilizada para normalização de variáveis númericas. 

### 2.2. Tratamento das variáveis categóricas

Para o tratamento das variáveis categóricas foi aplicado o One Hot Encoding. Na tabela de consumo, as colunas utilizadas foram as seguintes:

`'CATEGORIA', 'SUB_CATEGORIA','TIPO_LIGACAO', 'EXCECAO', 'FATURADO_MEDIA'`

Já para a de fraudes, foram as seguintes:

`'DESCRICAO', 'NM_TIPO_EXECUCAO', 'DS_SERVICO_SOLICITADO', 'TIPOOS'`

### 2.3. Merge das tabelas tratadas

A junção que foi realizada das duas tabelas foi feita para identificar quais matrículas estavam atreladas a fraudes. Para isso, foi separado um pedaço da tabela de fraudes referente apenas a 2020 e feita uma comparação destas matrículas com as de consumo, também de 2020. A `proporção de casos de fraude` identificada para este ano após a junção foi de `33.43%`, calculada pela média de fraudes na tabela gerada.

## 3. Análise dos dados

### 3.1. Dados da tabela consumo

Análises sazonais podem ser uma boa iniciativa para as análises que virão a seguir pois podem possibilitar futuros insights sobre o consumo de água. O estudo das flutuações sazonais no consumo de água ao longo de 2020 revela importantes padrões de variação. No início do ano, o consumo manteve-se relativamente estável, mas experimentou uma queda significativa em junho. A partir de julho, o consumo aumentou, atingindo um pico em setembro, possivelmente devido ao aumento das temperaturas e à maior demanda. Esse conhecimento é essencial para a formulação de estratégias de gestão de recursos hídricos mais eficientes

![image](https://github.com/user-attachments/assets/3228a63b-e97d-4dba-b6e2-fe0e1919299f)

Imagem 1 - Fonte: Autores

![image](https://github.com/user-attachments/assets/0f877df1-d605-4671-b27b-2c244a1625ab)

Imagem 2 - Fonte: Autores

### 3.2. Dados sobre fraudes

O gráfico abaixo apresenta uma análise preliminar dos dados de fraudes em 2020. Ele mostra que o número de consumos fraudados foi quase equivalente ao consumo não fraudado durante o período, sugerindo que, embora o número total de fraudes não seja excessivamente alto, algumas fraudes tiveram um impacto significativo no consumo de água.

![image](https://github.com/user-attachments/assets/4d3849f8-4128-4714-adf6-88e6893d049d)

Imagem 3 - Fonte: Autores

#### 3.2.1. Dados sazonais 

![image](https://github.com/user-attachments/assets/9b52bad8-cf69-4866-9dc4-5ee0270c61c4)

Imagem 4 - Fonte: Autores

Este gráfico em conjunto com o gráfico abaixo serve como uma sequência do gráfico anterior a ele, pois mostra que houveram mais fraudes no final do ano mas que, apesar disso, houve mais consumo e, consequentemente, mais consumo fraudado no início do ano, entre os meses de janeiro e maio.

![image](https://github.com/user-attachments/assets/6d44054e-c1a0-4a48-ab50-c1932098b7e8)

Imagem 5 - Fonte: Autores

O gráfico acima mostra, além do que já foi mencionado, que o mês março é um período que deve ter atenção durante as análises, visto que o número de fraudes tanto quanto o de consumo foram altos durante este mês.

#### 3.2.2. Dados por variáveis categóricas

![image](https://github.com/user-attachments/assets/48d6f657-ae91-41e1-bcbb-7fb03a3c6885)

Imagem 6 - Fonte: Autores

Com o resultado do gráfico, é possível deduzir que os tipos de ocorrência "medidor invertido / ligação lacrada" e "imóvel desocupado", principalmente, foram, em 2020, encontrados em fraudes que podem ser consideradas pontos importantes de atenção, uma vez que o consumo de água também foi alto para estas categorias.

Sabendo disso, pode ser interessante analisar estas categorias em específico, o que foi feito nos gráficos a seguir:

![image](https://github.com/user-attachments/assets/8f26055a-c870-41fd-8d42-a33914faadad)

Imagem 7 - Fonte: Autores

![image](https://github.com/user-attachments/assets/78b9657e-81d2-4e6f-86ec-4fad71a3de90)

Imagem 8 - Fonte: Autores

![image](https://github.com/user-attachments/assets/7ba3ce33-d640-4303-bbae-4d6be9e23e5f)

Imagem 9 - Fonte: Autores

Com o resultado plotado por estes gráficos, pode-se concluir que a categoria de ocorrência "medidor invertido / ligação lacrada" foi ainda mais um outlier no período observado, tendo em vista os altos índices de fraude em um período de alto consumo, período esse que atingiu um pico no consumo em ambas as ocorrências observadas. Análises futuras podem levar a uma explicação do porquê isso ocorreu.


#### 3.2.3. Big Numbers

|**Descrição**                                              |**Valor**      |
| - | - |
|Total de Registros                                        |4,297,810      |
|Total de Fraudes Identificadas                            |1,436,754      |
|Consumo Total de Água                                     |541.43 m³      |

Os Big Numbers apresentados na análise representam métricas chave do projeto, que sintetizam as principais descobertas do estudo. Vamos detalhar o que cada uma dessas métricas representa:

Total de Registros (4,297,810): Esse número refere-se ao total de registros analisados na base de dados. Ele indica a abrangência do estudo, mostrando que a análise foi realizada em um volume significativo de dados, o que aumenta a confiabilidade dos resultados obtidos.

Total de Fraudes Identificadas (1,436,754): Esse valor indica o número total de fraudes detectadas ao longo do ano. É um dado crucial para a análise, pois reflete a eficácia dos métodos empregados para identificar irregularidades no consumo de água. A proporção de fraudes identificadas também serve como um indicador do nível de risco e da necessidade de intervenções mais rigorosas.

Consumo Total de Água (541.43 m³): Essa métrica indica o volume total de água consumido, em metros cúbicos, ao longo do período analisado. É uma medida importante que, junto com as outras, ajuda a contextualizar o impacto das fraudes e a eficiência do sistema de distribuição de água.
