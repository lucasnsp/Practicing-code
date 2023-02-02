/*
## Robô da Tabuada

Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20).
O programa deve começar pedindo o número a ser usado nos cálculos e então salvar 
todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável 
do tipo string. Depois o programa deve exibir esses resultados e finalizar.
*/

const number = parseFloat(
  prompt("Insira o numero que deseja saber a tabuada do 1 ao 20. ")
);

let resultado = "";

for (
  let numeroMultiplicacao = 1;
  numeroMultiplicacao <= 20;
  numeroMultiplicacao++
) {
  resultado +=
    " -> " +
    number +
    " x " +
    numeroMultiplicacao +
    " = " +
    number * numeroMultiplicacao +
    "\n";
}

alert(" Resultado da tabuada de " + number + ":\n\n" + resultado);
