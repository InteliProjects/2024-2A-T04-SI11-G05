# Relatório de Avaliação de Métricas - Detecção de Fraudes
## 1. Introdução
Este relatório documenta a avaliação de métricas de desempenho de um modelo de rede neural desenvolvido para a Aegea, uma das maiores empresas do setor de saneamento básico. O objetivo principal do modelo é detectar fraudes em contas de água, auxiliando a empresa na identificação de inconsistências e padrões fraudulentos em sua base de clientes. As métricas avaliadas incluem acurácia, recall, F1-score e AUC-ROC, fundamentais para entender o desempenho do modelo em termos de identificação precisa e eficaz de fraudes. O relatório também aborda as análises de erros, as curvas de aprendizado e discute a capacidade de generalização do modelo com base nos resultados obtidos no conjunto de testes.

## 2. Avaliação das Métricas


![Metricas](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/download.png)


#### 2.1 Acurácia
A acurácia representa o percentual de previsões corretas realizadas pelo modelo, considerando tanto as fraudes corretamente identificadas quanto as contas legítimas classificadas corretamente. Com os dados balanceados, o modelo de rede neural apresentou uma acurácia de 70%, o que significa que 70% das previsões estavam corretas. Isso indica que o modelo está acertando na maioria dos casos, mas ainda comete erros em 30% das situações. Em um cenário de detecção de fraudes, esses erros podem ter implicações sérias, seja pela falha em identificar fraudes (falsos negativos) ou por classificar contas legítimas como fraudulentas (falsos positivos). Mesmo com o balanceamento dos dados, a acurácia de 70% sugere que há espaço para melhorias no modelo.

## 2.2 Precisão e Recall
A precisão (ou precision) mede a proporção de previsões de fraudes que estão corretas, ou seja, a porcentagem de casos classificados como fraudes pelo modelo que realmente são fraudes. No caso em questão, o modelo apresentou uma precisão de 60%, o que significa que, das fraudes que o modelo previu, 60% foram de fato fraudes reais. Esse valor indica que o modelo é relativamente bom em evitar falsos positivos, o que é importante para não gerar alertas indevidos ou ações corretivas desnecessárias em contas legítimas.

Embora o modelo esteja identificando corretamente uma fração significativa dos casos em que prevê fraude, essa métrica por si só não dá uma visão completa. Uma precisão de 60% combinada com um recall de apenas 25% sugere que o modelo é seletivo ao apontar fraudes, optando por "jogar seguro" e só fazer previsões quando há alta certeza. Isso resulta em menos falsos positivos (como indicado pela precisão razoavelmente alta), mas também significa que o modelo pode estar deixando passar muitas fraudes verdadeiras, conforme indicado pelo baixo recall.

## 2.3 F1-Score
O F1-Score é uma métrica que representa a média harmônica entre precisão e recall, sendo especialmente útil em cenários onde as classes estão desbalanceadas, como na detecção de fraudes. Neste caso, o modelo apresentou um F1-Score de 45%. Essa métrica reflete um equilíbrio entre a capacidade do modelo de identificar corretamente as fraudes (recall) e sua precisão ao fazer essas previsões.

Um F1-Score de 45% sugere que o modelo enfrenta desafios significativos em equilibrar a detecção de fraudes e a precisão das previsões. Embora a precisão seja de 60%, o recall baixo de 25% puxa o F1-Score para baixo, indicando que, mesmo quando o modelo faz previsões corretas, ele não consegue detectar uma proporção significativa de fraudes. Pretendemos melhorar essa métrica, pois um F1-Score mais baixo indica que o modelo pode não estar fornecendo um desempenho satisfatório na tarefa de detecção de fraudes.

## 2.4 AUC-ROC
A AUC-ROC (Área sob a curva ROC) é uma métrica que avalia a capacidade do modelo de diferenciar entre as classes. Para o nosso modelo, a AUC-ROC foi calculada em 0.5779, o que indica que o modelo possui uma capacidade moderada de discriminação. Embora um valor próximo a 1 indique um ótimo desempenho, esse resultado sugere que o modelo ainda tem espaço para melhorias em sua capacidade de distinguir entre contas fraudulentas e legítimas.

## 3. Análise de Erros
### 3.1 Tipos de Erros
Na análise de erros, destacamos dois tipos principais: os falsos positivos e os falsos negativos. Os falsos positivos ocorrem quando o modelo prevê que uma conta é fraudulenta, mas, na realidade, essa conta é legítima. Por outro lado, os falsos negativos acontecem quando o modelo falha em identificar uma conta fraudulenta que realmente está presente.

### 3.2 Causas Prováveis dos Erros
A matriz de confusão revela um cenário significativo, onde dos 93.335 casos que o modelo identificou como fraudes, apenas 9.335 eram, de fato, fraudes (verdadeiros positivos), enquanto 27.579 fraudes passaram despercebidas (falsos negativos). As causas prováveis desses erros incluem o excesso de ruído nos dados, que se refere à presença de informações irrelevantes ou imprecisas que podem interferir na capacidade do modelo de aprender padrões válidos. Além disso, os padrões de fraude podem ser muito complexos e variados, dificultando a detecção por parte do modelo.

### 3.3 Impacto dos Erros
Os impactos dos erros são significativos no contexto da detecção de fraudes para a Aegea. Os falsos positivos podem resultar em custos financeiros substanciais, já que a empresa envia agentes ao local para investigar as contas que foram incorretamente identificadas como fraudulentas. Essa ação não apenas gera gastos desnecessários, mas também pode afetar a relação da empresa com clientes legítimos, resultando em insatisfação e possível perda de clientes.

Por outro lado, os falsos negativos representam um problema crítico, pois as fraudes continuam a ocorrer sem serem detectadas. Isso não apenas causa perdas financeiras diretas, mas também pode prejudicar a reputação da empresa, reduzindo a confiança dos clientes em sua capacidade de garantir um serviço seguro e eficiente. Diante desse cenário, é essencial que o foco esteja em aumentar a taxa de acerto do modelo. Melhorar a detecção de fraudes deve ser a prioridade, pois isso permitirá que a empresa minimize os custos associados ao envio de agentes e, ao mesmo tempo, reduza as perdas financeiras decorrentes de fraudes não detectadas.


## 4. Curvas de Aprendizado
### 4.1 Visualização das Curvas
As curvas de aprendizado, apresentadas a seguir, mostram a evolução da perda e da acurácia do modelo ao longo das épocas.


![Curvas](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%204/Imagens/treino.png)


### 4.2 Discussão das Curvas de Aprendizado
As curvas indicam um progresso encorajador no desempenho do modelo. A perda de treinamento e validação apresenta uma tendência de queda, sinalizando que o modelo está aprendendo a capturar os padrões nos dados. Além disso, a acurácia mostra um aumento consistente ao longo das épocas, sugerindo que o modelo está se ajustando bem e se tornando mais eficaz na detecção de fraudes. Este padrão é um bom indicativo de que, com mais iterações e possíveis ajustes nos hiperparâmetros, o modelo pode alcançar um desempenho ainda melhor.

## 5. Discussão sobre Generalização
## 5.1 Capacidade de Generalização
A capacidade de generalização do modelo é fundamental para sua eficácia em cenários do mundo real. Os resultados obtidos até agora indicam que o modelo está em um caminho positivo, com uma base sólida para expandir sua aplicabilidade a novos dados. Com um foco contínuo em melhorias, como a otimização dos dados de entrada e a exploração de novas variáveis, podemos potencialmente aumentar ainda mais a robustez do modelo.

## 5.2 Sinais de Overfitting
Embora não haja sinais imediatos de overfitting nas curvas de aprendizado, é crucial monitorar esse aspecto durante o treinamento contínuo. Implementar técnicas de regularização e validação cruzada ajudará a garantir que o modelo mantenha sua capacidade de generalização. A adoção de estratégias como aumento de dados e ajuste de hiperparâmetros também pode otimizar o desempenho, proporcionando um modelo mais resiliente e eficaz na detecção de fraudes.


### 6. Visualizações das Métricas
### 6.1 Curva ROC

![Curva_Roc](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/curva%20aprendizado.png)


### 6.2 Matriz de Confusão

![Matriz](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%204/Imagens/matriz1.png)


### 7. Conclusão
Em resumo, o modelo de detecção de fraudes desenvolvido para a Aegea apresenta um desempenho inicial encorajador, com um grande potencial para melhorias significativas. Embora a acurácia e a precisão estejam em níveis razoáveis, os resultados indicam que o recall e o F1-Score são áreas críticas que oferecem oportunidades valiosas para otimização.

A baixa taxa de recall atual destaca um campo fértil para avanços. Isso significa que muitas fraudes ainda estão escapando da detecção, o que representa uma oportunidade imensa para a Aegea aprimorar suas operações e minimizar perdas financeiras. Com um enfoque estratégico em melhorar essa métrica, a empresa pode não apenas aumentar a detecção de fraudes, mas também fortalecer sua reputação como prestadora de serviços confiáveis e eficazes.

As curvas de aprendizado revelam que o modelo está em um caminho promissor, indicando que com ajustes nos hiperparâmetros e um treinamento mais extenso, poderemos elevar drasticamente sua eficácia. Cada iteração no treinamento representa um passo em direção a uma solução mais robusta e confiável.
