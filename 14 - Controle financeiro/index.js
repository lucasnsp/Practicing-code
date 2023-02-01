/* 
## Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível 
e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma 
opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade
a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a 
quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, 
porém subtraindo o valor. A opção de sair deve encerrar o programa.
*/
let saldo = parseFloat(prompt("Favor inserir o saldo disponivel"));
let options = "";

do {
  options = prompt(
    "Favor escolher uma das opções:\n \na) Depositar \nb) Sacar \nc) SAIR"
  );
  switch (options) {
    case "a":
      let depositar = parseFloat(prompt("Quanto você deseja despositar?"));
      saldo += depositar;
      alert("Você depositou " + depositar + " e ficou com " + saldo);
      break;
    case "b":
      let sacar = parseFloat(prompt("Quanto você deseja sacar?"));
      saldo -= sacar;
      alert("Você sacou " + sacar + " e ficou com " + saldo);
      break;
    case "c":
      alert(
        "Encerrando o programa, tenha um bom dia! \n\n Saldo atualizado: " +
          saldo
      );
  }
} while (options !== "c");
