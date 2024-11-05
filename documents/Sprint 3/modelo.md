# Documentação da V2 da Rede Neural

Após a entrega do último modelo, retrocedemos alguns passos para analisar como poderíamos melhorar o desempenho. Observamos alguns pontos que foram cruciais para alcançar um melhor resultado:

## Ajustes no Pré-processamento

### Aplicação 
  Aplicação do RobustScaler
  Optamos por aplicar o RobustScaler em nosso conjunto de dados devido à diversidade nas escalas de consumo entre empresas e residências. Observamos que empresas de grande porte apresentavam dados de consumo significativamente maiores do que os de casas, o que poderia levar a distorções nas análises e modelos preditivos.
  
  O RobustScaler é uma técnica de normalização que se destaca em cenários onde os dados contêm outliers. Ao contrário de métodos tradicionais, como o StandardScaler, que normaliza os dados com base na média e no desvio padrão, o RobustScaler utiliza o intervalo interquartil (IQR) para realizar a escalonamento. Este método calcula a mediana e os quartis (25% e 75%) dos dados, permitindo que a normalização seja menos afetada por valores extremos.

### Undersample:
  Inicialmente, testamos a técnica SMOTE (Synthetic Minority Over-sampling Technique) para lidar com o desequilíbrio entre as classes de dados fraudulentos e não fraudulentos. O SMOTE funciona gerando novos exemplos sintéticos da classe minoritária (neste caso, fraudes) ao invés de simplesmente duplicar exemplos existentes. Isso é feito analisando as características dos pontos de dados da classe minoritária e criando novos pontos de dados ao interpolar entre eles.

No entanto, enfrentamos dificuldades na criação de valores fictícios que fossem representativos e relevantes no contexto de fraudes. A criação de novos dados sintéticos pode ser problemática, especialmente se os padrões de fraude forem complexos e variados. Isso pode resultar em exemplos que não refletem adequadamente as características reais dos dados de fraude, comprometendo a eficácia do modelo.

Decisão pelo Undersampling
Diante dessas dificuldades, decidimos aplicar o método de undersampling, que consiste em reduzir o número de exemplos da classe majoritária (não fraudulentos) para igualar o número de exemplos da classe minoritária (fraudulentos). Essa abordagem foi escolhida por vários motivos:

Eliminação de Ruído: Ao selecionar apenas um subconjunto representativo da classe majoritária, podemos potencialmente eliminar dados que são irrelevantes ou ruinosos, melhorando a qualidade dos dados que permanecem.

Equilíbrio de Classes: A principal vantagem do undersampling é que ele equaliza a distribuição entre as classes, o que pode ajudar a melhorar a capacidade do modelo de aprender a distinguir entre as classes.

![UnderSample](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/undersample.png)

## Clusterização

  Com o intuito de enriquecer o modelo e fornecer informações adicionais sobre os dados, decidimos explorar as colunas de latitude e longitude. A localização geográfica pode ser um fator importante na análise de fraudes, pois padrões de comportamento podem variar significativamente de acordo com a região.

**Uso do K-means para Agrupamento**
Optamos por utilizar o algoritmo de K-means para realizar o agrupamento das coordenadas geográficas. O K-means é uma técnica de aprendizado não supervisionado que visa dividir um conjunto de dados em K grupos ou clusters, onde cada ponto é atribuído ao cluster mais próximo com base na distância euclidiana.
  
## Uso de Imagens

Com o objetivo de enriquecer a análise dos dados e potencializar a capacidade do modelo em detectar fraudes, decidimos utilizar as colunas de latitude e longitude para obter imagens de satélite das áreas correspondentes. Essas imagens oferecem uma perspectiva visual das regiões, o que pode ser essencial para identificar padrões e comportamentos anômalos.

Obtenção e Processamento das Imagens
Coleta de Imagens de Satélite: A partir das coordenadas geográficas, buscamos imagens de satélite que representassem os locais de interesse. Essas imagens fornecem informações valiosas sobre o ambiente, incluindo características de infraestrutura, densidade populacional e uso do solo.

Modelo Convolucional VGG: Para processar as imagens obtidas, aplicamos um modelo convolucional VGG (Visual Geometry Group). O VGG é uma arquitetura de rede neural profunda, amplamente utilizada em tarefas de visão computacional, reconhecida por sua eficácia na extração de características de imagens.

Funcionamento do Modelo Convolucional
Estrutura da Rede: O VGG é composto por camadas convolucionais seguidas por camadas de pooling e camadas totalmente conectadas. As camadas convolucionais são responsáveis por extrair características locais das imagens, enquanto as camadas de pooling reduzem a dimensionalidade e mantêm as características mais relevantes.

Extração de Características: Ao passar as imagens de satélite pelo modelo VGG, recebemos uma série de características numéricas que representam as informações visuais contidas nas imagens. Essas características podem incluir:

Densidade de Edifícios: Refere-se à quantidade de estruturas em uma área, o que pode ser um indicativo de atividade comercial ou residencial.
Tipos de Cobertura do Solo: Informações sobre vegetação, água e áreas urbanas que podem afetar o comportamento de consumo.


![Imagens](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/imagens.png)



## Otimização do Modelo

A otimização bayesiana é uma abordagem eficaz para ajustar os hiperparâmetros de modelos de aprendizado de máquina. Este método busca maximizar a performance do modelo, utilizando uma função probabilística para explorar o espaço de hiperparâmetros de forma mais eficiente do que métodos tradicionais, como a busca em grade (grid search) ou busca aleatória (random search).

Parâmetros Testados
Durante o processo de otimização, os seguintes hiperparâmetros foram testados:

Número de Neurônios nas Camadas Ocultas:

units1: O número de neurônios na primeira camada oculta, variando entre 32 e 512.
units2: O número de neurônios na segunda camada oculta, também variando entre 32 e 512.
Esses parâmetros afetam a capacidade do modelo de aprender representações complexas dos dados.
Taxa de Aprendizado:

learning_rate: A taxa de aprendizado do otimizador Adam, variando entre 0,0001 e 0,01. Este parâmetro controla o quanto os pesos do modelo são ajustados a cada iteração durante o treinamento. Uma taxa de aprendizado adequada é crucial para a convergência eficaz do modelo.
Taxa de Dropout:

dropout1: A taxa de dropout aplicada à primeira camada oculta, variando entre 0,1 e 0,5. O dropout é uma técnica regularizadora que ajuda a prevenir o overfitting, desligando aleatoriamente uma fração dos neurônios durante o treinamento.
Benefícios da Otimização Bayesiana
Eficiência na Busca: A otimização bayesiana é significativamente mais eficiente do que métodos tradicionais, pois utiliza informações passadas para orientar a busca, priorizando combinações de hiperparâmetros que têm maior probabilidade de melhorar a performance.

Melhor Convergência: Ao modelar a função de desempenho como uma função probabilística, a otimização bayesiana pode convergir mais rapidamente para a melhor configuração de hiperparâmetros, economizando tempo e recursos computacionais.

Exploração Inteligente: O método equilibra a exploração de novas áreas do espaço de hiperparâmetros com a exploração de regiões que já mostraram bons resultados, resultando em uma busca mais inteligente e informada.

![Otimização](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/otimizacao.png)


## Resultados

Acurácia (0,6979)
A acurácia de 69,79% é um resultado positivo e indica que o modelo é capaz de classificar corretamente aproximadamente 69,79% das instâncias no conjunto de teste. Aqui estão alguns pontos de destaque:

Precisão (0,5779):
A precisão de aproximadamente 57,79% é um bom começo para o modelo de detecção de fraudes. Isso significa que, das fraudes que o modelo identificou como positivas, cerca de 57,79% realmente eram fraudes. Essa taxa já demonstra que o modelo tem uma base sólida e está começando a reconhecer padrões relevantes. Com um foco contínuo em otimizar a precisão, há uma oportunidade significativa para reduzir falsos positivos e aumentar a confiança nas previsões.

Revocação (0,2529):
Embora a revocação de 25,29% indique que há espaço para melhoria na identificação de fraudes, é importante notar que o modelo já está realizando uma detecção inicial. Essa métrica pode ser aprimorada à medida que o modelo evolui, ajudando a captar um maior número de fraudes. O potencial para aumentar a revocação oferece uma oportunidade valiosa para maximizar a eficácia do sistema.

F1-score (0,3518):
O F1-score de 35,18% reflete um equilíbrio inicial entre precisão e revocação. Apesar de ser um valor que sugere que ajustes são necessários, ele também indica que o modelo já está começando a integrar essas duas dimensões. Essa métrica serve como um ponto de partida para futuras melhorias, e o foco em aumentá-la pode resultar em um sistema de detecção de fraudes mais robusto e eficiente.

![Metricas](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/download.png)

***Matriz de confusão:***

Essa matriz pode ser interpretada da seguinte forma:

Verdadeiros Negativos (TN): 70.141 — O número de instâncias que foram corretamente classificadas como não fraudes.
Falsos Positivos (FP): 6.818 — O número de instâncias que foram incorretamente classificadas como fraudes.
Falsos Negativos (FN): 27.579 — O número de instâncias que foram incorretamente classificadas como não fraudes (ou seja, fraudes que passaram despercebidas).
Verdadeiros Positivos (TP): 9.335 — O número de instâncias que foram corretamente identificadas como fraudes.

A combinação de um número significativo de fraudes corretamente identificadas e uma sólida base de não fraudes corretamente classificadas oferece uma oportunidade valiosa para otimização. Com ajustes focados na redução de falsos positivos e negativos, é possível aumentar ainda mais a precisão e a revocação, resultando em um sistema de detecção de fraudes mais robusto e confiável.

![Matriz](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/confusion.png)


***Análise da Curva ROC***
A curva ROC (Receiver Operating Characteristic) é uma ferramenta valiosa para avaliar a eficácia do modelo na classificação entre fraudes e não fraudes. Com uma área sob a curva (AUC) de aproximadamente 0,5821, o modelo demonstra uma capacidade razoável de discriminação. Esse resultado indica que, embora haja espaço para melhorias, o modelo já está superando o desempenho de um classificador aleatório, mostrando que ele consegue identificar alguns padrões relevantes nos dados.

Um AUC de 0,5821 é um passo positivo na direção certa, sugerindo que o modelo está começando a captar informações úteis que podem ser aprimoradas. Essa métrica oferece uma base sólida para futuros ajustes e otimizações, proporcionando uma oportunidade valiosa para incrementar a capacidade de detecção de fraudes. Com um foco contínuo em estratégias de melhoria, como ajuste de hiperparâmetros e exploração de novas características, estamos bem posicionados para elevar ainda mais o desempenho do modelo.



![Curva_Roc](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/curva_roc.png)

## Conclusão

Na terceira sprint do desenvolvimento da V2 da rede neural, conseguimos avanços significativos em relação ao desempenho do modelo de detecção de fraudes. A acurácia atingida de 69,79% é um reflexo direto das melhorias implementadas, como o uso do RobustScaler e a transição para técnicas de undersampling. Essas abordagens permitiram um melhor equilíbrio entre as classes de dados, favorecendo uma identificação mais precisa das fraudes. A introdução de análises geográficas e imagens de satélite também enriqueceu nossa compreensão dos padrões de consumo, contribuindo para um modelo mais robusto.

Embora ainda haja espaço para melhorias, especialmente na revocação, os resultados obtidos até agora são promissores. A precisão de 57,79% ndica que o modelo está começando a capturar características relevantes dos dados. Com o foco contínuo na otimização e no ajuste de hiperparâmetros, estamos confiantes de que o sistema se tornará ainda mais eficaz na detecção de fraudes, permitindo à Aegea implementar soluções mais robustas e confiáveis para combater esse desafio.

