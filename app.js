alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 4;
let chute = prompt("Escolha um número entre 1 e 10");





if (numeroSecreto == chute) {
  alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);

} else {
  if (chute > numeroSecreto) {
    alert(`O numero secreto é menor que o ${chute}`);
  } else {
    alert(`O numero secreto é menor que o ${chute}`);
  }
}
