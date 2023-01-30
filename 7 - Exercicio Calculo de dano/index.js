/*const personagemDeAta = prompt("Insira o nome do personagem de ataque")
const poderDeAta = prompt("Insira o poder de ataque do seu personagem")

const personagemDeDef = prompt("Insira o nome do personagem de defesa")
const pontosDeVidaDef = prompt("Insira os pontos de vida do personagem de defesa")
const poderDeDef = prompt("Insira o poder de defesa do personagem")
const escudo = prompt("Deseja que seu personagem de defesa tenha um escudo?")

if(poderDeAta > poderDeDef && personagemDeDef 
*/

const atacante = prompt("Qual é o nome do personagem atacante?");
const poderDeAtaque = prompt("Qual é o seu poder de ataque?");

const defensor = prompt("Qual é o nome do personagem defensor?");
let pontosDeVida = prompt("Quantos pontos de vida ele possui?");
const poderDeDefesa = prompt("Qual é o seu poder de defesa?");
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
