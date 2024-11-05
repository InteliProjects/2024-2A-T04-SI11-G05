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
