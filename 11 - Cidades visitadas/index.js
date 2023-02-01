/* Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele 
já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e 
o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até 
que a resposta seja não. No fim, o programa deve exibir o nome do turista,
quantas e quais cidades ele visitou.*/

const turista = prompt("Eai Turista, qual o seu nome?");

let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não");

while (continuar === "Sim") {
  let cidade = prompt("Qual cidade você visitou?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não");

  if (continuar === "Não") {
    alert("Obrigado por participar de nossa pesquisa. ");
  }
}

alert(
  "Turista: " +
    turista +
    "\n\n" +
    "Cidades Visitadas: \n\n" +
    cidades +
    "\n" +
    "Quantidade de cidades visitadas: " +
    contagem
);
