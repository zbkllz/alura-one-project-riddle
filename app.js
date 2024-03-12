let drawnNumberList = [];
let drawnLimit = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;

function showTextOnScreen(tag, text) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
}

function showInitialMsg() {
  showTextOnScreen("h1", "Jogo do Número Secreto");
  showTextOnScreen("p", "Escolha um número entre 1 e 10");
}

showInitialMsg();

function verifyGuess() {
  let guess = document.querySelector("input").value;
  // console.log(guess == secretNumber);

  if (guess == secretNumber) {
    showTextOnScreen("h1", "Acertou");
    let nOfAttempts = attempts > 1 ? "tentativas" : "tentativa";
    let guessedRight = `Isso aí! Você descobriu o número secreto com ${attempts} ${nOfAttempts}!`;
    showTextOnScreen("p", guessedRight);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (guess > secretNumber) {
      showTextOnScreen("h1", "Errou");
      showTextOnScreen("p", `O numero secreto é menor que ${guess}`);
    } else {
      showTextOnScreen("h1", "Errou");
      showTextOnScreen("p", `O numero secreto é maior que ${guess}`);
    }
    attempts++;
    cleanField();
  }
}

function generateRandomNumber() {
  let chosenNumber = parseInt(Math.random() * drawnLimit + 1);
  let nOfElementsList = drawnNumberList.length;
  if (nOfElementsList == drawnLimit) {
    drawnNumberList = [];
  }
  if (drawnNumberList.includes(chosenNumber)) {
    return generateRandomNumber();
  } else {
    drawnNumberList.push(chosenNumber);
    return chosenNumber;
  }
}

function cleanField() {
  guess = document.querySelector("input");
  guess.value = "";
}

function resetGame() {
  secretNumber = generateRandomNumber();
  cleanField();
  attempts = 1;
  showInitialMsg();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
