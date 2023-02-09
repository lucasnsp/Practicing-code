const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// ADICIONANDO ELEMENTOS
// push: Adiciona um elemento no final do array e devolve o novo tamanho do array

let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array

tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

// REMOVENDO ELEMENTOS
// pop: Remove um elemento no final do array e devolve o elemento removido

let elementoRemovido = arr.pop();

console.log(arr);
console.log(elementoRemovido);

// shift: Remove um elemento no começo do array e devolve o elemento removido

elementoRemovido = arr.shift("Boromir");
console.log(arr);
console.log(elementoRemovido);

// PESQUISAR POR UM ELEMENTO
// includes: Verifica se um certo elemento está presente no array

const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array

const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortando e Concatenando (JUNTAR E CORTAR)
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original

const hobbits = arr.slice(0, 4);

// Também pode ser usado com números negativos referenciar o final do array

const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);
