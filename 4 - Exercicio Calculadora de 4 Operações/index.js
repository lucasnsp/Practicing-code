/*
let n1 = prompt("Insira o primeiro valor");
let n2 = prompt("Insira o segundo valor");

n1 = parseFloat(n1);
n2 = parseFloat(n2);

alert(
  "Valores sendo gerados em sequencia: Soma, Subtração, Multiplicação e Divisão\n" +
    "\nSoma: "(n1 + n2) +
    "\nSubtração: "(n1 - n2) +
    "\nMultiplicação: "(n1 * n2) +
    "\nDivisão: "(n1 / n2)
);
*/

const entrada1 = prompt("Informe o primeiro número: ");
const entrada2 = prompt("Informe o segundo número: ");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultados: \n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);
