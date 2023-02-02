// inicializaçõa; condição; finalização
// let indice = 0;

/*for (alert("Inicializando o for"); indice <= 10; indice++) {
  alert("indice = " + indice);
}
*/

// Podemos fazer da seguinte forma também.
/*for (
  alert("Inicializando o for");
  indice <= 10;
  alert("Finalizando um bloco de repetição")
) {
  alert("indice = " + indice);
  indice++;
}
*/

// A inicialização e finalização são opcionais só não podemos esquecer do ;
// exemplo:

/*for (; indice <= 10; ) {
  alert("indice = " + indice);
  indice++;
}
*/

// Exemplo com uma string:

let nome = "Isaac"; // tamanho 5 -> 0, 1, 2, 3 ,4

for (let indice = 0; indice <= nome.length; indice++) {
  alert(nome[indice]);
}
