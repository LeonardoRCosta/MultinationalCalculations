# MultinationalCalculations

> Uma empresa multinacional está buscando criar um programa que poupe o tempo e substitua os cálculos manuais do coeficiente de trabalho, imposto, gratificação e etc dos funcionários. Neste cenário, você deve criar um algoritmo que recebe o salário mínimo, o turno do trabalho, a categoria de trabalho e o número de horas trabalhadas no mês de um funcionário.

## ❓ Case para o desafio

- Salário mínimo deve variar de acordo com o cargo:
  - Gerar um valor aleatório
  - Operário: Entre 750 até 2500
  - Gerente: Entre 1400 até 4600
- Você deve calcular e mostrar:
  - O coeficiente de trabalho, conforme a tabela abaixo:
    | Turno de Trabalho | Valor do Coeficiente  |
    | ----------------- | --------------------- |
    | Matutino          | 13% do salário mínimo |
    | Vespertino        | 4% do salário mínimo  |
    | Noturno           | 8% do salário mínimo  |
  - O valor do salário bruto (Cálculo: Número de Horas Trabalhadas X Valor do Coeficiente de Trabalho)
  - O imposto, conforme a tabela abaixo:
    | Categoria de Trabalho | Salário Bruto | Imposto sobre o Salário Bruto |
    | --------------------- | ------------- | ----------------------------- |
    | Operário              | ≥ R$ 945,00   | 13%                           |
    |                       | < R$ 945,00   | 7%                            |
    | Gerente               | ≥ R$ 1520,00  | 15%                           |
    |                       | < R$ 1520,00  | 10%                           |
  - A gratificação, conforme as regras abaixo:
      <aside>
      ✏️ Caso o funcionário preencha **todos** os **requisitos** abaixo, ele deve receber uma gratificação de R$ 1200,00; caso contrário, deve ser de R$ 465,00.
      
      **Requisitos:
      - Turno:** Matinal
      **- Número de horas trabalhadas:** Superior à 80 horas.
      
      </aside>

  - O auxílio alimentação, conforme as regras abaixo:
      <aside>
      ✏️ Se o Operário preencher os **requisitos** abaixo, seu auxílio alimentação será de metade do seu salário bruto, caso contrário, será de um terço do seu salário bruto:
      
      **Requisitos:
      - Categoria:** Operário
      **- Coeficiente:** ≥ 25
      
      </aside>

  - O salário líquido (Cálculo: Salário Bruto - Imposto + Gratificação + Auxílio Alimentação)
- Utilize TypeScript.
- Deve conter testes unitários para validar os cálculos listados acima.
  [Testes Unitários](https://www.notion.so/Testes-Unit-rios-b31647b73c8b45d99deff35cff5539ce)

### **[💻](https://emojiterra.com/pt/pc/) Tecnologias**

- Utilizar TypeScript;
- Testes unitários com Jest
- Utilizar POO;

## ❌ Restrições

- Utilizar Libs;
- Copiar código.

## ❓ Como Utilizar

```javascript
// install dependencies
$ yarn

// run
$ yarn dev
```
