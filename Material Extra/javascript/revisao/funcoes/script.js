//===========================================Interpretação de código==============================================================

/*
1) Leia o código abaixo


function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


a) O que vai ser impresso no console?

Resposta:
1 console: 10
2 console: 50

b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

Resposta: Não mostraria nada.

2) Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

Resposta: A função testa se existe a palavra cenoura no texto digitado pelo usuário

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura
     ii.  CENOURA é bom pra vista
     iii. Cenouras crescem na terra

Resposta: true / false / false

*/

//===========================================Escrita de código==============================================================

//Exercício 1

/* const mensagem = (nome, idade, cidade, profissao) => {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`);
} */

//Exercício 2
/* const sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 3));

const firstGreater = (a, b) => {
  return a >= b;
};

console.log(firstGreater(2, 3));

const pair = (a) => {
  return a % 2 === 0;
};

console.log(pair(3));

const string = (msg) => {
    console.log(msg.length + " " + msg.toLowerCase());
}

string("Ruan"); */

//Exercício 3
/* const numberOne = Number(prompt("Write a number"));
const numberTwo = Number(prompt("Write another number"));

const sum = (a, b) => {
  return a + b;
};

const subtraction = (a, b) => {
  return a - b;
};

const multiplication = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

console.log(
  `Números inseridos: ${numberOne} e ${numberTwo}\nSoma: ${sum(
    numberOne,
    numberTwo
  )}\nSubtração: ${subtraction(
    numberOne,
    numberTwo
  )}\nMultiplicação: ${multiplication(
    numberOne,
    numberTwo
  )}\nDivisão: ${division(numberOne, numberTwo)}`
); */

//Challenge

//Parte 1
/* const param = (param) => {
  console.log(param);
};

const sum = (a, b) => {
  param(a + b);
};

sum(2, 4); */

//Parte 2
const valueOne = 3
const valueTwo = 5

const hipotenusa = (a, b) => {
  return Math.sqrt(a**2 + b**2).toFixed(2);
}

console.log(hipotenusa(valueOne, valueTwo));