//===========================================Interpretação de código==============================================================

/*

1) O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

Resposta: O código vai somar o valor de i a variável valor a cada repetição do laço

*/

/*

2) Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) O que vai ser impresso no console?

Resposta: Será impresso apenas os números maiores que 18.

b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

Resposta: Não, teria que ser usado o for...in...

3) Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

Resposta: ****

*/

//===========================================Escrita de código==============================================================

//Exercício 1
/* const qtdEstimacao = Number(prompt("Quantos bichos de estimação você tem?"));
const nomes = [];

if (qtdEstimacao < 0) console.log("Digite um valor acima de 0");
else if (qtdEstimacao === 0) console.log("Que pena! Você pode adotar um pet!");
else {
  for (let i = 0; i < qtdEstimacao; i++) {
    nomes.push(prompt("Digite o nome do seu pet: "));
  }

  console.log(nomes);
} */

//Exercício 2
/* const arrayOriginal = [1, 2, 3, 4, 5];

//a) Escreva um programa que imprime cada um dos valores do array original.
const imprimeValorOriginal = (arr) => {
    for(let i = 0; i < arr.length; i++) { 
        console.log(arr[i]);
    }
}

imprimeValorOriginal(arrayOriginal);

//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
const imprimeValorOriginalDivididoPorDez = (arr) => {
    for(let i = 0; i < arr.length; i++) { 
        console.log(arr[i] / 10);
    }
}

imprimeValorOriginalDivididoPorDez(arrayOriginal);

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
const arrayCopia = [];

const novoArray = (arr) => {
    for (let i = 0; i < arr.length; i++) { 
        if(arr[i] % 2 === 0) arrayCopia.push(arr[i]);
    }

    return arrayCopia;
}

console.log(novoArray(arrayOriginal));

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
const arrayString = [];

const novoArrayString = (arr) => {
    for (let i = 0; i < arr.length; i++) { 
        arrayString.push(`O elemento do índex ${i} é: ${arr[i]}`);
    }

    return arrayString;
}

console.log(novoArrayString(arrayOriginal));

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.
let menor = Infinity;
let maior = 0;

const novoArrayMenorMaior = (arr) => { 
    for (let i = 0; i < arr.length; i++) { 
        if(arr[i] < menor) menor = arr[i];
        if(arr[i] > maior) maior = arr[i];
    }

    return `Menor: ${menor}\nMaior: ${maior}`;
}

console.log(novoArrayMenorMaior(arrayOriginal)); */

//Desafios

//Parte 1
/* alert("Vamos jogar!");
const number = Number(prompt("write a number"));
let numberTwo = Number(prompt("Write a new number"));
let cont = 0;

while (numberTwo !== number) {
  if (numberTwo < number) {
    console.log(`O número chutado foi: ${numberTwo}\nErrrrrrrrou, é maior`);
    cont += 1;
  } else if (numberTwo > number) {
    console.log(`O número chutado foi: ${numberTwo}\nErrrrrrrrou, é menor`);
    cont += 1;
  }

  numberTwo = Number(prompt("Write a new number"));
}

cont += 1;
console.log(`O número chutado foi: ${numberTwo}\nAcertou!!`);
console.log(`O número de tentativas foi: ${cont}`); */

//Parte 2
alert("Vamos jogar!");
const number = Math.floor(Math.random() * 100) + 1;
console.log(number);
let numberTwo = Number(prompt("Write a number"));
let cont = 0;


while (numberTwo !== number) {
  if (numberTwo < number) {
    console.log(`O número chutado foi: ${numberTwo}\nErrrrrrrrou, é maior`);
    cont += 1;
  } else if (numberTwo > number) {
    console.log(`O número chutado foi: ${numberTwo}\nErrrrrrrrou, é menor`);
    cont += 1;
  }

  numberTwo = Number(prompt("Write a number"));
}

cont += 1;
console.log(`O número chutado foi: ${numberTwo}\nAcertou!!`);
console.log(`O número de tentativas foi: ${cont}`);

//Precisei apenas trocar o prompt pela função Math.random fornecida pelo próprio javascript.