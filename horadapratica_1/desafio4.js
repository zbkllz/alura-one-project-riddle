// *Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

let hello = "Seja bem-vindo(a)";
console.log(hello);

//* Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = "Larissa";
console.log(`Olá, ${nome}`);

// *Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

alert(`Olá, ${nome}`);

// *Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let respostaLinguagem = prompt(
  "Qual a linguagem de programação que você mais gosta?"
);
console.log(respostaLinguagem);

//* Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 5;
let valor2 = 12;

let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);

// *Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let resultadoSubtracao = valor1 - valor2;

console.log(
  `A diferença entre ${valor1} e ${valor2} é igual a ${
    Math.max(0, resultadoSubtracao) - parseInt(resultadoSubtracao, 10)
  }`
);

// *Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idadeUser = prompt("Digite sua idade");

if (idadeUser >= 18) {
  console.log(`Usuário é maior de idade`);
} else {
  console.log(`Usuário é menor de idade`);
}

// *Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite um numero");

let diferenca = numero > 0 ? "positivo" : numero < 0 ? "negativo" : "zero";

if (numero !== 0) {
  console.log(`O número é ${diferenca}`);
} else {
  console.log(`O número é zero`);
}

// *Use um loop while para imprimir os números de 1 a 10 no console.

let log = 0;

while (log <= 10){
  console.log(log);
  log++
}

// *Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = prompt("Digite uma nota de 0 a 10");

if(nota >= 7){
  console.log("Aprovado")
}else{
  console.log("Reprovado");
}

// *Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let random = Math.random();
console.log(random);

// *Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let random2 = parseInt(Math.random()*10);
console.log(random2);

// *Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let random3 = parseInt(Math.random()*1000);
console.log(random3);
