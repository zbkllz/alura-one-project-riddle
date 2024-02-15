// alert("Boas vindas ao jogo do número secreto");
// let numeroMaximo = 5000;
// //numero aleatório e inteiro entre 1 e 10 onde o 10 corresponde ao range e o +1 foi adicionado pq o padrão é 0-99)
// let numeroSecreto = parseInt(Math.random()*numeroMaximo+1);
// let chute;
// let tentativas = 1;

// //enquanto o chute não for o numero secreto
// while (chute != numeroSecreto) {
//   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
//   //se chute = numeroSecreto
//   if (chute == numeroSecreto) {
//     break;
//   } else {
//     if (chute > numeroSecreto) {
//       alert(`O numero secreto é menor que o ${chute}`);
//     } else {
//       alert(`O numero secreto é maior que o ${chute}`);
//     }
//     //tentativas = tentativas+1
//     tentativas++;
//   }
// }
// //operador ternario
// let flexaoDeNumero = tentativas > 1 ? 'tentativas' : 'tentativa';
//   alert(
//     `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${flexaoDeNumero}`
//   );

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
