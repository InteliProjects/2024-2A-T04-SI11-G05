# Documentação de Projeto



## INSTITUTO DE TECNOLOGIA E LIDERANÇA – INTELI



### Previsão de Fraudes do consumo de água 

#### Parceiro de projeto: AEGEA


#### Autores: 

Rodrigo Campos

Matheus Fidelis

Michel Mansur

Lucas Conti

Daniel Barzilai

Uelinton Rocha

#### Data de criação: 07 de Outubro de 2024


#### SÃO PAULO – SP, 2024



_

_

_


_


_

_


_

## Sumário

1. [Introdução](#c1)

2. [Descrição do Problema](#c2)

3. [Objetivos](#c3)

4. [Sobre a Empresa Parceira](#c4)

    4.1 Benefícios Esperados para o Parceiro

5. [Escopo Macro](#c5)

6. [Análise de Negócios](#c6)
    
    6.1 Canvas Proposta de Valor
    
    6.2 Matriz de Risco
    
    6.3 Análise PESTEL

    6.4 Business Model Canvas

    6.5 Análise Financeira: Investimento Estratégico para o Futuro
    
7. [Análise de Experiência do Usuário](#c7)
    
    7.1 Personas, antipersonas e jornada do usuário
    
    7.2 User Stories

8. [Wireframe da Solução](#c8)

9. [Protótipo de Alta Fidelidade da Interface](#c9)

10. [Front-End da Solução](#c10)

11. [API de Integração](#c11)

12. [Documentação Técnica](#c12)

    12.1 Arquitetura do Projeto

    12.2 Pré-processamento dos Dados

    12.3 Modelo

13. [Implantação da API](#c13)

13. [Referências](#c14)

# <a name="c1"></a>1. Introdução
&emsp;&emsp;A identificação de fraudes no consumo de água é essencial para garantir a eficiência e a sustentabilidade dos recursos hídricos. Este documento propõe uma solução inovadora que aplica técnicas avançadas de deep learning para detectar padrões anômalos de consumo de água. Nossa abordagem combina a análise de dados históricos com a inclusão de variáveis externas, como indicadores econômicos, climáticos e geográficos, a fim de aumentar a precisão das previsões.

&emsp;&emsp;Além de discutir os resultados gerados pelos modelos de deep learning, também exploramos as principais variáveis que impactam a detecção de fraudes, oferecendo insights práticos para justificar as decisões do modelo. Para tornar esses resultados acessíveis aos usuários, foi desenvolvida uma interface intuitiva que apresenta as previsões de forma clara e compreensível.

# <a name="c2"></a>2. Descrição do Problema
&emsp;&emsp;A prática de fraudes no consumo de água é um desafio crítico para a Aegea e outras empresas do setor de saneamento. Fraudes ocorrem quando consumidores manipulam hidrômetros, fazem ligações clandestinas ou utilizam métodos para reduzir ou eliminar os valores devidos pelo consumo real.

&emsp;&emsp;Essas práticas causam sérios prejuízos, como danos à infraestrutura de tubulações, vazamentos, interrupções no fornecimento, perda de receita e aumento do risco de contaminação. A Aegea já conta com diversas estratégias para enfrentar o problema, como monitoramento de padrões de consumo e ações de fiscalização. No entanto, há uma demanda crescente por soluções mais assertivas, o que motiva o desenvolvimento de uma aplicação de Machine Learning capaz de detectar fraudes de forma mais precisa.

# <a name="c3"></a>3. Objetivos
&emsp;&emsp;O objetivo principal deste projeto é determinar, com base em dados históricos de consumo e variáveis externas (se aplicáveis), a probabilidade de um comportamento de consumo ser fraudulento. O modelo de Machine Learning deverá identificar as variáveis mais importantes para a detecção de fraudes, garantindo maior precisão e transparência nas previsões.

# <a name="c4"></a>4. Sobre a Empresa Parceira
&emsp;&emsp;A Aegea é líder no setor privado de saneamento básico no Brasil, atuando em 507 cidades e atendendo cerca de 31 milhões de pessoas em todo o país. Comprometida com a inovação e a sustentabilidade, a Aegea busca constantemente melhorar a qualidade de vida das comunidades que atende, oferecendo serviços de distribuição de água e esgotamento sanitário de forma eficiente.

## 4.1 Benefícios Esperados para o Parceiro

- **Melhoria na Detecção de Fraudes**: Aumentar a capacidade de identificar fraudes no consumo de água, utilizando técnicas de Machine Learning e variáveis externas.
- **Maior Compreensão**: Fornecer uma visão mais clara sobre os fatores que influenciam a detecção de fraudes, permitindo ações mais eficazes.
- **Decisões Informadas**: Oferecer insights valiosos tanto para usuários técnicos quanto para tomadores de decisão, facilitando a implementação de estratégias mais eficientes.
- **Eficiência Operacional**: Otimizar as atividades das equipes responsáveis pela fiscalização, garantindo um fornecimento de água mais seguro e confiável.

# <a name="c5"></a>5. Escopo Macro

&emsp;&emsp;O projeto tem como objetivo desenvolver um modelo preditivo capaz de identificar as variáveis mais relevantes para a detecção de fraudes, garantindo alta precisão e explicabilidade. Além de dados históricos de consumo, o modelo poderá integrar variáveis externas, como indicadores econômicos e climáticos, para analisar seu impacto na detecção de fraudes.

&emsp;&emsp;O público-alvo inclui tanto usuários técnicos, responsáveis pela execução e manutenção do modelo, quanto usuários de negócios, que utilizarão os resultados para tomar decisões estratégicas. Além disso, os resultados do modelo beneficiarão diretamente as equipes de campo, aumentando sua eficiência na identificação e correção de fraudes.

# <a name="c6"></a>6. Análise de Negócios

&emsp;&emsp;A adoção de ferramentas de análise de negócios é essencial para o sucesso de qualquer organização em um cenário competitivo. Elas possibilitam uma visão detalhada do mercado e do ambiente empresarial, levando em consideração uma ampla gama de fatores internos e externos.

### 6.1 Canvas Proposta de Valor

# Canvas Proposta de Valor

![Canvas](../Sprint%201//Images/vpc.jpg)

Este canvas representa a Proposta de Valor do sistema de detecção de fraudes no consumo de água utilizando machine learning e deep learning. A solução é direcionada para atender às necessidades dos clientes da Aegea Saneamento e Participações S.A., visando aumentar a eficiência operacional, otimizar a alocação de recursos e mitigar os riscos associados a fraudes. O sistema proporciona ganhos significativos para a empresa e seus clientes, focando em uma operação mais sustentável e lucrativa.

### Produtos e Serviços

1. **Sistema de detecção de fraudes utilizando machine learning:**  
   Implementação de algoritmos para identificar padrões anômalos no consumo de água. Esses algoritmos detectam possíveis fraudes em tempo real, promovendo uma gestão mais precisa e eficaz dos recursos hídricos.

2. **Ferramentas de análise de dados integradas:**  
   Utiliza dados históricos e variáveis exógenas, como condições climáticas, para prever e mitigar fraudes. A análise preditiva fornece insights valiosos que auxiliam na antecipação de fraudes, permitindo uma resposta mais ágil e eficiente.

### Criadores de Ganho

1. **Redução de fraudes aumenta diretamente a receita:**  
   A identificação eficaz e a eliminação de fraudes resultam em um aumento no faturamento da empresa, recuperando valores que poderiam ter sido perdidos.

2. **Otimização das operações com melhor alocação de recursos e redução de custos:**  
   Permite uma gestão mais eficiente dos recursos operacionais, reduzindo desperdícios e maximizando o uso inteligente dos recursos disponíveis.

3. **Posicionamento como empresa inovadora e comprometida com a qualidade do serviço:**  
   Destaca a Aegea como líder no setor de saneamento, reconhecida por sua inovação tecnológica e compromisso com a excelência na prestação de serviços.

4. **Redução da necessidade de intervenção manual e automação de processos:**  
   Automatiza a detecção de fraudes, economizando tempo e recursos humanos e permitindo que a equipe se concentre em áreas críticas.

5. **Aumento da confiança e satisfação dos clientes:**  
   Melhora a confiança dos clientes na empresa, resultando em maior satisfação e retenção.

### Aliviadores de Dores

1. **Mitigação das perdas financeiras:**  
   Reduz significativamente as perdas financeiras decorrentes de fraudes, protegendo a receita da empresa.

2. **Minimização dos riscos legais:**  
   Reduz os riscos de ações legais ou litígios relacionados à falta de detecção de fraudes.

3. **Prevenção de danos à infraestrutura e redução dos custos de manutenção:**  
   A detecção precoce de fraudes previne danos físicos às tubulações e sistemas de distribuição.

4. **Predição de fraudes:**  
   O uso de dados históricos e variáveis exógenas permite prever fraudes antes que elas ocorram, facilitando uma resposta proativa.

### Ganhos

1. **Eficiência nas operações:**  
   Melhora a eficiência das operações de campo, permitindo uma distribuição de água mais eficaz.

2. **Redução de perdas:**  
   Minimiza as perdas financeiras e contribui para uma melhor gestão dos recursos.

3. **Aumento na eficiência energética:**  
   Otimiza o uso de energia, reduzindo desperdícios em investigações e reparos desnecessários.

4. **Melhor alocação de capital:**  
   Permite alocar o capital de forma mais eficaz, direcionando investimentos para áreas que necessitam de melhorias.

5. **Redução do impacto ambiental:**  
   Diminui o desperdício de água e contribui para a preservação ambiental, tornando as operações mais sustentáveis.

6. **Qualidade do serviço:**  
   Aumenta a qualidade do serviço prestado, refletindo em maior satisfação dos clientes e uma imagem positiva da empresa.

7. **Melhoria na previsibilidade de receitas:**  
   Aumenta a capacidade de prever receitas de forma mais precisa, facilitando o planejamento financeiro e estratégico.

### Dores dos Clientes

1. **Perdas financeiras prejudicando a sustentabilidade financeira:**  
   Impacta negativamente a sustentabilidade financeira das operações, reduzindo a lucratividade.

2. **Riscos à infraestrutura:**  
   Pode causar danos à infraestrutura, aumentando os custos operacionais e de manutenção.

3. **Dificuldade em identificar fraudes com precisão:**  
   A falta de tecnologia adequada dificulta a identificação precisa de fraudes.

4. **Risco de falsos positivos elevando os custos operacionais:**  
   Falsos positivos podem levar a investigações desnecessárias, aumentando os custos operacionais.

5. **Novas técnicas de fraudes exigindo atualizações constantes no sistema:**  
   O sistema precisa ser atualizado regularmente para detectar novas ameaças.

### Tarefas do Cliente

1. **Detectar fraudes no consumo de água:**  
   Identificar e mitigar fraudes para assegurar a receita e a sustentabilidade financeira.

2. **Manter a eficiência operacional:**  
   Garantir uma distribuição de água eficiente, minimizando desperdícios e maximizando a eficiência energética.

3. **Gerir riscos à infraestrutura:**  
   Prevenir e mitigar danos à infraestrutura causados por fraudes ou falhas no sistema.

4. **Melhorar a qualidade do serviço:**  
   Oferecer um serviço confiável e de alta qualidade, aumentando a satisfação e confiança dos clientes.

A Proposta de Valor para o sistema de detecção de fraudes no consumo de água da Aegea Saneamento e Participações S.A. é uma solução inovadora que responde diretamente às necessidades operacionais e financeiras da empresa. Ao focar em reduzir fraudes, otimizar operações e proteger a infraestrutura, o sistema promove ganhos significativos para a sustentabilidade financeira da empresa e melhora a satisfação dos clientes. Com sua capacidade de análise preditiva e detecção automatizada, o sistema minimiza intervenções manuais, contribuindo para um ambiente mais eficiente e seguro.
 
### 6.2 Matriz de Risco

# Matriz de Risco e Plano de Ação

A matriz de riscos é uma ferramenta que nos permite ter uma visão abrangente dos riscos associados a um projeto. Esses riscos podem ser entendidos tanto como potenciais ameaças quanto como possíveis oportunidades. Essa ferramenta nos ajuda a avaliar cada risco com base em sua chance de acontecer e o grau de influência que poderia ter sobre o projeto.

## [Matriz de Risco Sprint 1](https://www.figma.com/design/kI9FVGpFFShp3JDywkTcLN/Matriz-de-Risco-Aegea-M11?node-id=0-1&t=8a8zEThPrvmEX0Fd-1)

![Captura de Tela](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/MatrizRisco.png)


## Ameaças

- **Resistência dos consumidores:** Resistência e adaptabilidade por parte dos consumidores em relação à detecção de fraudes em seus padrões de consumo.
- **Falsos positivos:** A detecção de falsos positivos (clientes legítimos sendo erroneamente classificados como fraudulentos) afeta a confiança na precisão do modelo.
- **Curadoria dos dados:** A subestimação da etapa de curadoria dos dados pode causar atrasos no cronograma do projeto e comprometer a qualidade do modelo, pois dados mal preparados podem levar a previsões imprecisas.
- **Integração de dados:** Dificuldades na integração de dados provenientes de diferentes fontes podem levar a lacunas na análise.
- **Engajamento:** A falta de engajamento pode levar a atrasos e falta de comprometimento, enfatizando a necessidade de comunicação eficaz.
- **Qualidade dos dados:** Problemas na qualidade dos dados podem afetar a precisão das análises, enfatizando a necessidade de controle rigoroso de qualidade.
- **Atrasos nas entregas:** A ocorrência de atrasos nas entregas das Sprints teria um impacto considerável, enfatizando a necessidade de práticas eficazes de gerenciamento.
- **Instabilidade no ambiente de produção:** Problemas de instabilidade no ambiente de produção podem afetar a disponibilidade e desempenho do modelo.
- **Alterações regulamentares:** Alterações inesperadas nas regulamentações do setor podem impactar os processos do projeto.
- **Desorganização no GitHub:** A desorganização no GitHub, embora improvável, teria impacto sério, destacando a necessidade de organização rigorosa.

## Oportunidades

- **Desempenho do modelo:** Modelo roda de forma rápida e precisa.
- **Dados exatos:** Empresa disponibiliza dados mais exatos no início do projeto.
- **Conhecimento do grupo:** Conhecimento prévio do grupo com modelos de deep learning.
- **Boa relação com o grupo:** Boa relação com todos os integrantes do grupo, facilitando o trabalho.

As ameaças estão distribuídas por uma gama de probabilidades que vão de muito baixas a muito altas. A matriz revela preocupações com a atualidade e eficácia das estratégias de desenvolvimento, como o modelo de deep learning, bem como desafios operacionais relacionados ao escopo do projeto. Importante notar é a atenção ao rastreamento e à análise das mudanças, essenciais para comparações e ajustes estratégicos. O tempo de desenvolvimento do modelo do projeto é identificado como um risco significativo, podendo atrasar outras pendências, como o desenvolvimento do dashboard, devido a uma possível demora em atingir a precisão desejada do modelo.

Entretanto, também foram identificadas diversas oportunidades, que vão desde a criação de um modelo preciso com grande quantidade de dados exatos, que podem otimizar a análise do modelo, prevendo e mitigando fraudes, até o conhecimento prévio do grupo com as ferramentas e modelos de deep learning.

Essa abordagem à gestão de riscos evidencia a complexidade do ambiente de detecção de fraudes e a necessidade de estratégias adaptativas que maximizem o potencial de identificação de fraudes enquanto mitigam tais situações.

## Plano de Ação

O plano de ação, no contexto da matriz de risco, é um conjunto estratégico de etapas projetadas para abordar as ameaças identificadas durante a análise de risco de um projeto. A elaboração de um plano de ação é um componente essencial na gestão de riscos, pois não apenas identifica o que pode dar errado, mas também prepara a organização com respostas e estratégias proativas para minimizar a ocorrência ou impacto de tais riscos.

### Imagem do Plano de Ação

<img width="437" alt="Plano de Ação" src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/PlanoAcao.png">

Com base no plano de ação desenvolvido, podemos observar uma abordagem estruturada para mitigar os riscos do projeto de detecção de fraudes no consumo de água. O plano para a Comunicação e Educação enfoca a implementação de campanhas para informar os consumidores sobre os benefícios do sistema, como a distribuição mais justa e a redução de perdas. Para o Aprimoramento do Modelo de Machine Learning, a prioridade é reduzir a taxa de falsos positivos através de ajustes no algoritmo e adicionar uma verificação manual para garantir que apenas suspeitas justificadas sejam abordadas. A Qualidade dos Dados é tratada com uma análise inicial detalhada e um processo contínuo de limpeza e validação, incluindo checkpoints para ajustar o tempo necessário para a preparação dos dados. O plano para Integração de Sistemas prevê o uso de ferramentas de ETL para automatizar e monitorar a integração, com testes regulares para identificar e corrigir lacunas. A Comunicação da Equipe é incentivada por meio de um ambiente colaborativo e feedback constante nas dailys. Para a Infraestrutura de Produção, são estabelecidas redundâncias, backups e monitoramento contínuo para garantir a estabilidade do sistema. A Adaptação às Regulamentações envolve ajustes no modelo para cumprir novas regulamentações, enquanto a Revisão e Gerenciamento de Tarefas inclui revisões em grupo das tarefas e a responsabilidade do PO de atualizar as branches ‘dev’ e ‘main’ ao final de cada Sprint.

### Detalhes do Plano de Ação

<img width="620" alt="Detalhes do Plano de Ação" src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/DetalhesPlanoAcao.png">

### 6.3 Análise PESTEL


# Análise PESTEL
Link para Analise Pestel: https://www.figma.com/design/K8j5Le9AJl7VFsccSgRHvl/M11-Analise-PESTEL?node-id=0-1&t=JKWd1Y2XPAsxzQBg-1
## Objetivo
Avaliar o ambiente macroambiental de um projeto proposto considerando aspectos políticos, econômicos, sociais, tecnológicos, ambientais e legais.

![Pestel](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/Pestel.png)

### 1. Fatores Políticos

**Identificação dos Fatores:**

- **Estabilidade Política:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A estabilidade política no Brasil é essencial para a continuidade dos projetos de saneamento básico e infraestrutura. A presença de políticas consistentes e o apoio governamental são fatores cruciais para o sucesso de projetos de longo prazo como os da Aegea.

- **Políticas Fiscais:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** Incentivos fiscais e subsídios governamentais para o setor de saneamento, como financiamentos de longo prazo com juros baixos, podem favorecer a expansão e a melhoria dos serviços prestados.

- **Relações Internacionais:**
  - **Impacto Potencial:** Neutro
  - **Probabilidade:** Média
  - **Justificativa:** As operações da Aegea são principalmente nacionais, com foco em parcerias e concessões locais. No entanto, a política internacional pode influenciar indiretamente, como na captação de investimentos estrangeiros.

- **Políticas de Comércio:**
  - **Impacto Potencial:** Neutro
  - **Probabilidade:** Baixa
  - **Justificativa:** Como o setor de saneamento é predominantemente doméstico, as políticas de comércio têm impacto limitado, exceto em casos de importação de equipamentos específicos.

- **Políticas de Emprego:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** Políticas de incentivo ao emprego local, especialmente em áreas menos desenvolvidas, podem ajudar a Aegea a garantir mão de obra qualificada e reduzir custos operacionais.

**Estratégias:**
- **Mitigação de Riscos:** Manter um relacionamento próximo com o governo e órgãos reguladores para antecipar mudanças políticas que possam afetar o setor.
- **Capitalização de Oportunidades:** Aproveitar políticas fiscais e incentivos governamentais para maximizar os investimentos e expandir as operações.

### 2. Fatores Econômicos

**Identificação dos Fatores:**

- **Crescimento Econômico:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** O crescimento econômico no Brasil impulsiona o desenvolvimento de infraestrutura, o que é benéfico para o setor de saneamento, como demonstrado pelo aumento da receita líquida da Aegea para R$ 14,3 bilhões em 2023​(Aegea - Resultados 4T23).

- **Taxas de Juro:**
  - **Impacto Potencial:** Negativo
  - **Probabilidade:** Alta
  - **Justificativa:** Altas taxas de juros podem aumentar o custo de financiamento para novos projetos e operações em andamento, como as emissões de debêntures da Corsan​(Aegea_ER_4T23).

- **Taxas de Câmbio:**
  - **Impacto Potencial:** Neutro
  - **Probabilidade:** Média
  - **Justificativa:** A Aegea opera predominantemente em reais, reduzindo a exposição direta às flutuações cambiais. No entanto, a aquisição de equipamentos importados pode ser afetada.

- **Inflação:**
  - **Impacto Potencial:** Negativo
  - **Probabilidade:** Alta
  - **Justificativa:** A inflação elevada pode aumentar os custos operacionais e impactar negativamente as margens de lucro, além de pressionar por reajustes tarifários.

- **Desemprego:**
  - **Impacto Potencial:** Negativo
  - **Probabilidade:** Média
  - **Justificativa:** Altos índices de desemprego podem afetar a capacidade de pagamento dos serviços de saneamento pela população, aumentando a inadimplência.

**Estratégias:**
- **Mitigação de Riscos:** Estruturar contratos com cláusulas de ajuste inflacionário para proteger as margens de lucro.
- **Capitalização de Oportunidades:** Aproveitar períodos de crescimento econômico para expandir a base de clientes e realizar investimentos estratégicos.

### 3. Fatores Sociais

**Identificação dos Fatores:**

- **Demografia:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** O crescimento populacional nas áreas atendidas pela Aegea, especialmente com a expansão para novos municípios, aumenta a demanda por serviços de saneamento​(Aegea - Resultados 4T23)​(Aegea_ER_4T23).

- **Cultura e Normas Sociais:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A crescente conscientização sobre a importância do saneamento básico e da preservação ambiental fortalece a aceitação dos serviços da Aegea.

- **Hábitos de Consumo:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A urbanização e o aumento do poder de compra elevam a demanda por serviços de qualidade, como o tratamento de água e esgoto.

- **Estilo de Vida:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A mudança para estilos de vida mais sustentáveis está alinhada com os objetivos da Aegea, especialmente em relação à preservação ambiental e ao tratamento de esgoto.

**Estratégias:**
- **Mitigação de Riscos:** Adaptar campanhas de conscientização para diferentes grupos demográficos e culturais, garantindo aceitação e apoio comunitário.
- **Capitalização de Oportunidades:** Expandir serviços em áreas urbanas em crescimento e fortalecer parcerias com governos locais para atender à demanda crescente.

### 4. Fatores Tecnológicos

**Identificação dos Fatores:**

- **Infraestrutura Tecnológica:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A Aegea investe continuamente em tecnologia para melhorar a eficiência operacional e reduzir perdas, como o uso de energia renovável​(Aegea_ER_4T23).

- **Inovação:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A adoção de tecnologias inovadoras, como a automação e o tratamento de água avançado, pode melhorar a eficiência e a qualidade dos serviços.

- **Adoção de Novas Tecnologias:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A modernização dos sistemas de distribuição de água e esgoto pode reduzir custos operacionais e aumentar a sustentabilidade.

- **Investimento em P&D:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** O aumento no investimento em pesquisa e desenvolvimento é crucial para manter a competitividade e atender às necessidades regulatórias e ambientais.

**Estratégias:**
- **Mitigação de Riscos:** Investir em tecnologias resilientes e garantir a constante atualização dos sistemas operacionais.
- **Capitalização de Oportunidades:** Alocar recursos para P&D e adoção de tecnologias que possam diferenciar a Aegea no mercado e melhorar a eficiência.

### 5. Fatores Ambientais

**Identificação dos Fatores:**

- **Questões Climáticas:**
  - **Impacto Potencial:** Negativo
  - **Probabilidade:** Alta
  - **Justificativa:** Eventos climáticos extremos podem afetar a operação e a distribuição de água, como observado com as secas na Amazônia​(Aegea_ER_4T23).

- **Sustentabilidade:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A Aegea está comprometida com práticas sustentáveis, como a redução de perdas de água e o uso de energia renovável​(Aegea_ER_4T23).

- **Políticas Ambientais:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** Regulamentações ambientais rigorosas podem beneficiar a Aegea, que já implementa iniciativas alinhadas com essas exigências.

- **Consciência Ecológica:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** O aumento da consciência ecológica entre os consumidores e governos impulsiona a demanda por serviços de saneamento de alta qualidade.

**Estratégias:**
- **Mitigação de Riscos:** Desenvolver planos de contingência para lidar com eventos climáticos extremos e garantir a continuidade dos serviços.
- **Capitalização de Oportunidades:** Fortalecer as práticas de sustentabilidade e promover essas iniciativas para ganhar o apoio da comunidade e dos investidores.

### 6. Fatores Legais

**Identificação dos Fatores:**

- **Legislações Relevantes:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A conformidade com a legislação vigente, incluindo a Nova Lei do Saneamento, é fundamental para a operação e expansão da Aegea no mercado.

- **Normas de Segurança:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A conformidade com normas de segurança operacional e ambiental garante a reputação e a confiabilidade dos serviços prestados.

- **Políticas de Privacidade:**
  - **Impacto Potencial:** Neutro
  - **Probabilidade:** Média
  - **Justificativa:** Embora a privacidade dos dados seja importante, não é um fator crítico na operação de serviços de saneamento.

- **Requisitos Contratuais:**
  - **Impacto Potencial:** Positivo
  - **Probabilidade:** Alta
  - **Justificativa:** A celebração de contratos sólidos com prefeituras e governos estaduais é essencial para a garantia de receita e continuidade dos serviços.

**Estratégias:**
- **Mitigação de Riscos:** Manter um departamento jurídico ativo para garantir o cumprimento de todas as obrigações legais e contratuais.
- **Capitalização de Oportunidades:** Utilizar a conformidade legal como um diferencial competitivo no mercado de saneamento.

![Pestel](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/Pestel2.png)


### Conclusão
A análise PESTEL destaca diversos fatores que podem afetar o projeto proposto. O ambiente político e econômico no Brasil oferece oportunidades e desafios que precisam ser abordados com estratégias apropriadas. A Aegea deve continuar inovando tecnologicamente e promovendo práticas sustentáveis para se manter competitiva e cumprir com os requisitos legais e sociais.


### 6.4 Business Model Canvas

O Business Model Canvas é uma ferramenta estratégica que permite visualizar de forma clara e simplificada os principais elementos que compõem o modelo de negócios de uma empresa. Ele abrange nove blocos que detalham os parceiros, atividades, recursos, propostas de valor, relacionamentos com clientes, canais, segmentos de clientes, estruturas de custos e fontes de receita. No contexto do projeto da Aegea para detecção de fraudes no consumo de água, o Business Model Canvas ajuda a estruturar a implementação da solução de Machine Learning, definindo os principais atores envolvidos, os recursos necessários e como a tecnologia será utilizada para gerar valor, tanto em termos de eficiência operacional quanto de sustentabilidade financeira e ambiental.



<img width="815" alt="image" src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/367637487-66c938e1-0fe6-4bfa-88ba-dd0ca81a288d.png">


### 6.5 Análise Financeira: Investimento Estratégico para o Futuro


# Análise de Custo do Projeto

## 1. Custo do Projeto MVP

### Dados do Projeto:
- **Duração:** 10 semanas
- **Equipe:** 6 membros
- **Horas trabalhadas por dia:** 1 hora
- **Dias trabalhados por semana:** 5 dias
- **Custo por hora:** R$ 43,75 ([Fonte](https://www.locaweb.com.br/blog/temas/codigo-aberto/como-cobrar-pelo-seu-servico-de-freelancer-em-desenvolvimento/))

### Cálculo do Custo do MVP:
Para calcular o custo total do projeto MVP, consideramos o número de horas que cada membro da equipe trabalhou, multiplicando pelo custo por hora.

- **Total de horas por membro:**
  - 10 semanas x 5 dias/semana x 1 hora/dia = 50 horas

- **Total de horas para a equipe:**
  - 50 horas/membro x 6 membros = 300 horas

- **Custo total do MVP:**
  - 300 horas x R$ 43,75 = R$ 13.125

### Custo de Hospedagem do MVP:
Optamos por serviços que não são pagos para o MVP. Contudo, apresentamos uma estimativa de custos de hospedagem caso seja necessário expandir o projeto em nuvem.

#### Estimativa de Custo de Hospedagem:
- **Servidores em Nuvem (ex.: AWS, Google Cloud, Azure):**
  - Custo médio: R$ 500 a R$ 2.000 por mês.

- **Banco de Dados em Nuvem (ex.: RDS, Firestore):**
  - Custo médio: R$ 300 a R$ 1.000 por mês.

- **Armazenamento (ex.: S3, Blob Storage):**
  - Custo médio: R$ 100 a R$ 500 por mês.

- **Serviços de Rede (CDN, Load Balancer):**
  - Custo médio: R$ 200 a R$ 800 por mês.

- **Certificados SSL e Segurança:**
  - Custo médio: R$ 50 a R$ 200 por mês.

- **Monitoramento e Backup:**
  - Custo médio: R$ 100 a R$ 400 por mês.

### Total Estimado Mensal de Hospedagem:
Custo total mensal pode variar entre R$ 1.350 e R$ 5.500, dependendo do uso.

### Custo Total do MVP (Incluindo Hospedagem por 2 meses):
- **Custo do MVP:** R$ 13.125

- **Hospedagem (2 meses):**
  - Custo mínimo: R$ 1.350 x 2 = R$ 2.700
  - Custo máximo: R$ 5.500 x 2 = R$ 11.000

### Custo Total do MVP:
- **Custo total mínimo:** R$ 13.125 + R$ 2.700 = R$ 15.825
- **Custo total máximo:** R$ 13.125 + R$ 11.000 = R$ 24.125

---

## 2. Custo da Equipe da Aegea

### Custos com Pessoal:
Para a manutenção e desenvolvimento contínuo do projeto na Aegea, utilizaremos um Desenvolvedor Full Stack e um Engenheiro de Dados Pleno.

- **Desenvolvedor Full Stack:**
  - Salário Mensal: R$ 16.000 ([Fonte](https://www.glassdoor.com.br/Sal%C3%A1rios/desenvolvedor-full-stack-s%C3%AAnior-sal%C3%A1rio-SRCH_KO0,31.htm))
  - Carga Horária Mensal: 44 horas/semana x 4 semanas = 176 horas/mês

- **Engenheiro de Dados Pleno:**
  - Salário Mensal: R$ 10.000 ([Fonte](https://www.glassdoor.com.br/Sal%C3%A1rios/engenheiro-de-dados-pleno-sal%C3%A1rio-SRCH_KO0,25.htm))
  - Carga Horária Mensal: 44 horas/semana x 4 semanas = 176 horas/mês

### Total de Custos Mensais com Pessoal:
- **Custo Total Mensal (Pessoal):** R$ 16.000 + R$ 10.000 = R$ 26.000

### Custo de Hospedagem da Aegea:
Optamos por serviços que não são pagos para o MVP. Contudo, para a Aegea ira ser necessário.

#### Estimativa de Custo de Hospedagem:
- **Servidores em Nuvem (ex.: AWS, Google Cloud, Azure):**
  - Custo médio: R$ 500 a R$ 2.000 por mês.

- **Banco de Dados em Nuvem (ex.: RDS, Firestore):**
  - Custo médio: R$ 300 a R$ 1.000 por mês.

- **Armazenamento (ex.: S3, Blob Storage):**
  - Custo médio: R$ 100 a R$ 500 por mês.

- **Serviços de Rede (CDN, Load Balancer):**
  - Custo médio: R$ 200 a R$ 800 por mês.

- **Certificados SSL e Segurança:**
  - Custo médio: R$ 50 a R$ 200 por mês.

- **Monitoramento e Backup:**
  - Custo médio: R$ 100 a R$ 400 por mês.

### Total Estimado Mensal de Custos de Hospedagem e Pessoal para a Aegea:
- **Custo Total Mínimo:** R$ 26.000 + R$ 1.350 = **R$ 27.350**
- **Custo Total Máximo:** R$ 26.000 + R$ 5.500 = **R$ 31.500**

### Explicação da Diferença de Custos:
A diferença entre o custo total mínimo e máximo reflete as variabilidades nos custos de hospedagem que podem ser influenciados por diversos fatores, como:

- **Escalabilidade dos Serviços:** À medida que o projeto se expande, os custos de serviços em nuvem podem aumentar dependendo do volume de dados processados, número de usuários simultâneos ou funcionalidades adicionais utilizadas.

- **Serviços Adicionais:** A escolha de serviços adicionais, como segurança avançada, monitoramento em tempo real ou backups frequentes, pode elevar o custo mensal.

- **Variabilidade nos Fornecedores:** Diferentes provedores de nuvem oferecem estruturas de preços distintas, e os custos podem variar significativamente com base nas promoções ou planos escolhidos.

- **Necessidades de Armazenamento e Tráfego:** Se o projeto exigir mais armazenamento ou um aumento no tráfego, os custos relacionados a servidores, banco de dados e rede também podem aumentar.

Portanto, os valores indicados representam uma estimativa com base em necessidades iniciais, mas é importante considerar essas variáveis ao planejar o orçamento para a Aegea.

---

## 3. Investimentos Relacionados ao Projeto de Prevenção de Fraudes

- **Investimento Total em 2023:** A Aegea realizou investimentos significativos de R$ 4,5 bilhões. Parte desses investimentos pode estar relacionada a iniciativas de inovação e combate a fraudes, uma vez que esse é um desafio central enfrentado pela empresa​.

- **Capex:** O Capex total de R$ 1,7 bilhão, excluindo outorgas, reflete investimentos em infraestrutura que podem incluir melhorias nas redes de distribuição de água, sistemas de medição e monitoramento de consumo, além de tecnologias para detecção de fraudes​ ([Fonte](Aegea - Resultados 4T23))​ ([Fonte](Aegea_ER_4T23)).

---

## 4. Projeção de Custos Relacionados às Fraudes

- **Perdas Financeiras Causadas por Fraudes:** A fraude no consumo de água gera perdas significativas para a Aegea, afetando diretamente o faturamento e a arrecadação da empresa​. Essas perdas estão diretamente ligadas à redução da receita, além de aumentar custos operacionais com reparos de tubulações e aumento no risco de contaminação da água, impactando a qualidade do serviço oferecido.

- **Custos Operacionais Adicionais:** Para combater as fraudes, a Aegea mantém equipes especializadas em fiscalização e remediação. Esses custos com pessoal e com a operação dessas equipes aumentam as despesas operacionais da empresa, refletindo nos R$ 1,210 bilhões de custos com pessoal registrados em 2023.

---

## 5. Impacto das Fraudes na Receita

- **Redução da Receita:** As fraudes no consumo de água afetam diretamente a receita da Aegea. Como a prática fraudulenta reduz ou elimina os valores cobrados pelo consumo real de água, a empresa enfrenta uma queda potencial em suas receitas, o que pode ser compensado pela detecção e combate mais eficaz das fraudes por meio de modelo deep learning. 

- **Receita Líquida Proforma:** A receita líquida de R$ 14,3 bilhões pode ter sido impactada negativamente pelas fraudes, mas a implementação do projeto de det


# <a name="c6"></a>7. Análise de Experiência do Usuário



### 7.1 Personas, antipersonas e jornada do usuário

# Documentação de Personas, Antipersonas e Jornada do Usuário

## Introdução

A compreensão profunda das personas e antipersonas é crucial para o desenvolvimento de produtos e serviços que atendam efetivamente às necessidades dos usuários. Este documento apresenta duas personas, duas antipersonas e suas respectivas jornadas, descrevendo as etapas que cada uma delas atravessa, suas necessidades, dores e oportunidades. A análise dessas informações permitirá uma abordagem mais centrada no usuário, melhorando a experiência geral e facilitando a tomada de decisões estratégicas.

## Sumário

1. [Persona 1 - Ana Clara](#persona-1---ana-clara)
   - [Jornada 1](#jornada-1)
2. [Persona 2 - Carlos](#persona-2---carlos)
   - [Jornada 2](#jornada-2)
3. [Antipersona 1](#antipersona-1)
4. [Antipersona 2](#antipersona-2)

## Persona 1 - Ana Clara

**Nome:** Ana Clara  
**Idade:** 23 anos  
**Formação:** Administração  
**Profissão:** Analista Comercial  
**Localização:** São Paulo

**Background:**  
Ana nasceu em São Paulo e é formada em administração. Desde pequena, ela ajudou seu pai, que era dono de um mercado, com planilhas e relatórios. Sua experiência a motivou a seguir a carreira de gestora, e atualmente trabalha como analista comercial, onde transforma dados em estratégias para impulsionar vendas e melhorar a experiência do cliente.

**Características Comportamentais:**  
- Criativa
- Colaborativa
- Responsável

**Necessidades:**  
Ana busca uma plataforma que centralize e integre dados comerciais, facilitando o acesso e a análise. Ela também procura ferramentas que automatizem a geração de relatórios e dashboards, permitindo mais tempo para análises estratégicas.

**Dores:**  
Ana busca dados atualizados e precisos para análises eficazes e para tomar decisões informadas, além de uma maneira clara de comunicar insights para equipes de vendas. Ela também enfrenta pressão para identificar rapidamente tendências e dificuldades na coordenação interdepartamental para implementar novas tecnologias.

**Citação:**  
*"Preciso de dados rápidos e acessíveis para tomar decisões informadas."*

![Imagem da Persona 1 - Ana Clara](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/Persona.png)

### Jornada 1

**Link para a jornada completa:** [Jornada 1 no Figma](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/Persona1-2.png)

#### Etapas

1. **Conscientização**
   - Analisa relatórios e dados que revelam as limitações das ferramentas atuais.
   - Participa de reuniões onde as falhas das ferramentas são discutadas.

2. **Consideração**
   - Consulta colegas de outros departamentos sobre suas dificuldades relacionadas a fraudes.
   - Pesquisa online por plataformas de detecção de fraudes baseadas em machine learning.

3. **Aquisição**
   - Assiste a webinars e lê white papers sobre novas tecnologias de prevenção a fraudes.
   - Consulta colegas e participa de demos de produtos.
   - Participa de reuniões com fornecedores para discutir termos de contrato.

4. **Serviço**
   - Coordena a assinatura do contrato e a aquisição da plataforma.
   - Acompanha a adaptação da equipe à nova ferramenta.

5. **Lealdade**
   - Monitora a performance da nova ferramenta e faz ajustes conforme necessário.

#### Objetivos

- **Mentalidade:** Ana busca constantemente formas de aumentar a receita da empresa.



![Imagem da Jornada 1](../../documents//Sprint%201/Images/image2.png)

---

## Persona 2 - Carlos

**Nome:** Carlos  
**Idade:** 27 anos  
**Formação:** Administração  
**Profissão:** Agente de Campo  
**Localização:** Campo Grande - MT  

**Background:**  
Carlos nasceu e cresceu em São Paulo, onde seu pai era dono de um mercado. Desde jovem, ele ajudava no negócio da família, o que o influenciou a seguir carreira em administração. Carlos decidiu trabalhar como agente de campo para combinar suas habilidades analíticas com o desejo de estar em contato direto com as operações e as pessoas.

**Características Comportamentais:**  
- Extrovertido
- Analítico
- Alegre

**Necessidades:**  
Carlos necessita de uma solução que se integre perfeitamente aos sistemas já existentes na empresa, evitando complicações durante a implementação e uso diário. Ele busca ferramentas de detecção de fraudes que otimizem suas rotinas e melhorem a precisão de suas inspeções.

**Dores:**  
- Desafios na obtenção de dados em tempo real durante as inspeções, o que pode atrasar a verificação.
- Pressão constante para identificar fraudes de forma rápida e eficiente, gerando estresse.
- Dificuldades na integração de novas ferramentas com sistemas legados e adaptação a novas tecnologias.

**Citação:**  
*"Sempre busco maneiras de melhorar minha eficiência. Se houver uma nova tecnologia que possa ajudar, quero ser o primeiro a testar."*

![Imagem da Persona 2 - Carlos](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/persona2.png)

### Jornada 2

**Link para a jornada completa:** [Jornada 2 no Figma](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/jornada2.png)

#### Etapas

1. **Pesquisa**
   - Carlos investiga as fraudes mais comuns e as dificuldades em identificá-las com as ferramentas atuais.
   - Participa de reuniões internas onde são discutidas as limitações das ferramentas tradicionais de detecção.

2. **Análise**
   - Analisa os relatórios de inspeção que apontam inconsistências e possíveis falhas nos métodos usados.

3. **Consideração**
   - Participa de demonstrações de produtos e consulta colegas que já utilizaram tecnologias similares.

4. **Teste**
   - Realiza testes iniciais com a plataforma para garantir que atende às necessidades antes da implementação completa.

5. **Implementação**
   - Organiza e conduz treinamentos para a equipe sobre o uso da nova plataforma.
   - Resolve problemas de integração e adaptações necessárias para garantir que o sistema funcione corretamente.

6. **Monitoramento**
   - Monitora continuamente o desempenho da plataforma e propõe melhorias com base no feedback dos agentes de campo.
   - Participa de atualizações e novas implementações para garantir que a ferramenta continue eficaz contra fraudes emergentes.

#### Objetivos

- **Mentalidade:** Carlos está constantemente buscando novas tecnologias e métodos para melhorar a detecção de fraudes. Ele se sente pressionado a encontrar uma solução que resolva os problemas que enfrenta com as ferramentas atuais.

![Imagem da Jornada 2](../Sprint%201/Images/jornada2.png)

---

## Antipersona 1


**Nome:** Ana Paula  
**Idade:** 30 anos  
**Localização:** Área urbana de classe média em São Paulo  

**Background:**  
Ana Paula é uma mulher de 30 anos que vive em uma área urbana de classe média em São Paulo. Ela se destaca por sua habilidade em resolver problemas de maneira criativa, mas frequentemente recorre a métodos ilegais para lidar com suas dificuldades financeiras. Ana nasceu em um bairro popular e cresceu em uma família de classe média. Ela trabalha em uma pequena empresa e, embora tenha uma vida simples, está sempre em busca de maneiras de economizar dinheiro.

**Características Comportamentais:**  
- Proativa
- Extrovertida
- Alegre

**Motivos para ser uma antipersona:**  
Ana Paula gosta de se sentir esperta e muitas vezes se orgulha de encontrar brechas no sistema. Ela busca soluções rápidas e discretas para reduzir suas contas, preferindo táticas que não chamem a atenção das autoridades, enquanto se sente parte de uma comunidade que valoriza suas "descobertas".

**Interações e Comportamento:**  
Ana Paula se junta a grupos no WhatsApp ou Facebook onde pessoas compartilham dicas sobre como evitar o pagamento excessivo de contas de água. Ela participa ativamente das conversas, trocando informações e buscando novas formas de economizar. Em momentos de dificuldade, Ana Paula procura profissionais que oferecem serviços para manipular medidores, buscando recomendações em sua rede social. Ela valoriza a discrição e a confiança

![Imagem da Antipersona 1](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/antipersona1.png)

**Nome:** Roberto  
**Idade:** 45 anos  
**Localização:** Comunidade em São Paulo  

**Background:**  
Roberto vive em uma comunidade onde encontrou maneiras ilícitas de obter renda. Ele não possui formação profissional e utiliza engano e manipulação para fraudar empresas, como serviços de utilidades, visando lucro rápido. Roberto é conhecido na sua área por seus métodos para burlar medidores de água e energia.

**Características Comportamentais:**  
- Persuasivo
- Resiliente
- Cauteloso

**Motivos para ser uma antipersona:**  
Roberto está interessado em fraudar serviços de utilidades e outros setores vulneráveis, promovendo seus serviços de burla de medidores. Ele compartilha dicas com amigos e familiares sobre como reduzir custos, incluindo métodos ilegais para burlar medidores.

**Interações e Comportamento:**  
Roberto interage com pessoas que podem ser suas vítimas, usando técnicas de persuasão e engano. Ele oferece seus serviços para burlar medidores de água e energia, aproveitando-se da vulnerabilidade dos outros para maximizar seus ganhos. Ele pode utilizar ferramentas digitais para criar documentos falsos ou manipular informações, evitando interações com sistemas de monitoramento.


![Imagem da Antipersona 2](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/antipersona2.png)

---


### 7.2 User Story, Requisitos Funcionais, Requisitos não Funcionais e Persona Afetada


### 7.3 User Stories

# User Stories

User stories são uma técnica de desenvolvimento ágil que captura requisitos a partir da perspectiva do usuário, focando nas suas necessidades reais. Cada história inclui uma persona, a necessidade dessa persona, e o motivo pelo qual a funcionalidade é importante, ajudando a entender e a desenvolver soluções mais alinhadas com as expectativas dos usuários. Auxiliando bastante em projetos em desenvolviment, como é o nosso caso da parceria com a Aegea.

| **User Story** | **Descrição** | **Critérios de Aceitação** | **Prioridade** | **Estimativa de Esforço** |
| --- | --- | --- | --- | --- |
| **User Story 1** |Como um coordenador de planejamento, quero visualizar um dashboard com a probabilidade de fraude para cada matrícula, para que eu possa priorizar as investigações de campo.| O dashboard exibe uma lista de matrículas ordenada por probabilidade de fraude (de 0 a 1), - Cada entrada na lista mostra a matrícula, probabilidade de fraude, e um código de cores (verde para baixo risco, amarelo para médio, vermelho para alto), - O usuário pode filtrar por faixa de probabilidade, região geográfica e categoria de cliente, - O dashboard é atualizado diariamente com os dados mais recentes| Alta | Alta
| **User Story 2** | Como um analista de dados, quero ter acesso a um relatório detalhado sobre as variáveis mais influentes no modelo de previsão de fraudes, para que eu possa entender melhor os fatores que contribuem para comportamentos fraudulentos.|O relatório lista as 10 variáveis mais importantes para o modelo, em ordem de relevância - Para cada variável, o relatório fornece uma breve descrição e sua importância relativa em porcentagem - O relatório inclui gráficos que mostram a correlação entre essas variáveis e a probabilidade de fraude - O relatório é gerado mensalmente e inclui uma comparação com o mês anterior, destacando mudanças significativas| Media|Media|
| **User Story 3** |Como um analista de dados, quero ter a opção de escolher o período sobre o qual irei visualizar um conjunto de informações e escolher visualizar apenas matrículas com consumo elevado ou com alta probabilidade de fraude para que eu possa obter dados sobre fraudes alarmantes e de períodos específicos caso desejado. |Informações que podem ser interessantes se analisadas em períodos definidos permitem a filtragem por data. - Uma quantidade de visualizações considerável pode ser filtrada de uma vez por data. - A maioria das informações podem ser filtradas por consumo - É possível filtrar todos os dados de uma vez, sem necessidade de aplicar o filtro em um por um. - É possível filtrar rapidamente entre fraudes alarmantes e todas as fraudes, possivelmente escolhendo entre uma das duas categorias.|Média| Alta |


# <a name="c3"></a>US01 - Detalhes sobre Matrículas

**Persona:** Coordenador de Planejamento

**História:** Como um coordenador de planejamento, quero visualizar um dashboard com a probabilidade de fraude para cada matrícula, para que eu possa priorizar as investigações de campo.

**Critério de avaliação:**

- **Critério 1:** Dashboard exibe lista de matrículas ordenada por probabilidade de fraude
  - Condição: { O dashboard deve mostrar uma lista de matrículas ordenada de acordo com a probabilidade de fraude, que varia de 0 a 1. }
- **Critério 2:** Informações de cada matrícula
  - Condição: { Cada entrada na lista deve mostrar a matrícula, a probabilidade de fraude e um código de cores (verde para baixo risco, amarelo para médio, vermelho para alto). }
- **Critério 3:** Filtros aplicáveis
  - Condição: { O usuário deve ser capaz de filtrar a lista por faixa de probabilidade, região geográfica e categoria de cliente. }
- **Critério 4:** Atualização diária
  - Condição: { O dashboard deve ser atualizado diariamente com os dados mais recentes. }

**Teste de aceitação:**

1. **Teste 1:** Verificação da exibição e ordenação
   - Aprovado: { O dashboard exibe e ordena corretamente as matrículas de acordo com a probabilidade de fraude. }
   - Recusado: { O dashboard não exibe ou não ordena corretamente as matrículas. }

2. **Teste 2:** Verificação das informações de cada matrícula
   - Aprovado: { Cada entrada mostra matrícula, probabilidade de fraude e código de cores de forma correta. }
   - Recusado: { Faltam informações ou o código de cores está incorreto. }

3. **Teste 3:** Verificação dos filtros
   - Aprovado: { O usuário pode aplicar filtros por faixa de probabilidade, região geográfica e categoria de cliente sem problemas. }
   - Recusado: { Os filtros não funcionam ou não estão disponíveis. }

4. **Teste 4:** Verificação da atualização diária
   - Aprovado: { O dashboard é atualizado diariamente com os dados mais recentes. }
   - Recusado: { O dashboard não é atualizado diariamente. }

**Notas:** Este dashboard ajudará na priorização de investigações de campo com base na probabilidade de fraude.

| **Prioridade** | **Estimativa** | **Relação** |
|----------|----------|----------|
| Alta | Alta | N/A |

---

# <a name="c3"></a>US02 - Relatório Detalhado sobre Variáveis

**Persona:** Analista de Dados

**História:** Como um analista de dados, quero ter acesso a um relatório detalhado sobre as variáveis mais influentes no modelo de previsão de fraudes, para que eu possa entender melhor os fatores que contribuem para comportamentos fraudulentos.

**Critério de avaliação:**

- **Critério 1:** Lista das variáveis mais importantes
  - Condição: { O relatório deve listar as 10 variáveis mais importantes para o modelo, em ordem de relevância. }
- **Critério 2:** Descrição e importância relativa
  - Condição: { Para cada variável, o relatório deve fornecer uma breve descrição e a importância relativa em porcentagem. }
- **Critério 3:** Gráficos de correlação
  - Condição: { O relatório deve incluir gráficos que mostrem a correlação entre essas variáveis e a probabilidade de fraude. }
- **Critério 4:** Geração mensal e comparação
  - Condição: { O relatório deve ser gerado mensalmente e incluir uma comparação com o mês anterior, destacando mudanças significativas. }

**Teste de aceitação:**

1. **Teste 1:** Verificação da lista de variáveis
   - Aprovado: { O relatório lista corretamente as 10 variáveis mais importantes em ordem de relevância. }
   - Recusado: { A lista está incorreta ou incompleta. }

2. **Teste 2:** Verificação das descrições e importância
   - Aprovado: { Cada variável tem uma descrição adequada e a importância relativa está corretamente representada em porcentagem. }
   - Recusado: { Descrições ou importâncias estão incorretas ou ausentes. }

3. **Teste 3:** Verificação dos gráficos de correlação
   - Aprovado: { O relatório inclui gráficos claros que mostram a correlação entre variáveis e probabilidade de fraude. }
   - Recusado: { Os gráficos estão ausentes ou são incorretos. }

4. **Teste 4:** Verificação da geração e comparação mensal
   - Aprovado: { O relatório é gerado mensalmente e a comparação com o mês anterior está presente e correta. }
   - Recusado: { O relatório não é gerado mensalmente ou a comparação está faltando ou é incorreta. }

**Notas:** O relatório fornecerá uma visão detalhada das variáveis que influenciam o modelo de previsão de fraudes.

| **Prioridade** | **Estimativa** | **Relação** |
|----------|----------|----------|
| Média | Média | N/A |

---

# <a name="c3"></a> US03 - Filtros Avançados de Fraude e Consumo

**Persona:** Analista de Dados

**História:** Como um analista de dados, quero ter a opção de escolher o período sobre o qual irei visualizar um conjunto de informações e escolher visualizar apenas matrículas com consumo elevado ou com alta probabilidade de fraude, para que eu possa obter dados sobre fraudes alarmantes e de períodos específicos caso desejado.

**Critério de avaliação:**

- **Critério 1:** Opção de filtragem por data
  - Condição: { A interface deve permitir a filtragem de informações por períodos definidos, como datas específicas ou intervalos de datas. }
- **Critério 2:** Filtro por consumo elevado
  - Condição: { O usuário deve ser capaz de filtrar matrículas com consumo elevado, definindo critérios de consumo que qualifiquem como elevado.  }
- **Critério 3:** Filtro por alta probabilidade de fraude
  - Condição: { O usuário deve ser capaz de filtrar rapidamente entre fraudes alarmantes (alta probabilidade) e todas as fraudes, possivelmente escolhendo entre uma das duas categorias. }
- **Critério 4:** Eficiência da filtragem
  - Condição: { É possível filtrar todos os dados de uma vez, sem necessidade de aplicar o filtro em um por um, e fazer isso rapidamente. }
    


**Teste de aceitação:**

1. **Teste 1:**  Verificação da filtragem por data
   - Aprovado: { A filtragem por data está disponível e funciona corretamente. }
   - Recusado: { A filtragem por data não está disponível ou não funciona. }

2. **Teste 2:** Verificação do filtro por consumo elevado
   - Aprovado: { O filtro por consumo elevado é funcional e os critérios de consumo são claros e efetivos. }
   - Recusado: { O filtro por consumo elevado não funciona ou os critérios não são claros. }

3-  **Teste 3:** Verificação do filtro por alta probabilidade de fraude
   - Aprovado: { O filtro por alta probabilidade de fraude funciona eficientemente e permite uma distinção clara entre fraudes alarmantes e todas as fraudes. }
   - Recusado:  { O filtro por alta probabilidade de fraude é ineficaz ou não permite uma distinção clara. }

4-  **Teste 4:** Verificação da eficiência da filtragem
   - Aprovado: { É possível filtrar uma quantidade significativa de visualizações por data e por critérios específicos rapidamente e sem problemas. }
   - Recusado:  { A filtragem é lenta ou problemática, limitando a funcionalidade. }
   - 
**Notas:** Esta funcionalidade permitirá ao analista realizar análises mais detalhadas e específicas sobre fraudes alarmantes e consumo elevado, facilitando a identificação de padrões críticos em períodos definidos.

| **Prioridade** | **Estimativa** | **Relação** |
|----------|----------|----------|
| Média | Alta | N/A |

---


### 7.4 Arquivos de Configuração


# <a name="c6"></a>8. Wireframe da Solução

# Wireframe da Plataforma de Monitoramento

Link do figma: 

https://www.figma.com/design/TGY8eZmXmioCy1eVRUapOv/wireframe-g5?node-id=0-1&t=gSDrlBXMiLlKrtgA-1

## 1. Página de Login

### Descrição Geral
A página de login é a porta de entrada para o sistema, onde os usuários autenticam suas credenciais para acessar a plataforma. O login é realizado através da inserção do nome de usuário e senha.

![Texto Alternativo](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/Login.png)  
Imagem 1 - Fonte: Autores

### Justificativa das Escolhas de Design
**Posicionamento dos Elementos:** Os campos de entrada para nome de usuário e senha estão centralizados na tela para focar a atenção do usuário e facilitar o acesso, independentemente do dispositivo utilizado.

**Escolha de Ícones/Botões:**
- **Ícone de Usuário:** Utilizamos o ícone de uma pessoa ao lado do campo de nome de usuário para representar claramente a função do campo e melhorar a usabilidade através de indicações visuais familiares.
- **Botão de Visualização de Senha ("Olho"):** Adicionamos o ícone de um olho próximo ao campo de senha para permitir que o usuário visualize temporariamente sua senha, reduzindo erros de digitação e melhorando a experiência do usuário.

### Técnicas Mobile Avançadas
**Responsividade:** A página de login foi projetada com design responsivo, garantindo uma exibição e funcionalidade consistentes em diferentes tamanhos de tela e dispositivos móveis.

### Feedback e Iterações
**Testes de Usabilidade:** Realizamos testes com usuários reais que destacaram a importância de um processo de login rápido e intuitivo. Com base no feedback, simplificamos o design e adicionamos funcionalidades como a visualização de senha para melhorar a eficiência.

**Mensagens de Erro Claras:** Incorporamos mensagens de erro claras e imediatas para casos de credenciais incorretas, guiando o usuário na correção de informações e reduzindo a frustração durante o processo de login.

## 2. Página de Visão Geral Pós-Login

### Descrição Geral
Após o login, o usuário é direcionado para a página de visão geral da aplicação, que fornece um resumo dos dados de consumo e fraudes de água ao longo dos anos através de gráficos interativos e números destacados.

![Texto Alternativo](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%202/Imagens/Visao%20Geral%20Fraudes.png)  
Imagem 2 - Fonte: Autores

### Justificativa das Escolhas de Design
**Posicionamento dos Elementos:**
- **Seleção de Dados na Parte Superior:** As opções para alternar entre visualizações de "Fraudes" e "Consumo" estão localizadas na parte superior da página para acesso rápido e intuitivo, estabelecendo imediatamente o contexto de análise desejado pelo usuário.
- **Gráficos Centrais:** Os gráficos ocupam a área central da tela para maximizar a visibilidade e facilitar a interpretação dos dados apresentados.

**Escolha de Ícones/Botões:**
- **Botões de Alternância:** Utilizamos botões claramente rotulados e com ícones representativos para permitir que o usuário alterne facilmente entre diferentes conjuntos de dados.
- **Indicadores Visuais:** Cores distintas e consistentes foram atribuídas às categorias de "Fraudes" e "Consumo" para facilitar a distinção e reconhecimento imediato das informações.

### Técnicas Mobile Avançadas
**Gráficos Interativos Responsivos:** Os gráficos são projetados para serem interativos e adaptáveis em dispositivos móveis, permitindo zoom e scroll suaves para análise detalhada em telas menores.

**Gestos de Navegação:** Implementamos suporte a gestos, como deslizar para alternar entre diferentes períodos ou categorias de dados, melhorando a usabilidade em interfaces touch.

### Feedback e Iterações
**Coleta de Feedback do Usuário:** Através de sessões de teste, identificamos a necessidade de tornar os gráficos mais interativos e informativos. Consequentemente, adicionamos funcionalidades como dicas de ferramentas que exibem informações detalhadas ao tocar em pontos específicos dos gráficos.

**Simplificação Visual:** Com base no feedback, reduzimos a complexidade visual inicial dos gráficos para evitar sobrecarga de informações, permitindo que os usuários aprofundem-se nos detalhes conforme necessário.

### Notações e Comentários
**Comportamento de Hover e Tooltip:** No desktop, ao passar o cursor sobre diferentes partes dos gráficos, são exibidas tooltips com informações detalhadas, como valores exatos e comparações anuais.

**Atualização Dinâmica de Dados:** Os gráficos são atualizados em tempo real conforme o usuário altera filtros ou seleciona diferentes parâmetros, proporcionando uma experiência dinâmica e responsiva.

## 3. Seção de Consumo

### Descrição Geral
Ao selecionar a aba de "Consumo" na parte superior da página de visão geral, o usuário acessa informações detalhadas sobre o consumo de água por ano, apresentados através de números e gráficos informativos que suportam a extração de insights aprofundados.

![Texto Alternativo](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/Visao%20Geral%20Consumo.png)  
Imagem 3 - Fonte: Autores

### Justificativa das Escolhas de Design
**Apresentação de Dados Numéricos:** Os números referentes ao consumo anual são destacados para fornecer uma compreensão imediata das métricas chave.

**Incorporação de Gráficos Detalhados:** Decidimos implementar gráficos complementares que ilustram tendências e padrões de consumo ao longo do tempo, reforçando a confiabilidade dos dados apresentados e auxiliando na identificação de insights relevantes.

### Técnicas Mobile Avançadas
**Filtragem Interativa:** Os usuários podem aplicar filtros diretamente nos gráficos para visualizar dados específicos, como consumo por região ou categoria, através de menus dropdown otimizados para dispositivos móveis.

**Carga Progressiva de Dados:** Implementamos técnicas de lazy loading para garantir que os dados e gráficos carreguem de forma eficiente, melhorando o desempenho em conexões móveis mais lentas.

### Feedback e Iterações
**Refinamento de Visualizações:** Feedback inicial indicou que os usuários preferiam visualizações que combinassem diferentes tipos de gráficos (por exemplo, linhas e barras) para comparar múltiplas dimensões de dados simultaneamente. Ajustamos os designs dos gráficos para atender a essa preferência.

**Aprimoramento de Legendas e Rótulos:** Com base nos testes de usabilidade, aprimoramos as legendas e rótulos dos gráficos para serem mais claros e informativos, facilitando a interpretação dos dados.

### Notações e Comentários
**Interação com Dados Específicos:** Ao tocar ou clicar em um ponto de dados específico no gráfico, uma janela modal é exibida com informações detalhadas e opções para ações adicionais, como exportar dados ou visualizar relatórios relacionados.

**Indicadores de Tendência:** Adicionamos indicadores visuais, como setas e cores codificadas, para representar aumentos ou diminuições no consumo, fornecendo insights rápidos sobre as tendências atuais.

## 4. Seção de Perfis

### Descrição Geral
Na barra de navegação lateral, ao clicar no botão "Perfis", o usuário acessa informações detalhadas sobre diferentes perfis de consumo, incluindo aqueles classificados como "Alarmantes" que necessitam de revisão ou são considerados suspeitos.

![Texto Alternativo](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/Perfis%20Alarmantes%20Painel.png)  
Imagem 4 - Fonte: Autores

### Justificativa das Escolhas de Design
**Organização em Abas:** A seção de perfis é dividida em duas abas principais: "Painel de Dados" e "Matrículas", permitindo uma navegação estruturada e organizada entre diferentes conjuntos de informações.

**Destaque para Perfis Alarmantes:** Perfis que requerem atenção imediata são destacados visualmente através de cores e ícones de alerta, facilitando a identificação e priorização por parte do usuário.

### Técnicas Mobile Avançadas
**Navegação por Abas Responsivas:** As abas são otimizadas para dispositivos móveis, permitindo uma alternância suave entre elas através de toques ou gestos de deslizar.

**Tabelas Interativas e Scrolláveis:** As tabelas apresentadas na seção de "Matrículas" são projetadas para serem scrolláveis horizontal e verticalmente em telas menores, mantendo a legibilidade e acessibilidade dos dados.

### Feedback e Iterações
**Simplificação da Interface:** Feedback dos usuários indicou a necessidade de simplificar a visualização dos dados nos perfis alarmantes. Implementamos filtros e opções de ordenação para permitir que os usuários personalizem a exibição de acordo com suas necessidades específicas.

**Melhoria na Detalhamento de Dados:** Com base nos testes, adicionamos informações adicionais nos detalhes dos perfis, incluindo históricos de consumo e indicadores de risco, proporcionando uma compreensão mais completa de cada caso.

### Notações e Comentários
**Detalhes Expandidos via Clique:** Ao clicar na coluna "Detalhes" dentro da tabela de matrículas alarmantes, o usuário é direcionado a uma tela detalhada que apresenta informações abrangentes, como quantidade de consumo, localização e diversos gráficos que ilustram o consumo por mês, fraudes por categoria, leituras e localização.

**Indicadores Visuais de Status:** Utilizamos ícones e cores para indicar o status de cada perfil (e.g., verde para normal, amarelo para atenção, vermelho para alarmante), permitindo uma avaliação rápida do cenário geral.

## 5. Seção de Critérios

### Descrição Geral
Na barra de navegação lateral, ao clicar no botão "Critérios", o usuário acessa uma tela que exibe os critérios utilizados para prever e identificar fraudes. Esses critérios são apresentados de forma clara, com uma indicação visual da relevância de cada um deles.

![Texto Alternativo](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/Criterios.png)  
Imagem 5 - Fonte: Autores

### Justificativa das Escolhas de Design
**Lista Estruturada de Critérios:** Os critérios são exibidos em uma lista organizada para que os usuários possam entender facilmente os fatores considerados no processo de previsão de fraudes.

**Indicação de Relevância:** Cada critério possui uma barra de progresso ou um percentual que mostra sua relevância no processo de análise, ajudando o usuário a visualizar a importância de cada fator.

### Técnicas Mobile Avançadas
**Design Adaptativo:** A seção de critérios foi otimizada para dispositivos móveis, reorganizando a lista de forma a garantir legibilidade e fácil navegação, mesmo em telas pequenas.

**Interatividade:** O usuário pode interagir com cada critério para ver descrições adicionais e exemplos de como eles influenciam a detecção de fraudes.

### Feedback e Iterações
**Clareza nas Definições:** Durante os testes de usabilidade, os usuários sugeriram que fossem incluídas definições mais claras para cada critério. Em resposta a isso, foram adicionadas explicações detalhadas e exemplos que ilustram a aplicação de cada critério no processo de previsão de fraudes.

**Personalização dos Critérios:** Com base no feedback recebido, implementamos a funcionalidade de ajustar a relevância de certos critérios para que os usuários possam personalizar o modelo de análise de acordo com seus contextos operacionais.

### Notações e Comentários
**Tooltips Informativos:** Ao passar o cursor sobre as barras de relevância, tooltips aparecem, fornecendo informações adicionais sobre o impacto de cada critério.

**Feedback Visual em Tempo Real:** Qualquer alteração na relevância dos critérios reflete imediatamente nos modelos de previsão, oferecendo um feedback visual que mostra como essas mudanças afetam os resultados.

---

## 6. Seção de Mapa

### Descrição Geral
O último botão da barra de navegação lateral é o “Mapa”, onde o usuário consegue visualizar as fraudes detectadas em uma interface geográfica interativa. O mapa oferece opções de visualização de calor (heatmap), permitindo ao usuário identificar áreas com maior incidência de fraudes.

![Texto Alternativo](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/Mapa.png)  
Imagem 6 - Fonte: Autores

### Justificativa das Escolhas de Design
**Mapa Interativo de Tela Cheia:** O mapa ocupa a maior parte da tela, oferecendo uma visão ampla e detalhada dos dados geográficos. Isso facilita a identificação de áreas críticas que apresentam alta concentração de fraudes.

**Opções de Visualização:** O usuário pode escolher entre visualizar os dados como um mapa de calor (heatmap) ou como marcadores individuais que representam fraudes pontuais, oferecendo flexibilidade na análise de dados.

### Técnicas Mobile Avançadas
**Gestos de Navegação:** O mapa foi otimizado para dispositivos móveis e suporta gestos como pinça para zoom e deslizar para mover o mapa, proporcionando uma experiência fluida em telas touch.

**Carregamento Dinâmico de Dados:** Para garantir um bom desempenho em dispositivos móveis, os dados são carregados dinamicamente conforme o usuário navega pelo mapa, minimizando o tempo de carregamento e otimizando o uso de dados móveis.

### Feedback e Iterações
**Otimização de Performance:** Durante os testes, foi identificada a necessidade de melhorar o desempenho em dispositivos de menor capacidade. Para isso, implementamos técnicas de clusterização de dados e simplificação de camadas gráficas.

**Adição de Filtros Geográficos:** Com base no feedback dos usuários, implementamos filtros que permitem visualizar fraudes por diferentes critérios geográficos, como bairros ou regiões específicas, aprimorando a capacidade de análise detalhada.

### Notações e Comentários
**Detalhes ao Clicar em Locais:** Ao clicar em um ponto específico no mapa, uma janela de informações é exibida, detalhando o número de fraudes registradas, tipos de fraudes mais comuns e tendências de consumo na região.

**Indicadores de Alerta:** As áreas com maior concentração de fraudes são destacadas com cores mais intensas no mapa de calor, permitindo uma visualização rápida e precisa das zonas críticas.


# <a name="c6"></a>9. Protótipo de Alta Fidelidade da Interface

# Protótipo da Plataforma de Monitoramento

**Link do Figma:**

[https://www.figma.com/design/TGY8eZmXmioCy1eVRUapOv/wireframe-g5?node-id=183-1226&t=6RSauPkwvpkeBJzs-1](https://www.figma.com/design/TGY8eZmXmioCy1eVRUapOv/wireframe-g5?node-id=183-1226&t=6RSauPkwvpkeBJzs-1)

## Protótipo Web

### 1. Página de Login

#### Descrição Geral
A página de login é a porta de entrada para o sistema, onde os usuários autenticam suas credenciais para acessar a plataforma. O login é realizado através da inserção do nome de usuário e senha.

Utilizamos o ícone de uma pessoa ao lado do campo de nome de usuário para representar claramente a função do campo e melhorar a usabilidade através de indicações visuais familiares. Adicionamos o ícone de um olho próximo ao campo de senha para permitir que o usuário visualize temporariamente sua senha, reduzindo erros de digitação e melhorando a experiência do usuário.

![Página de Login](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/Logins%20(1).png)

### 2. Página de Visão Geral Pós-Login

#### Descrição Geral
Após o login, o usuário é direcionado para a página de visão geral da aplicação. Nesta parte, vemos uma interface com duas abas no topo: Fraudes e Consumo. A aba Fraudes está selecionada. Abaixo dessa aba, existe uma tabela que mostra as fraudes por ano, com os anos de 2022, 2023, e 2024. Em 2022 e 2023, o valor de fraudes é de 1.132 m³, enquanto em 2024 o valor é de 1.674 m³.

Abaixo da tabela, há um gráfico de barras verticais em azul que mostra o volume de fraudes ao longo do ano, com cada barra representando um período específico, como meses ou trimestres. O layout é simples e claro, com boas distinções visuais entre os anos e os dados apresentados, permitindo fácil leitura dos números e gráficos. Esse gráfico ajuda o usuário a visualizar as tendências de fraude de forma anual e comparativa.

![Visão Geral](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/Frame%2049%20(1).png)

Clicando na aba "Consumo", que se localiza na parte superior da tela, o padrão visual segue semelhante à aba de Fraudes. A tabela mostra o consumo fraudado por ano nos mesmos períodos: 2022, 2023 e 2024, com valores de 1.132 m³ para os primeiros dois anos e 1.674 m³ para 2024. O gráfico de barras abaixo da tabela apresenta o consumo fraudado ao longo do tempo, com design intuitivo e consistente com a aba de fraudes.

![Aba de Consumo](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/Frame%2071%20(1).png)

### Seção de Perfis

#### Descrição Geral
Na barra de navegação lateral, ao clicar no botão "Perfis", o usuário acessa a página de perfis. Ela apresenta um painel de dados sobre Consumo Fraudado (m³), com várias seções distribuídas na tela. No canto superior esquerdo, há uma seção que indica que 33% do consumo registrado corresponde a fraudes. Ao lado, há um gráfico de barras azul representando as fraudes por categoria.

Abaixo, há um gráfico de linha com dois eixos: a linha azul representa o Consumo, enquanto a linha vermelha representa o Consumo Fraudado. O gráfico permite comparar a relação entre os dois dados ao longo do tempo. 

![Seção de Perfis](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/Frame%2064%20(1).png)

Clicando na aba "Matrículas", localizada na parte superior da tela, é exibida uma tabela detalhada. Cada linha parece representar uma conta de água (matrícula) diferente, com colunas como: Matrícula, Categoria, Consumo, Data de Última Leitura, Localização, Fraude (com uma caixa de seleção) e Probabilidade de Fraude (baixa ou alta). Há também um botão de "Detalhes" ao lado de cada linha para mais informações.

![Matrículas](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/Frame%2095.png)

Após clicar nos três pontos da barra de pesquisa de localização, aparecem dois botões: Matrícula e Localização.

![Barra de Pesquisa](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/Frame%2096%20(1).png)
![Botões de Matrícula e Localização](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/Frame%2074.png)

### Critérios

![Critérios](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/Frame%2069%20(1).png)

Esta parte representa uma interface que detalha os critérios utilizados para fazer previsões de fraudes. Os critérios são: Consumo Médio X Consumo Atual, Data de Leitura X Data Atual, e Categoria. O primeiro critério está quase totalmente preenchido, indicando alta relevância, seguido pelos outros dois critérios, que têm relevância um pouco menor. O painel é crucial para explicar o raciocínio por trás das decisões tomadas pelo sistema de detecção de fraudes.

### Mapa

A última tela mostra um mapa interativo de uma cidade litorânea, especificamente Guarapari, ES. O mapa é detalhado, apresentando nomes de bairros, estradas e pontos de interesse. Marcadores coloridos indicam diferentes áreas da cidade: verde para menor nível de fraudes e vermelho para áreas com mais fraudes. O mapa ajuda o usuário a identificar os hotspots de fraude geograficamente.

![Mapa](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/Frame%2072%20(1).png)

## Protótipo Mobile

Mantivemos o protótipo Mobile bastante fiel com o Desktop a unica modificação foi feita na parte de Mapa que o usuário tem acesso na horizontal ao mapa ao clicar dentro do próprio.

# Tela de Login
Uma tela de login simples com campos para Usuário e Senha, e um botão Entrar. O design é minimalista, com foco na funcionalidade de login.

<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%201.png" alt="Página de Login" width="300"/>

# Visão Geral Pós-Login
 Um gráfico de barras que mostra o volume de fraudes em m³ para os anos de 2022, 2023 e 2024. Há uma tabela acima do gráfico com esses valores, e a aba Fraudes está selecionada no topo da interface.

<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%202.png" alt="Visão Geral" width="300"/>

Clicando no canto esquerdo superior nas 3 linhas, você é levado para a parte de navegação entre as opções de  dashboard perfis, critérios e mapas.

<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%207.png" alt="Barra de Pesquisa" width="300"/>

# Perfis

Na barra de navegação lateral, ao clicar no botão "Perfis", o usuário acessa a página de perfis. Ela apresenta um painel de dados sobre Consumo Fraudado (m³), com várias seções distribuídas na tela.

Abaixo, há um gráfico de linha com dois eixos: a linha azul representa o Consumo, enquanto a linha vermelha representa o Consumo Fraudado. O gráfico permite comparar a relação entre os dois dados ao longo do tempo.

<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%203.png" alt="Aba de Consumo" width="300"/>

Clicando na aba "Matrículas", localizada na parte superior da tela, é exibida uma tabela detalhada. Cada linha parece representar uma conta de água (matrícula) diferente, com colunas como: Matrícula, Categoria, Consumo, Data de Última Leitura, Localização, Fraude (com uma caixa de seleção) e Probabilidade de Fraude (baixa ou alta). Há também um botão de "Detalhes" ao lado de cada linha para mais informações.


<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%204.png" alt="Seção de Perfis" width="300"/>

Clicando na aba "Matrículas", localizada na parte superior da tela, é exibida uma tabela detalhada. Cada linha parece representar uma conta de água (matrícula) diferente, com colunas como: Matrícula, Categoria, Consumo, Data de Última Leitura, Localização, Fraude (com uma caixa de seleção) e Probabilidade de Fraude (baixa ou alta). Há também um botão de "Detalhes" ao lado de cada linha para mais informações.

<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%205.png" alt="Matrículas" width="300"/>


gráfico de barras que exibe o consumo mensal de água de uma matrícula. Cada barra representa um mês diferente, e a altura das barras reflete o volume de consumo de água. Esse gráfico permite uma visualização clara de variações de consumo ao longo do tempo, possibilitando ao usuário identificar tendências ou anomalias que possam indicar problemas ou fraudes. A interface continua simples e direta, sem sobrecarregar o usuário com muitos detalhes, mas permitindo uma análise rápida de padrões de consumo.


<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%208.png" alt="Voltar para matriculas" width="300"/>

# Critérios

Esta parte representa uma interface que detalha os critérios utilizados para fazer previsões de fraudes. Os critérios são: Consumo Médio X Consumo Atual, Data de Leitura X Data Atual, e Categoria. O primeiro critério está quase totalmente preenchido, indicando alta relevância, seguido pelos outros dois critérios, que têm relevância um pouco menor. O painel é crucial para explicar o raciocínio por trás das decisões tomadas pelo sistema de detecção de fraudes.

<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%2010.png" alt="Critérios" width="300"/>


# Mapa

Mantivemos o protótipo Mobile bastante fiel com o Desktop a unica modificação foi feita na parte de Mapa que o usuário tem acesso na horizontal ao mapa ao clicar dentro do próprio.

A última tela mostra um mapa interativo de uma cidade litorânea, especificamente Guarapari, ES. O mapa é detalhado, apresentando nomes de bairros, estradas e pontos de interesse. Marcadores coloridos indicam diferentes áreas da cidade: verde para menor nível de fraudes e vermelho para áreas com mais fraudes. O mapa ajuda o usuário a identificar os hotspots de fraude geograficamente.

<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%2011.png" alt="Mapa" width="300"/>

<img src="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/documents/Sprint%203/Imagens/iPhone%2014%20%26%2015%20Pro%20Max%20-%2012.png" alt="Mapa zoom" width="300"/>

### Guia de Estilos

#### Textos

![Textos](https://github.com/user-attachments/assets/7a3c7246-ba47-4f6d-8556-12dad4e3d53b)

#### Cores

![Cores](https://github.com/user-attachments/assets/6542652b-1cbe-454a-acae-347dfab0e648)



# <a name="c6"></a>10. Front-End da Solução

# Front-End: Versão Final

- Mínimo de duas telas em vias de finalização.
- Relatório detalhado da utilização do Design System escolhido, com exemplos de implementação na aplicação.
- Códigos-fonte da implementação, devidamente comentados e organizados.
- Screenshots ou vídeos da aplicação em funcionamento, destacando os pontos mencionados acima.

- Utilização do Design System
- Heurísticas de Nielsen
- Explicabilidade 

## Manual de utilização

Para utilizar a aplicação, é necessário antes rodar a api que realiza o pré-processamento de csv. Para isso, na pasta do caminho "src/backend" é necessário rodar o seguinte comando:

``
pip install fastapi uvicorn pillow numpy tensorflow scikit-learn pandas requests openpyxl gdown python-multipart
``

Após isso, é possível rodar a api com o comando a seguir:

``
python -m uvicorn app.main:app --reload
``

Após rodar a api, é possível acessar a interface rodando, antes, o comando a seguir na pasta do frontend "src/frontend/aegea-project":


``
npm i vite
``

Após isso, está tudo pronto para rodar o comando que inicia a aplicação no frontend:

``
npm run dev
``

Após rodar este comando, o terminal irá trazer um link para a janela na qual a interface irá funcionar:

![image](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/npm.png)

Um csv que pode ser utilizado para teste da aplicação é o que está presente na pasta compartilhada do seguinte link do drive:

https://drive.google.com/drive/u/1/folders/0AFkDn1NCbpojUk9PVA

É necessário baixar o arquivo "SPRINT4" e fazer upload dele na página inicial da aplicação.

&emsp;&emsp;


## Front-End e Fluxo de Navegação


## 1.- Tela de Upload e Seleção de Variáveis
Na primeira imagem, vemos a tela inicial da aplicação onde o usuário pode carregar um arquivo CSV contendo as informações necessárias para visualização e análise de fraudes. A interface está dividida em seções que descrevem as colunas do csv que deve ser inputado:

- **Numericas**: Exibe variáveis numéricas como "EMP_CODIGO", "COD_GRUPO", "NUM_QUADRA", entre outras, com checkboxes que permitem selecionar as variáveis desejadas.
- **Binárias**: Apresenta variáveis binárias como "ECO_RESIDENCIAL", "ECO_COMERCIAL", e a variável-alvo "FRAUDE", que também podem ser selecionadas.
- **Categóricas**: Exibe variáveis categóricas como "TIPO_LIGACAO", "CATEGORIA", "STA_TROCA", e outras.
- **Data**: Inclui a variável "REFERENCIA", que provavelmente está relacionada ao período de coleta ou análise dos dados.

![image](https://github.com/user-attachments/assets/4a0f4737-50d4-44cc-afd6-68a3fd6e3d67)


## 2.Consumo Fraudado por Ano
Nesta tela, o foco está em um gráfico de barras que exibe o **consumo fraudado por ano**, indicando os valores mensais de consumo fraudado por matrícula. Alguns detalhes da interface:

- No topo, há duas abas principais: **Fraudes** e **Consumo**.
- O gráfico exibe o consumo de fraudes mensalmente (31 de janeiro, 28 de fevereiro, etc.).
- No canto direito, há uma comparação entre os anos de **2018** e **2019**, mostrando os valores totais de consumo fraudado em metros cúbicos (m³), sendo 61.9 m³ em 2018 e 396.5 m³ em 2019.


![image](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/front1.png)

## 3. Fraudes por Ano
Essa tela segue o mesmo layout da imagem anterior, mas o gráfico agora exibe a **quantidade de fraudes por ano**. O gráfico de barras detalha o índice de fraudes, provavelmente uma média mensal, onde é possível visualizar a incidência de fraudes em diferentes meses.

- Novamente, vemos a comparação entre os anos de **2018** e **2019**, agora com os valores totais de fraudes, sendo **68.98** em 2018 e **499.27** em 2019.
- As abas de navegação também permanecem visíveis no topo: **Fraudes** e **Consumo**.


![image](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/front2.png)

## 4. Painel de Dados: Consumo Fraudado e Fraudes
Esta imagem mostra um painel mais detalhado e gráfico:

- **Gráfico de Barras** no centro da tela, com quatro categorias de fraudes: Comercial, Industrial, Pública, e Residencial.
- **Indicadores de Consumo Fraudado** e **Taxa de Fraude (%)** à esquerda da tela, fornecendo um resumo rápido. Exemplo: Consumo fraudado de 40.35 m³ e fraudes de 30%.
- **Gráfico de Linhas** na parte inferior, exibindo a relação entre **consumo médio e consumo fraudado** ao longo do tempo.

A navegação principal continua na parte superior, com as opções **Painel de dados** e **Matrículas**.


![image](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/fronttt.png)


## 5. Tabela de Matrículas
Nesta tela, a interface exibe uma **tabela de matrículas** detalhada, com várias informações como:

- **Categoria**: Indica se a matrícula é Comercial, Pública, ou Residencial.
- **Matrícula**: Número único identificando cada matrícula.
- **Consumo Medido**: Volume medido de consumo.
- **Fraude**: Uma coluna com checkboxes indicando se foi identificada fraude para aquela matrícula.
- **LTR Coletada**: Valor coletado de leitura, provavelmente relacionado ao volume de água ou outro recurso.

Há também botões de **detalhes** para cada matrícula, permitindo uma análise mais aprofundada dos dados específicos de cada caso.

![image](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/front%203.png)

## 6. Detalhes de Matrícula
Essa tela exibe os **detalhes específicos de uma matrícula**, permitindo ao usuário visualizar informações detalhadas sobre consumo e fraudes.

- Informações exibidas incluem:
  - **Categoria**: Comercial.
  - **Consumo**: 218 m³.
  - **Leitura**: 395.
  - **Cod. Grupo**: 19.
  - **Tipo de Ligação**: Hidrometrado.
  - **Localização**: Coordenada geográfica provavelmente para identificação física da matrícula.
  - **Data da Última Leitura**: 26/09/2019.
- Na parte inferior, há um **gráfico de barras** que exibe o **consumo mensal** desta matrícula, permitindo ao usuário identificar padrões ou anomalias ao longo do tempo.

![image](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/front4.png)


## 7. Critérios Utilizados para Previsões de Fraudes
A última tela apresenta os **critérios utilizados para as previsões de fraudes**, provavelmente baseados em um modelo de rede neural.

- Para cada critério listado, há um **gráfico de barra horizontal** que parece indicar a relevância de cada critério no modelo preditivo. O critério mais enfatizado é o **Consumo Médio X Consumo Atual**.
- A interface apresenta vários desses critérios, o que sugere que o modelo de rede neural utiliza múltiplas variáveis para calcular a probabilidade de fraude.

![image](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/front5.png)

## Conclusão
Cada tela apresenta um aspecto essencial para análise e previsão de fraudes, com uma interface bem organizada e centrada em gráficos e tabelas para visualização rápida dos dados. O usuário tem liberdade para explorar diferentes detalhes por matrícula, visualizar fraudes ao longo do tempo e ver como o modelo de rede neural faz suas previsões com base nos dados fornecidos.

As próximas implementações devem focar em melhorar a acessibilidade, detalhar a explicação do modelo preditivo, e aprimorar a navegação e usabilidade da interface.


---------------------------------------------------------------------------------------------------
# Documentação da Interface e Sistema de Previsão de Fraudes

## 1. Visão Geral
A aplicação apresentada nas imagens é voltada para a visualização e previsão de fraudes com base em diferentes variáveis, categorizadas em numéricas, binárias, categóricas e de data. O sistema utiliza uma rede neural para prever a probabilidade de fraude em cada matrícula, exibindo essas informações de maneira interativa e acessível através de gráficos e tabelas.

## 2. Acessibilidade e WCAG (Web Content Accessibility Guidelines)
A aplicação foi projetada considerando os princípios de acessibilidade das WCAG, que garantem que os usuários com deficiências possam navegar e interagir com a interface de maneira eficiente. Aqui estão algumas observações de como os critérios das WCAG foram aplicados e como podem ser melhorados:

- **Contraste de Cores (WCAG 1.4.3)**: A interface apresenta cores de fundo escuras com texto claro, o que ajuda na legibilidade para usuários com deficiência visual. No entanto, os gráficos com cores mais saturadas, como o azul brilhante, podem não ter contraste suficiente para usuários daltônicos. Uma solução seria implementar uma paleta de cores com maior contraste.
  
- **Navegação via Teclado (WCAG 2.1.1)**: O sistema deve permitir que todos os elementos da interface sejam acessíveis via teclado, como as opções de seleção de variáveis e botões de detalhes. Isso pode ser testado e, se necessário, aprimorado.

- **Textos Alternativos e Rótulos (WCAG 1.1.1)**: Todas as imagens e gráficos precisam de descrições textuais apropriadas para leitores de tela. Garantir que cada gráfico seja acompanhado por uma descrição clara do que representa.

- **Redimensionamento do Texto (WCAG 1.4.4)**: A aplicação parece ter um layout responsivo, mas deve ser verificado se o texto pode ser ampliado em 200% sem perda de funcionalidade.

## 3. Heurísticas de Nielsen
Baseando-se nas heurísticas de usabilidade de Nielsen, a interface foi analisada em relação aos seguintes critérios:

- **Visibilidade do status do sistema**: A aplicação fornece feedback claro, como o progresso de upload de arquivo e visualizações dos dados analisados, o que é um ponto positivo.

- **Compatibilidade entre o sistema e o mundo real**: Os termos usados, como "Matrículas", "Consumo", "Fraudes", são consistentes com a terminologia esperada pelo público-alvo, tornando a interface intuitiva.

- **Controle e liberdade do usuário**: O sistema oferece uma navegação fluida entre diferentes seções (fraudes, consumo, matrículas), o que facilita a exploração de diferentes aspectos dos dados.

- **Consistência e padrões**: A interface utiliza um design coeso, com cores e componentes reutilizados de maneira consistente em toda a aplicação.

- **Prevenção de erros**: A interface garante que erros como o upload de arquivos incorretos sejam minimizados, mas poderia adicionar mensagens de validação mais descritivas para guiar o usuário.

- **Reconhecimento em vez de recordação**: A aplicação facilita a escolha de variáveis e matrículas ao exibir todas as informações relevantes na tela, minimizando a necessidade de memorização.

## 4. Design System
A aplicação utiliza um design system com componentes reutilizáveis para garantir coesão e escalabilidade. Entre os elementos identificados estão:

- **Paleta de Cores**: A aplicação usa um esquema de cores predominantemente escuro, com destaques em azul e verde para gráficos e botões. Uma paleta mais acessível poderia ser implementada para aumentar a acessibilidade.

- **Componentes Reusáveis**: Botões, tabelas, gráficos de barras e linhas foram reutilizados em várias seções da interface. Componentes como o botão "Detalhes", gráficos de fraude e consumo, e campos de seleção categórica são partes críticas do design system.

- **Tipografia**: A tipografia é clara e legível, com uma hierarquia bem definida para títulos, legendas e textos de corpo.

- **Ícones e Navegação**: Ícones à esquerda permitem fácil navegação entre diferentes áreas da aplicação, como dashboard, matrículas e fraudes.

## 5. Feedbacks e Melhorias
Com base em um possível feedback de usuários, algumas melhorias podem ser propostas:

- **Feedback 1**: A interface precisa de maior contraste em gráficos para melhorar a legibilidade em diferentes condições de luminosidade e para daltônicos.
  - **Solução**: Adotar uma paleta de cores acessível e aplicar ajustes de contraste automaticamente.
  
- **Feedback 2**: A navegação pelo teclado pode ser aprimorada, permitindo uma experiência mais inclusiva para usuários com dificuldades motoras.
  - **Solução**: Garantir que todos os campos de seleção, gráficos e botões sejam acessíveis por teclado, incluindo atalhos e navegação por tabulação.

- **Feedback 3**: Alguns usuários podem solicitar explicações sobre o que cada gráfico representa.
  - **Solução**: Adicionar tooltips explicativos para cada elemento gráfico, além de fornecer descrições textuais completas.
 
### Resultados de testes 
 
Durante uma atividade com outros grupos, alguns feedbacks foram coletados após 4 usuários diferentes utilizarem a aplicação:

**Usuário 1**

O usuário, na página inicial de login, clicou no campo de nome de usuário e, em seguida, inseriu a senha pré-definida para testes. Após isso, clicou no botão "Entrar" e foi redirecionado para a página de visão geral. Em seguida, viu a tabela de fraude por ano, e depois na aba de consumo.
Depois viu as metricas de anos, junto com o menu lateral e o icone de perfil de fraude.

**Usuário 2**

O usuário, na página inicial de login, clicou no campo de nome de usuário e, em seguida, inseriu a senha pré-definida para testes. Após isso, clicou no botão "Entrar" e foi redirecionado para a página de visão geral. Em seguida, acessou a aba "Fraudes", onde verificou o valor total de fraudes por ano. Posteriormente, clicou no botão "Mapas" na barra de navegação lateral e explorou o mapa interativo de navegação de fraudes.

**Melhorias:** 

- Nomear botoes, evidenciar em qual segmento significa

- Evidenciar tab “ANO” selecionada no gráfico

**Usuário 3**

Usuário não deu muita atenção para os gráficos da página inicial, foi direto olhar as outras e depois voltou pra eles

**Melhorias:**

- Evidenciar tab selecionada na navbar

- Evidenciar tab “ANO” selecionada no gráfico

**Usuário 4**

Os botões foram facilmente localizados, proporcionando uma navegação ágil, com as informações mais relevantes posicionadas de forma intuitiva e acessível logo no início.
O fluxo de uso foi simples, eficiente e prático, facilitando a realização de tarefas sem complicações.
A interface mostrou-se organizada e clara, minimizando a necessidade de cliques adicionais para encontrar o que era necessário.

## 6. Explicabilidade do Modelo de Rede Neural
A interface utiliza uma rede neural para prever fraudes com base em matrículas e outros atributos. Para que o modelo seja interpretável pelos usuários, é essencial garantir explicabilidade, ou seja, fornecer uma justificativa clara para cada previsão. Algumas maneiras de implementar isso são:

- **SHAP (SHapley Additive exPlanations)**: Utilizar SHAP values para explicar a contribuição de cada variável para a previsão de fraude, exibindo diretamente na interface, próximo às previsões.
  
- **Visualização de pesos**: Mostrar como as diferentes variáveis (consumo, tipo de ligação, etc.) influenciam a probabilidade de fraude por meio de gráficos de importância de variáveis.

- **Interpretações locais**: Implementar ferramentas que expliquem a previsão de fraude para uma matrícula específica, indicando quais fatores mais contribuíram para aquela classificação.

## 7. Próximos Passos
- **Aprimoramento de Acessibilidade**: Revisar a interface com foco em tornar todos os elementos acessíveis, principalmente para navegação por teclado e leitores de tela.
  
- **Explicabilidade do Modelo**: Implementar mecanismos que permitam aos usuários visualizar a contribuição de cada variável para as previsões da rede neural, aumentando a confiança e transparência do modelo.

- **Otimização de Desempenho**: Avaliar o desempenho da interface com datasets maiores e garantir que a visualização dos gráficos continue rápida e responsiva.

- **Teste de Usabilidade**: Conduzir testes com usuários reais para coletar feedback contínuo e melhorar a experiência de navegação e interação com o sistema.

## Estrutura de Pastas e Arquitetura do Projeto

### 1. node_modules/
- *Descrição*: Contém todas as dependências e pacotes do projeto instalados via npm ou yarn.
- *Função*: Facilita o uso de bibliotecas externas sem a necessidade de incluir manualmente cada uma no repositório.

### 2. public/
- *Descrição*: Diretório que contém os recursos estáticos, como imagens e outros arquivos que não são processados diretamente pelo JavaScript.
- *Função*: Serve como ponto de acesso para arquivos estáticos que serão servidos diretamente aos usuários.

### 3. src/
- *Descrição*: O diretório principal para a implementação do código-fonte do projeto. Contém as lógicas de front-end, componentes e as configurações necessárias para a aplicação.

## Tecnologias Utilizadas

### 1. *React (Vite)*
-  Biblioteca JavaScript para construção de interfaces de usuário baseadas em componentes.

### 2. *TypeScript*
-  Linguagem de programação baseada em JavaScript que adiciona tipagem estática ao código.

### 4. *Tailwind CSS*
-  Framework de CSS utilitário para criação rápida de interfaces, baseado em classes utilitárias.
# **Design System - Documentação Completa**

## 1. **Introdução ao Design System**

O Design System foi criado para proporcionar uma experiência de usuário consistente, acessível e escalável. Ele reúne uma coleção de componentes reutilizáveis, estilos, diretrizes e melhores práticas, projetados para agilizar o desenvolvimento da interface e promover uma colaboração eficiente entre as equipes de design e desenvolvimento.

### 1.1 Objetivo

O objetivo deste Design System é fornecer componentes e padrões reutilizáveis que garantem:

- **Consistência**: Um visual e comportamento uniforme em toda a aplicação.
- **Escalabilidade**: Componentes que podem ser reutilizados e expandidos conforme necessário.
- **Acessibilidade**: Garantir que a interface seja utilizável por pessoas com diferentes capacidades.

## 2. **Bibliotecas Utilizadas**

### 2.1 **Class-Variance-Authority (CVA)**

A **CVA** permite o gerenciamento de estilos condicionalmente, facilitando a criação de componentes com variantes (como diferentes estilos de botões) e tamanhos. Ela é fundamental para manter o código de estilo limpo, organizado e fácil de escalar.

### 2.2 **Radix UI**

Biblioteca focada em acessibilidade e interatividade de componentes. Ela é utilizada para criar elementos interativos, como checkboxes, selects e popovers, garantindo que o design seja funcional e acessível.

### 2.3 **Recharts**

Uma biblioteca de gráficos para React que é altamente personalizável e utilizada no projeto para criar visualizações de dados como gráficos de barras e linhas.

### 2.4 **Date-fns**

Biblioteca de utilitários para trabalhar com datas. Ela é leve e eficiente, permitindo manipulações de datas de forma simples.

---

## 3. **Componentes do Design System**


### 3.1 **Button**

### Descrição:

O componente `Button` é configurável para diferentes estilos e tamanhos, proporcionando uma experiência consistente ao usuário em diversas interações.

### Variantes:

- **default**: Fundo branco, utilizado para ações primárias.
- **selected**: Botão azul claro.

  ![image](https://github.com/user-attachments/assets/fd581155-0736-4d04-aa18-b44bbac18a13)


### Tamanhos:

- **sm**: Pequeno, para botões menos destacados.
- **default**: Tamanho padrão.
- **lg**: Grande, para ações importantes ou que precisam de maior destaque.

---

### 3.2 **Tabela**

### Descrição:

O componente de tabela é altamente flexível, com subcomponentes para cabeçalhos, linhas, células e legendas. As tabelas são responsivas e estilizadas para exibir informações em formato tabular.

### Subcomponentes:

-- Input de pesquisa
- **TableHeader**: O cabeçalho da tabela.
- **TableRow**: Linhas da tabela.
- **TableCell**: Células que contêm os dados.

![image](https://github.com/user-attachments/assets/d01f2643-3592-4ad8-941d-87addcb64815)

---

### 3.3 **Chart (Gráfico)**

### Descrição:

Os componentes de gráficos utilizam a biblioteca **Recharts** para renderizar gráficos interativos. O `ChartContainer` é o contêiner principal que configura o gráfico e suas cores, enquanto o `ChartTooltip` e o `ChartTooltipContent` são usados para exibir informações detalhadas ao passar o mouse sobre os elementos do gráfico.

![image](https://github.com/user-attachments/assets/a3729374-be02-420d-9b08-78b90c7033f6)

---


## 4. **Conclusão**

Este Design System foi criado para oferecer uma base sólida e adaptável no desenvolvimento de interfaces de usuário, assegurando tanto a consistência visual quanto a acessibilidade funcional.

Seja em botões, gráficos, tabelas ou formulários, o sistema proporciona uma abordagem integrada e eficiente para construir experiências digitais de excelência.


# <a name="c6"></a>11. API de Integração


![image](https://github.com/user-attachments/assets/4440f63f-eae0-4040-a248-32878d4d13bf)


# <a name="c6"></a>12. Documentação Técnica


### 12.1 Arquitetura do Projeto

# Documento Técnico: Seleção da Arquitetura de Rede Neural Artificial para Detecção de Fraudes no Consumo de Água


![Arquitetura](https://github.com/Inteli-College/2024-2A-T04-SI11-G05/blob/main/Assets/undersample.png)


## 12.1.1. Introdução

### 12.1.1.1 Contextualização do Problema
A Aegea Saneamento enfrenta um grande desafio com fraudes no consumo de água, que afetam diretamente o faturamento e a qualidade dos serviços de abastecimento. A identificação precisa dessas fraudes é fundamental para mitigar os impactos negativos.

### 12.1.1.2 Objetivo do Documento
Este documento visa justificar a seleção da arquitetura de uma Rede Neural Artificial (RNA) projetada para detectar fraudes no consumo de água, utilizando dados históricos de consumo e outras variáveis relevantes. A escolha da arquitetura é baseada em literatura especializada e boas práticas do campo de aprendizado profundo (deep learning).

## 2. Arquitetura da Rede Neural

### 12.1.2.1 Descrição Geral da Arquitetura
A arquitetura da rede neural foi projetada para processar um grande número de variáveis relacionadas ao consumo de água e identificar padrões indicativos de fraude. A arquitetura consiste nas seguintes camadas:

#### 12.1.2.1.1 Camada de Entrada
A camada de entrada possui 264 neurônios, correspondendo às 264 variáveis ou características (features) dos dados de consumo medido, fornecidos pela Aegea. Esta camada inicial é responsável por receber os dados e transferi-los para as camadas ocultas subsequentes.

#### 12.1.2.1.2 Camadas Ocultas
A rede inclui duas camadas ocultas:

- **Primeira Camada Oculta:** Com 64 neurônios e ativação ReLU (Rectified Linear Unit), esta camada é projetada para capturar padrões complexos nos dados, essenciais para a identificação de fraudes.
- **Segunda Camada Oculta:** Com 32 neurônios e também ativação ReLU, esta camada refina os padrões identificados, ajudando a melhorar a precisão do modelo.
- **Terceira Camada Oculta:** Com 16 neurônios e ativação ReLU, esta camada continua a refinar os padrões complexos para melhorar a precisão.

A função de ativação ReLU foi escolhida por sua capacidade de introduzir não linearidade no modelo, permitindo que a rede aprenda relações complexas e evite o problema do desaparecimento do gradiente, comum em redes profundas.

#### 12.1.2.1.3 Camada de Saída
A camada de saída é composta por um único neurônio com função de ativação sigmoide. Esta camada produz uma probabilidade entre 0 e 1, indicando a chance de uma determinada matrícula apresentar um comportamento fraudulento.

- **Função de Ativação Sigmoide:** Adequada para tarefas de classificação binária, a sigmoide transforma a saída do modelo em uma probabilidade que pode ser interpretada como um indicador de fraude.

### 12.1.2.2 Justificativa da Arquitetura Selecionada
A escolha da arquitetura foi motivada por:

- **Dimensionalidade dos Dados:** Com 264 variáveis, a arquitetura precisa ser capaz de processar uma grande quantidade de informações e extrair características relevantes que possam indicar fraudes.
- **Eficiência Computacional:** A combinação de 64, 32, e 16 neurônios nas camadas ocultas equilibra a complexidade e a eficiência do modelo, garantindo bom desempenho sem risco de overfitting.
- **Boas Práticas de Deep Learning:** A utilização de ReLU e sigmoide segue as melhores práticas na construção de redes neurais, assegurando um treinamento eficiente e uma boa capacidade de generalização.

### 12.1.2.3 Boas Práticas Implementadas
- **Normalização dos Dados:** Todas as variáveis foram normalizadas, assegurando que os dados estejam em uma escala semelhante, o que é essencial para a convergência do modelo.
- **Regularização:** Foi implementada a técnica de dropout nas camadas ocultas para reduzir o risco de overfitting e melhorar a capacidade do modelo de generalizar para novos dados.
- **Balanceamento de Classes:** Devido ao desbalanceamento natural entre fraudes e não fraudes, técnicas de oversampling foram consideradas para ajustar o modelo e melhorar sua precisão na detecção de fraudes.

## 12.1.3. Conclusão
Este documento apresenta uma análise detalhada da seleção da arquitetura de uma Rede Neural Artificial para detecção de fraudes no consumo de água, conforme o projeto para Aegea Saneamento. A arquitetura foi cuidadosamente escolhida para contribuir para a identificação precisa de fraudes e, consequentemente, para a melhoria da eficiência operacional da Aegea.


### 12.2 Pré-processamento dos Dados

# Análise exploratória

A análise exploratória foi realizada em um notebook do Google Colab que pode ser acessado por este link:
https://colab.research.google.com/drive/1kz6cKeyFa5XJe0wAAidUxrGeTVfTREaX?authuser=1#scrollTo=EzDtamA60bvf

## 12.2.1. Entendimento dos dados

### 12.2.1.1. CSV do consumo

#### 12.2.1.1.1. Tipos de Dados e suas Características

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

### 12.2.1.2. CSV de fraudes

#### 12.2.1.2.1. Tipos de Dados

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

#### 12.2.1.2.2. Importância para o projeto

A variável alvo será a ocorrência de fraude. Esta tabela é, portanto, essencial para o projeto e levará a maiores insights após a junção com a tabela "consumo".

## 12.2.2. Tratamento dos dados

### 12.2.2.1. Tratamento de valores nulos

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

### 12.2.2.2. Normalização das variáveis numéricas

o `StandardScaler` da biblioteca `sklearn` foi a ferramenta utilizada para normalização de variáveis númericas. 

### 12.2.2.2. Tratamento das variáveis categóricas

Para o tratamento das variáveis categóricas foi aplicado o One Hot Encoding. Na tabela de consumo, as colunas utilizadas foram as seguintes:

`'CATEGORIA', 'SUB_CATEGORIA','TIPO_LIGACAO', 'EXCECAO', 'FATURADO_MEDIA'`

Já para a de fraudes, foram as seguintes:

`'DESCRICAO', 'NM_TIPO_EXECUCAO', 'DS_SERVICO_SOLICITADO', 'TIPOOS'`

### 12.2.2.3. Merge das tabelas tratadas

A junção que foi realizada das duas tabelas foi feita para identificar quais matrículas estavam atreladas a fraudes. Para isso, foi separado um pedaço da tabela de fraudes referente apenas a 2020 e feita uma comparação destas matrículas com as de consumo, também de 2020. A `proporção de casos de fraude` identificada para este ano após a junção foi de `33.43%`, calculada pela média de fraudes na tabela gerada.

## 12.2.3. Análise dos dados

### 12.2.3.1. Dados da tabela consumo

Análises sazonais podem ser uma boa iniciativa para as análises que virão a seguir pois podem possibilitar futuros insights sobre o consumo de água. O estudo das flutuações sazonais no consumo de água ao longo de 2020 revela importantes padrões de variação. No início do ano, o consumo manteve-se relativamente estável, mas experimentou uma queda significativa em junho. A partir de julho, o consumo aumentou, atingindo um pico em setembro, possivelmente devido ao aumento das temperaturas e à maior demanda. Esse conhecimento é essencial para a formulação de estratégias de gestão de recursos hídricos mais eficientes

![image](https://github.com/user-attachments/assets/3228a63b-e97d-4dba-b6e2-fe0e1919299f)


![image](https://github.com/user-attachments/assets/0f877df1-d605-4671-b27b-2c244a1625ab)


### 3.2. Dados sobre fraudes

O gráfico abaixo apresenta uma análise preliminar dos dados de fraudes em 2020. Ele mostra que o número de consumos fraudados foi quase equivalente ao consumo não fraudado durante o período, sugerindo que, embora o número total de fraudes não seja excessivamente alto, algumas fraudes tiveram um impacto significativo no consumo de água.

![image](https://github.com/user-attachments/assets/4d3849f8-4128-4714-adf6-88e6893d049d)


#### 3.2.1. Dados sazonais 

![image](https://github.com/user-attachments/assets/9b52bad8-cf69-4866-9dc4-5ee0270c61c4)


Este gráfico em conjunto com o gráfico abaixo serve como uma sequência do gráfico anterior a ele, pois mostra que houveram mais fraudes no final do ano mas que, apesar disso, houve mais consumo e, consequentemente, mais consumo fraudado no início do ano, entre os meses de janeiro e maio.

![image](https://github.com/user-attachments/assets/6d44054e-c1a0-4a48-ab50-c1932098b7e8)


O gráfico acima mostra, além do que já foi mencionado, que o mês março é um período que deve ter atenção durante as análises, visto que o número de fraudes tanto quanto o de consumo foram altos durante este mês.

#### 3.2.2. Dados por variáveis categóricas

![image](https://github.com/user-attachments/assets/48d6f657-ae91-41e1-bcbb-7fb03a3c6885)


Com o resultado do gráfico, é possível deduzir que os tipos de ocorrência "medidor invertido / ligação lacrada" e "imóvel desocupado", principalmente, foram, em 2020, encontrados em fraudes que podem ser consideradas pontos importantes de atenção, uma vez que o consumo de água também foi alto para estas categorias.

Sabendo disso, pode ser interessante analisar estas categorias em específico, o que foi feito nos gráficos a seguir:

![image](https://github.com/user-attachments/assets/8f26055a-c870-41fd-8d42-a33914faadad)


![image](https://github.com/user-attachments/assets/78b9657e-81d2-4e6f-86ec-4fad71a3de90)


![image](https://github.com/user-attachments/assets/7ba3ce33-d640-4303-bbae-4d6be9e23e5f)


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


### 12.4 Modelo

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


## Conclusão
Em resumo, o modelo de detecção de fraudes desenvolvido para a Aegea apresenta um desempenho inicial encorajador, com um grande potencial para melhorias significativas. Embora a acurácia e a precisão estejam em níveis razoáveis, os resultados indicam que o recall e o F1-Score são áreas críticas que oferecem oportunidades valiosas para otimização.

A baixa taxa de recall atual destaca um campo fértil para avanços. Isso significa que muitas fraudes ainda estão escapando da detecção, o que representa uma oportunidade imensa para a Aegea aprimorar suas operações e minimizar perdas financeiras. Com um enfoque estratégico em melhorar essa métrica, a empresa pode não apenas aumentar a detecção de fraudes, mas também fortalecer sua reputação como prestadora de serviços confiáveis e eficazes.

As curvas de aprendizado revelam que o modelo está em um caminho promissor, indicando que com ajustes nos hiperparâmetros e um treinamento mais extenso, poderemos elevar drasticamente sua eficácia. Cada iteração no treinamento representa um passo em direção a uma solução mais robusta e confiável.


# <a name="c6"></a>13. Implantação da API

# Implantação da API com FastAPI

Esta API usa **FastAPI** para receber arquivos CSV ou Excel contendo dados de consumo e fraudes. Ela realiza o pré-processamento e retorna informações úteis para análise de fraudes.

## Dependências

- **FastAPI**: Para a criação da rota da API.
- **pandas**: Para manipulação de dados.
- **scikit-learn**: Para codificação e escalonamento de dados categóricos.
- **NumPy**: Para tratamento de arrays e valores nulos.

## Estrutura da API

A API define uma rota `POST` em `/preprocess/`, que aceita um arquivo (CSV ou Excel) e executa o processamento dos dados.

### Rota de Pré-Processamento

```python
@router.post("/preprocess/")
async def preprocess_file(file: UploadFile = File(...)):
    # Verificação do tipo de arquivo
    if file.content_type not in ['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']:
        raise HTTPException(status_code=400, detail="Invalid file type. Only CSV or Excel files are accepted.")
    
    # Leitura do arquivo
    contents = await file.read()
    try:
        if file.content_type == 'text/csv':
            df = pd.read_csv(BytesIO(contents))
        else:
            df = pd.read_excel(BytesIO(contents))
    except Exception as e:
        raise HTTPException(status_code=400, detail="Failed to read the file.")
    
    # Chamando a função de pré-processamento
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
```

# Pré-Processamento de Dados

A função `preprocess_data` realiza várias etapas de limpeza e transformação dos dados:

### 1. Preenchimento de Valores Nulos:
- Colunas categóricas são preenchidas com "Desconhecido".
- Colunas numéricas são preenchidas com a mediana.

### 2. Codificação One-Hot:
- Colunas categóricas como `CATEGORIA` e `TIPO_LIGACAO` são transformadas em colunas binárias.

### 3. Conversão de Datas:
- A coluna `REFERENCIA` (se presente) é convertida para o tipo `datetime`.

### 4. Marcação de Fraudes:
- Matrículas associadas a fraudes são identificadas e marcadas no dataframe.

### 5. Criação de Categorias:
- Para cada linha, a API define a categoria (`CATEGORIA`) e o tipo de ligação (`TIPO_LIGACAO`) como strings.

### 6. Médias de Fraude e Consumo:
- A média de "FRAUDE" e "CONS_MEDIDO" é calculada e agrupada por categorias.

### 7. Percentual de Fraudes:
- O percentual de fraudes em relação ao total de registros é calculado.

### 8. Média de Consumo em Casos de Fraude:
- Calcula-se a média de consumo apenas para os casos de fraude.

### 9. Big Numbers por Data:
- Agrupa os dados por `REFERENCIA` (data) e calcula as médias de consumo e fraudes.

### 10. Consumo por Matrícula:
- Agrupa o consumo por matrícula e exibe as referências correspondentes.

Código de Pré-Processamento de Dados


```python
def preprocess_data(df: pd.DataFrame) -> Dict[str, Any]:
    # Assumindo que o DataFrame contém df_consumo e df_fraudes identificados pela coluna FRAUDE_FLAG
    df_consumo = df[df['FRAUDE'] == 0].copy()  # Dados de consumo (sem fraude)
    df_fraudes = df[df['FRAUDE'] == 1].copy()  # Dados de fraude

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
    fraudes_consumo['FRAUDE'] = fraudes_consumo['MATRICULA'].apply(lambda x: 1 se x in matriculas_fraude else 0)

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
```

    
Exemplo de Resposta JSON


```json
{
  "processed_data": [...],
  "fraude_mean_by_category": [
    {"category": "Comercial", "fraude": 0.15},
    {"category": "Residencial", "fraude": 0.12}
  ],
  "consumo_mean_by_category": [
    {"category": "Comercial", "consumo": 300.45},
    {"category": "Residencial", "consumo": 150.23}
  ],
  "fraude_mean": 10.5,
  "cons_medido_mean_fraude": 200.75,
  "big_numbers_by_referencia": [
    {"referencia": "2023-05-01", "consumo_mean": 300, "consumo_mean_fraude": 250},
    {"referencia": "2023-06-01", "consumo_mean": 310, "consumo_mean_fraude": 240}
  ],
  "matricula_consumption_data": [
    {"matricula": 12345, "consumo_by_referencia": [
      {"referencia": "2023-05-01", "consumo": 250.75},
      {"referencia": "2023-06-01", "consumo": 300.50}
    ]}
  ]
}
```

# Validação de Arquivo
A API valida que o arquivo enviado seja do tipo CSV ou Excel. Caso contrário, retorna um erro 400.

# Conclusão
Essa API oferece uma solução completa para o pré-processamento de dados de consumo e fraudes, permitindo análises detalhadas, cálculo de métricas e agrupamento de dados por categorias e datas.


# <a name="c6"></a>14. Referências

<a href="https://www.ijraset.com/research-paper/data-mining-based-model-for-detection-of-fraudulent-behaviour-in-water-consumption">A Data Mining Based Model for Detection of Fraudulent Behaviour in Water Consumption - 2022 - Alavala Sathwik, B. Yugendar Nayak, Dr. Y. Srinivasulu</a> 

<a href="https://www.researchgate.net/publication/314491169_Smart_Meter_Data_Analytics_for_Optimal_Customer_Selection_in_Demand_Response_Programs">Smart Meter Data Analytics for Optimal Customer Selection in Demand Response Programs - 2016- Timothy Eveleigh, Madeline Martinez-Pabon</a>


<a href="https://revista.cgu.gov.br/Revista_da_CGU/article/download/531/368/3667">Inteligência artificial no combate à  fraude e corrupção: A experiência da  Controladoria Geral do Município do Rio  de Janeiro, 2023 - Dalton Henrique Mota Ibere Gilson e Gustavo de Avellar Bramili</a>


<a href="https://ui.shadcn.com/docs">Shadcn (Biblioteca utilizada para o desenvolvimento do FrontEnd)</a>
