# Documentação Técnica do Front-End do Projeto

## Introdução
Este documento detalha a estrutura, organização e as tecnologias utilizadas no desenvolvimento do front-end do projeto, implementado com React e utilizando a biblioteca de componentes Shadcn, estilizada com Tailwind CSS. O foco principal desta implementação é garantir uma interface clara, intuitiva e explicável, de modo que os usuários compreendam como e por que certos resultados foram obtidos.

## Estrutura do Projeto

### 1. Diretórios

#### 1.1 node_modules/
- **Descrição:** Diretório onde estão todas as dependências do projeto instaladas via npm. Inclui bibliotecas essenciais como React, Tailwind CSS, Shadcn, entre outras.
- **Função:** Gerenciar as dependências do projeto, permitindo que as funcionalidades externas sejam incorporadas ao código.

#### 1.2 public/
- **Descrição:** Diretório para arquivos estáticos, como imagens e outros recursos que não são processados diretamente pelo JavaScript.
- **Função:** Expor os arquivos estáticos diretamente para a aplicação, garantindo carregamento rápido e fácil acesso.

#### 1.3 src/
- **Descrição:** Diretório contendo todo o código-fonte da aplicação.
  - **Estrutura:**
    - `App.tsx`: Ponto de entrada do React. Este arquivo coordena a renderização dos componentes principais da aplicação.
    - `components/`: Contém componentes reutilizáveis que seguem o design system adotado, permitindo modularidade e manutenibilidade.
    - `pages/`: Diretório que agrupa as diferentes páginas da aplicação, organizadas por rotas definidas no `routes.tsx`.
    - `lib/`: Contém utilitários e funções auxiliares para lógica comum em várias partes do projeto.

### 2. Arquivos de Configuração

#### 2.1 package.json
- **Descrição:** Arquivo que especifica as dependências e scripts utilizados no projeto.
- **Função:** Gerenciar as bibliotecas e scripts, facilitando o desenvolvimento e deploy da aplicação.

#### 2.2 vite.config.ts
- **Descrição:** Configuração do bundler Vite, utilizado para otimizar o desenvolvimento, compilação e empacotamento do código para produção.
- **Função:** Configurar o comportamento da aplicação durante o desenvolvimento e build.

#### 2.3 tailwind.config.js
- **Descrição:** Arquivo de configuração para o Tailwind CSS, personalizando temas, cores e estilos específicos para a aplicação.
- **Função:** Definir as regras de design de forma centralizada, garantindo consistência visual.

#### 2.4 tsconfig.json
- **Descrição:** Arquivo que define as configurações do TypeScript, especificando como o código será transpilado e garantindo segurança com tipagem estática.
- **Função:** Ajustar o comportamento do TypeScript no projeto.

## Design System Utilizado
A implementação do front-end segue rigorosamente o design system fornecido pela biblioteca Shadcn. Esse sistema de componentes foi escolhido por ser compatível com Tailwind CSS, o que permite uma estilização eficiente e consistente.

## Exemplos de Implementação

### Componentes

- **Botões:** Utilizamos componentes de botão padronizados do Shadcn, customizados via Tailwind para se adequarem à paleta de cores do projeto.
- **Inputs e Forms:** O formulário é construído com campos de entrada fornecidos pelo Shadcn, garantindo acessibilidade e responsividade em todos os dispositivos.

### Consistência com Tailwind CSS
Tailwind CSS foi integrado para definir espaçamentos, margens e tipografia de forma modular, promovendo a criação de layouts fluidos e fáceis de manter.

## Padrões de Explicabilidade na Interface
A explicabilidade foi um ponto fundamental no desenvolvimento das telas. Cada funcionalidade implementada busca fornecer ao usuário final feedback claro e conciso sobre os processos internos do sistema. A explicação sobre os resultados ou recomendações é visível diretamente nas telas, garantindo que o usuário entenda as ações realizadas pelo sistema.

### Exemplos de Explicabilidade
- **Mensagem de Feedback:** Quando uma ação é tomada (como clicar em um botão de submissão), o sistema exibe uma mensagem indicando o progresso ou resultado da ação (e.g., "Dados enviados com sucesso", ou "Erro: tente novamente").
- **Ferramenta de Ajuda:** Ícones de ajuda foram adicionados ao lado de elementos complexos para fornecer mais detalhes sobre seu funcionamento.

## Tecnologias e Ferramentas Utilizadas

1. **React**
   - **Função:** Biblioteca principal para construção da interface, permitindo a criação de componentes reutilizáveis e interativos.
   
2. **TypeScript**
   - **Função:** Linguagem utilizada para adicionar tipagem estática ao JavaScript, aumentando a segurança do código.
   
3. **Vite**
   - **Função:** Bundler moderno que otimiza o processo de desenvolvimento, garantindo builds rápidos e eficientes.
   
4. **Tailwind CSS**
   - **Função:** Framework CSS utilizado para estilização da aplicação, permitindo a criação de layouts rápidos e consistentes.
   
5. **Shadcn**
   - **Função:** Biblioteca de componentes que segue o design system, facilitando a implementação de uma interface elegante e funcional, com integração nativa ao Tailwind CSS.

## Exemplos de Telas Implementadas

### Tela de Login
- Exibe campos de entrada para e-mail e senha.
- Integra explicabilidade através de mensagens de erro claras e indicativos de preenchimento correto.

### Tela de Dashboard
- Exibe informações-chave para o usuário de forma centralizada.
- Utiliza gráficos e ícones para explicar o significado dos dados apresentados, promovendo clareza e transparência.
