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
