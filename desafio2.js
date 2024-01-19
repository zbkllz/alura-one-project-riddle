//* 1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

alert("Que dia é hoje?");
let inserirDia = prompt("Insira o dia da semana");

//Primeiro montei um array list (representado com colchete) pra separar os dias da semana 'as a string'

let diasUteis = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

let fimDeSemana = ["Sabado", "Domingo"];

//Depois associei o método includes para checar se o que foi inserido no prompt corresponde aos itens da lista que eu selecionei. Também incrementei o retorno da condicional de modo a informar se foi inserido um dia inválido

if (diasUteis.includes(inserirDia)) {
  alert("Boa semana!");
} else if (fimDeSemana.includes(inserirDia)) {
  alert("Bom fim de semana!");
} else {
  alert("Insira uma data válida");
}

//----------------------------------------------------------------

//* 2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let chute = prompt("Digite um número");

if (chute >= 0) {
  alert("O número é positivo");
} else {
  alert("O número é negativo");
}

//----------------------------------------------------------------

//* 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

// let pontuacaoDoJogo = prompt("Insira o número premiado");

if (pontuacaoDoJogo >= 100) {
  alert("Parabéns, vocẽ venceu!");
} else {
  alert("Tente novamente para ganhar");
}

//----------------------------------------------------------------

//* 4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldoDisponivel = 1000;

//toFixed acrescenta casas depois da virgula

alert(`Seu saldo disponivel é R$ ${saldoDisponivel.toFixed(2)} reais`);

//----------------------------------------------------------------

//* 5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let inserirNome = prompt("Insira seu nome");
alert(`Seja bem vindo(a) ${inserirNome}!`);
