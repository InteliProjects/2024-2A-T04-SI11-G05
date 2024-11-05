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


