const value = prompt("Por favor Insira um valor em metros para conversão. ");

const medida = prompt(
  "Para qual tipo de medida você deseja converter?  \n\nA) Milímetros (mm) \nB) Centímetros (cm) \nC) Decímetros (dm) \nD) Decâmetros (dam) \nE) Hectômetros (hm) \nF) Quilômetros (km)"
);

switch (medida) {
  case "A":
    alert(
      "Conversão em progresso: \n\nO resultado é: \n" + value * 1000 + " mm "
    );
    break;
  case "B":
    alert(
      "Conversão em progresso: \n\nO resultado é: \n" + value * 100 + " cm "
    );
    break;
  case "C":
    alert("Conversão em pogresso: \n\nO resultado é: " + value * 10 + " dm ");
    break;
  case "D":
    alert("Conversão em pogresso: \n\nO resultado é: " + value * 0.1 + " dam ");
    break;
  case "E":
    alert(
      "Conversão em progresso: \n\nO resultado é: " + value * 0.01 + " hm "
    );
    break;
  case "F":
    alert(
      "Conversão em progresso: \n\nO resultado é: " + value * 0.001 + " km "
    );
  default:
    alert("Por favor inserir uma resposta válida, se atentar ao capslock.");
}
