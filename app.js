alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
let chute;
let tentativas = 1;

//enquanto o chute não for o numero secreto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");
  //se chute = numeroSecreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que o ${chute}`);
    } else {
      alert(`O numero secreto é maior que o ${chute}`);
    }
    //tentativas = tentativas+1
    tentativas++;
  }
}
//operador ternario
let flexaoDeNumero = tentativas > 1 ? 'tentativas' : 'tentativa';
  alert(
    `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${flexaoDeNumero}`
  );

// if (tentativas > 1) {
//   alert(
//     `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
//   );
// } else {
//   {
//     alert(
//       `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`
//     );
//   }
// }
