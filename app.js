let secretNumber = generateRandomNumber();

function showTextOnScreen(tag, text){
  let field = document.querySelector(tag);
  field.innerHTML = text;
}

showTextOnScreen('h1','Jogo do Número Secreto');
showTextOnScreen('p','Escolha um número entre 1 e 10');

function verifyGuess(){
  let guess = document.querySelector('input').value;
  console.log(guess == secretNumber);
};


function generateRandomNumber(){
  return parseInt(Math.random() * 10 + 1)
}