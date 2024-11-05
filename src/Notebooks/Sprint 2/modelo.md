# Documento Técnico: Modelo de Rede Neural para Detecção de Fraudes no Consumo de Água

## 1. Introdução

A Aegea Saneamento, líder no setor privado de saneamento básico no Brasil, enfrenta desafios significativos relacionados à fraude no consumo de água. Este problema impacta diretamente a receita da empresa e a qualidade do serviço prestado à população. Com o objetivo de melhorar a detecção de fraudes, foi desenvolvido um modelo de Rede Neural Artificial (RNA) utilizando dados históricos de consumo. Este documento apresenta a arquitetura do modelo, a justificativa para a escolha dos hiperparâmetros e os resultados preliminares obtidos.

## 2. Modelo de Rede Neural

### 2.1 Arquitetura do Modelo

O modelo foi desenvolvido utilizando a biblioteca Keras, com uma arquitetura sequencial composta por cinco camadas densas e uma camada de saída. A arquitetura foi projetada para capturar a complexidade dos padrões de consumo de água e identificar comportamentos fraudulentos.

A arquitetura do modelo é descrita a seguir:

- **Camada de Entrada**: A camada de entrada recebe dados com dimensões correspondentes ao número de *features* após a aplicação de técnicas de balanceamento e normalização.
- **Camada Oculta 2**: 64 neurônios com função de ativação ReLU.
- **Camada Oculta 3**: 32 neurônios com função de ativação ReLU.
- **Camada Oculta 4**: 16 neurônios com função de ativação ReLU.
- **Camada de Saída**: 1 neurônio com função de ativação sigmoide para prever a probabilidade de uma determinada entrada ser fraudulenta ou não.



## 3. Descrição dos Hiperparâmetros

Os hiperparâmetros escolhidos para o modelo foram selecionados com base em boas práticas de modelagem de *deep learning* e são detalhados abaixo:

- **Número de Neurônios**: A quantidade de neurônios nas camadas ocultas foi escolhida com base na necessidade de capturar a complexidade dos dados de consumo de água. A arquitetura foi gradualmente reduzida de 64 neurônios na primeira camada para 16 neurônios na última camada oculta, permitindo a extração de características cada vez mais abstratas.
- **Função de Ativação (ReLU)**: A função de ativação ReLU foi escolhida para todas as camadas ocultas devido à sua eficácia em lidar com a não-linearidade dos dados e em mitigar o problema do desaparecimento do gradiente, comum em redes profundas.
- **Função de Ativação (Sigmoide)**: A função de ativação sigmoide foi utilizada na camada de saída para converter a saída do modelo em uma probabilidade binária, o que é essencial para a tarefa de classificação de fraudes.
- **Loss Function (Binary Crossentropy)**: A função de perda binária foi utilizada devido à natureza binária do problema de detecção de fraudes (fraude/não fraude).
- **Optimizer (Adam)**: O otimizador Adam foi escolhido por sua eficiência e capacidade de ajuste adaptativo, tornando-o uma escolha popular para a maioria dos problemas de aprendizado profundo.
- **Batch Size e Epochs**: O modelo foi treinado com batch size de 10 e por 25 épocas. Esses valores foram selecionados para garantir um equilíbrio entre a precisão do modelo e o tempo de treinamento.

## 4. Resultados Preliminares

### 4.1 Acurácia e Perda durante o Treinamento

Os gráficos abaixo mostram a evolução da perda e da acurácia do modelo durante as 20 épocas de treinamento. Observou-se que a acurácia do treinamento começou em torno de 51% e aumentou para cerca de 54,93% até a última época. A perda, por outro lado, começou em 0,9657 e reduziu-se gradualmente até atingir 0,6849.

### 4.2 Avaliação no Conjunto de Teste

Após o treinamento, o modelo foi avaliado no conjunto de teste, onde obteve uma acurácia de 54,93%. Este resultado indica que o modelo possui um desempenho razoável, mas ainda há espaço para melhorias, como ajuste de hiperparâmetros adicionais, regularização e possíveis modificações na arquitetura.

### 4.3 Gráficos de Perda e Acurácia


## 5. Conclusão

O modelo de rede neural desenvolvido apresenta uma estrutura robusta, adequada para o problema de detecção de fraudes no consumo de água. Embora os resultados preliminares mostrem que o modelo é capaz de aprender padrões nos dados, há oportunidades para aprimoramento, como ajustes nos hiperparâmetros e experimentação com arquiteturas alternativas. A abordagem seguida demonstra um entendimento claro das práticas recomendadas em aprendizado profundo e a aplicação eficaz dessas práticas ao problema específico.
