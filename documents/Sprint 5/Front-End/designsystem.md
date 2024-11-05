# Doc front

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
