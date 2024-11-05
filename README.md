# Inteli - Instituto de Tecnologia e Liderança

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="https://capitaldigital.com.br/wp-content/uploads/2021/04/logo-inteli-300x134-1.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Previsão de Fraudes do consumo de água

## G5 - De quem é o gato?
### Integrantes:
- <a href="https://www.linkedin.com/in/daniel-barzilai-061036234/">Daniel Barzilai</a>
- <a href="https://www.linkedin.com/in/lucas-conti-pereira-3410b1233/">Lucas Conti</a>
- <a href="https://www.linkedin.com/in/matheus-fidelis-dos-santos-pinto-680520232/">Matheus Fidelis</a>
- <a href="https://www.linkedin.com/in/michel-mansur-26006a219/">Michel Mansur</a>
- <a href="https://www.linkedin.com/in/rodrigo-campos-8b70191ab/">Rodrigo Campos</a>
- <a href="https://www.linkedin.com/in/uelitonrocha/">Ueliton Rocha</a>

## Descrição do Módulo

O objetivo principal do projeto é desenvolver um modelo de Machine Learning capaz de determinar a probabilidade de um comportamento de consumo de água ser fraudulento. Isso será feito considerando dados históricos de consumo e, possivelmente, a influência de variáveis externas como índices macroeconômicos, climáticos e geográficos.

O problema que o projeto visa resolver é o desafio das fraudes no consumo de água, que afetam tanto o faturamento da empresa quanto a qualidade do serviço de abastecimento. As fraudes podem ocorrer através da manipulação de hidrômetros, ligações clandestinas ou outras formas de adulteração.


## Conteúdo do Módulo

Os artefatos entregues em cada sprint:

- <a href="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/tree/main/documents/Sprint%201">Sprint 1</a> (Semana 2)
    - Canvas Proposta de Valor e Matriz de Risco;
    - Análise e Preparação de Dados;
    - Personas e AntiPersonas.

- <a href="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/tree/main/documents/Sprint%202">Sprint 2</a> (Semana 4)
    - Modelo de Rede Neural;
    - User Stories (Privacy by Design).
      
- <a href="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/tree/main/documents/Sprint%203">Sprint 3</a> (Semana 6)
    - Análise PESTEL e Business Model Canvas;
    - Protótipo de Alta Fidelidade;
    - Otimização de Modelo.
      
- <a href="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/tree/main/documents/Sprint%204">Sprint 4</a> (Semana 8)
    - Avaliação das Métricas;
    - Front-End (versão inicial).
      
- <a href="https://github.com/Inteli-College/2024-2A-T04-SI11-G05/tree/main/documents/Sprint%205">Sprint 5</a> (Semana 10)
    - Avaliação das Métricas;
    - Disponibilização do Modelo;
    - Front-End (versão final);
    - Análise Financeira do Projeto;
    - Documentação Final;
    - Apresentação Final.
## Recursos

Neste repositório, você encontrará os seguintes recursos:

- Documentos: Informações sobre o projeto, como explicação e condução de raciocínio.
- Apresentações: Todas as apresentações realizadas com o parceiro durante as 5 Sprints.
- Código Fonte: Todos os notebooks usados para treinamento do modelo, avaliação, assim como a interface e API.

## Requisitos
Para participar deste módulo, você precisará:

- Acesso à plataforma de ensino da Faculdade Inteli.
- Computador com acesso à internet.
- Software e ferramentas específicos mencionados nas instruções do módulo.

## 📁 Estrutura de pastas

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

assets: aqui estão os arquivos relacionados a parte gráfica do projeto, as imagens e vídeos que os representam.

src: aqui estão todos os arquivos de parte de código, incluindo notebooks, front-end e back-end 

artefatos: aqui estão todos os documentos do projeto.

README.md: arquivo que serve como guia e explicação geral sobre o projeto.
Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

      2024-2A-T04-SI11-G05/ 
      │
      ├── src/                    # Aqui estão todos os códigos e notebooks do projeto.
      │   ├── backend/
      |   |   └── ...          
      │   ├── frontend/  
      |   |   └── ...  
      │   └── notebooks/
      │       ├── Sprint 1/
      |       |   └── ...  
      │       └── Sprint 2/
      |       └── ...  
      │
      ├── documents/              # Aqui estão todos os documentos/entregáveis/apresentações do projeto dividos em Sprints .
      |   ├── Apresentações/
      │   └── Sprint 1/
      │   └── Sprint 2/
      |   └── ...  
      |     
      ├── assets/                 # Aqui estão os elementos gráficos dos documentos e as imagens que os representam.
      |
      └── readme

## 🔧 Instalação

nodejs v18.13.0
Python 3.11.3

## 💻 Configuração de Desenvolvimento

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

Após rodar este comando, o terminal irá trazer um link para a janela na qual a interface irá funcionar.


Um csv que pode ser utilizado para teste da aplicação é o que está presente na pasta compartilhada do seguinte link do drive:

https://drive.google.com/drive/u/1/folders/0AFkDn1NCbpojUk9PVA

É necessário baixar o arquivo "SPRINT4" e fazer upload dele na página inicial da aplicação.


&emsp;&emsp;


## 🗃 Histórico de lançamentos

* 0.5.0 - 11/09/2024
    * Quinta entrega: Modelo integrado ao frontend e disponível. 
* 0.4.0 - 27/08/2024
    * Quarta entrega: Frontend e avaliação das métricas do modelo.
* 0.3.0 - 13/08/2024
    * Terceira entrega: Mockup e otimização do modelo.
* 0.2.0 - 30/08/2024
    * Segunda entrega: Modelo de rede neural inicial/documentação.
* 0.1.0 - 16/08/2024
    * Primeira entrega: Entendimento do usuário/negócio análise e preparação dos dados


## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Inteli-College/2024-2A-T04-SI11-G05">ANÁLISE COMPORTAMENTAL DE USUÁRIO EM INTERFACES DIGITAIS</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/InteliProjects">Inteli</a>, 

<a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/Inteli-College/2024-1B-T04-SI10-G05">G5</a>: 
<a href="https://www.linkedin.com/in/daniel-barzilai-061036234/">Daniel Barzilai</a>,
<a href="https://www.linkedin.com/in/lucas-conti-pereira-3410b1233/">Lucas Conti</a>,
<a href="https://www.linkedin.com/in/matheus-fidelis-dos-santos-pinto-680520232/">Matheus Fidelis</a>,
<a href="https://www.linkedin.com/in/michel-mansur-26006a219/">Michel Mansur</a>,
<a href="https://www.linkedin.com/in/rodrigo-campos-8b70191ab/">Rodrigo Campos</a>,
<a href="https://www.linkedin.com/in/uelitonrocha/">Ueliton Rocha</a>,
is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>


## 🎓 Referências
<a href="https://www.ijraset.com/research-paper/data-mining-based-model-for-detection-of-fraudulent-behaviour-in-water-consumption">A Data Mining Based Model for Detection of Fraudulent Behaviour in Water Consumption - 2022 - Alavala Sathwik, B. Yugendar Nayak, Dr. Y. Srinivasulu</a> 

<a href="https://www.researchgate.net/publication/314491169_Smart_Meter_Data_Analytics_for_Optimal_Customer_Selection_in_Demand_Response_Programs">Smart Meter Data Analytics for Optimal Customer Selection in Demand Response Programs - 2016- Timothy Eveleigh, Madeline Martinez-Pabon</a>


<a href="https://revista.cgu.gov.br/Revista_da_CGU/article/download/531/368/3667">Inteligência artificial no combate à  fraude e corrupção: A experiência da  Controladoria Geral do Município do Rio  de Janeiro, 2023 - Dalton Henrique Mota Ibere Gilson e Gustavo de Avellar Bramili</a>

