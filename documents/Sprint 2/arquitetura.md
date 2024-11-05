# Documento Técnico: Seleção da Arquitetura de Rede Neural Artificial para Detecção de Fraudes no Consumo de Água


![Arquitetura](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/undersample.png)


## 1. Introdução

### 1.1 Contextualização do Problema
A Aegea Saneamento enfrenta um grande desafio com fraudes no consumo de água, que afetam diretamente o faturamento e a qualidade dos serviços de abastecimento. A identificação precisa dessas fraudes é fundamental para mitigar os impactos negativos.

### 1.2 Objetivo do Documento
Este documento visa justificar a seleção da arquitetura de uma Rede Neural Artificial (RNA) projetada para detectar fraudes no consumo de água, utilizando dados históricos de consumo e outras variáveis relevantes. A escolha da arquitetura é baseada em literatura especializada e boas práticas do campo de aprendizado profundo (deep learning).

## 2. Arquitetura da Rede Neural

### 2.1 Descrição Geral da Arquitetura
A arquitetura da rede neural foi projetada para processar um grande número de variáveis relacionadas ao consumo de água e identificar padrões indicativos de fraude. A arquitetura consiste nas seguintes camadas:

#### 2.1.1 Camada de Entrada
A camada de entrada possui 264 neurônios, correspondendo às 264 variáveis ou características (features) dos dados de consumo medido, fornecidos pela Aegea. Esta camada inicial é responsável por receber os dados e transferi-los para as camadas ocultas subsequentes.

#### 2.1.2 Camadas Ocultas
A rede inclui duas camadas ocultas:

- **Primeira Camada Oculta:** Com 64 neurônios e ativação ReLU (Rectified Linear Unit), esta camada é projetada para capturar padrões complexos nos dados, essenciais para a identificação de fraudes.
- **Segunda Camada Oculta:** Com 32 neurônios e também ativação ReLU, esta camada refina os padrões identificados, ajudando a melhorar a precisão do modelo.
- **Terceira Camada Oculta:** Com 16 neurônios e ativação ReLU, esta camada continua a refinar os padrões complexos para melhorar a precisão.

A função de ativação ReLU foi escolhida por sua capacidade de introduzir não linearidade no modelo, permitindo que a rede aprenda relações complexas e evite o problema do desaparecimento do gradiente, comum em redes profundas.

#### 2.1.3 Camada de Saída
A camada de saída é composta por um único neurônio com função de ativação sigmoide. Esta camada produz uma probabilidade entre 0 e 1, indicando a chance de uma determinada matrícula apresentar um comportamento fraudulento.

- **Função de Ativação Sigmoide:** Adequada para tarefas de classificação binária, a sigmoide transforma a saída do modelo em uma probabilidade que pode ser interpretada como um indicador de fraude.

### 2.2 Justificativa da Arquitetura Selecionada
A escolha da arquitetura foi motivada por:

- **Dimensionalidade dos Dados:** Com 264 variáveis, a arquitetura precisa ser capaz de processar uma grande quantidade de informações e extrair características relevantes que possam indicar fraudes.
- **Eficiência Computacional:** A combinação de 64, 32, e 16 neurônios nas camadas ocultas equilibra a complexidade e a eficiência do modelo, garantindo bom desempenho sem risco de overfitting.
- **Boas Práticas de Deep Learning:** A utilização de ReLU e sigmoide segue as melhores práticas na construção de redes neurais, assegurando um treinamento eficiente e uma boa capacidade de generalização.

### 2.3 Boas Práticas Implementadas
- **Normalização dos Dados:** Todas as variáveis foram normalizadas, assegurando que os dados estejam em uma escala semelhante, o que é essencial para a convergência do modelo.
- **Regularização:** Foi implementada a técnica de dropout nas camadas ocultas para reduzir o risco de overfitting e melhorar a capacidade do modelo de generalizar para novos dados.
- **Balanceamento de Classes:** Devido ao desbalanceamento natural entre fraudes e não fraudes, técnicas de oversampling foram consideradas para ajustar o modelo e melhorar sua precisão na detecção de fraudes.

## 3. Conclusão
Este documento apresenta uma análise detalhada da seleção da arquitetura de uma Rede Neural Artificial para detecção de fraudes no consumo de água, conforme o projeto para Aegea Saneamento. A arquitetura foi cuidadosamente escolhida para contribuir para a identificação precisa de fraudes e, consequentemente, para a melhoria da eficiência operacional da Aegea.
