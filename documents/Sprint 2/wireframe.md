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
