//* Criar uma função que exibe "Olá, mundo!" no console.
function hello(){
  console.log("Olá, mundo!"); 
}
hello();

//* Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function helloName(name){
  console.log(`Olá, ${name}!`);
}

//* Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function doubleX(){
  return x * 2;
}

let x = doubleX(3);

console.log(x);

//*Criar uma função que recebe três números como parâmetros e retorna a média deles.

function average(n1,n2,n3) {
  return (n1+n2+n3)/3;
}

let result = average(2,4,6);

console.log(result);

//* Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function returnBigger(n1, n2){
  return a > b ? a: b;
}

let bigger = returnBigger(6,18);

console.log(bigger);

//* Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function nSqr(n){
  return (n*n)
}
let nSqrResult = nSqr(2);
console.log(nSqrResult);