//===========================================Interpretação de código==============================================================

/* 
1) Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Resposta: O primeiro console irá retornar a variável b que possui o valor 10. Já o segundo console irá retornar as variáveis a e b que possuem o valor 10 e 5, respectivamente.

*/

/*

2) Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

Resposta: O console irá apontar um erro porque a variável c não foi definida.

*/

/* 

3) Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

Resposta: p = horasTraalhadasPordia, t = valorRecebidoPorDia

*/

//===========================================Escrita de código==============================================================

//Exercício 1
/* let nome;
let idade;

console.log(typeof nome, typeof idade);

//Foi impresso undefined porque as variáveis só foram declaradas e não possuem nenhum valor definido.

nome = prompt("Digite seu nome: ");
idade = Number(prompt("Digite sua idade: "));

//Notei que os valores da variáveis passaram a ser: nome = string e idade = number.

console.log(`Olá ${nome}, você tem ${idade} anos.`); */

//Exercício 2
const pergunta1 = "Você gosta de pizza?";
const pergunta1Resposta = prompt(pergunta1);
const pergunta2 = "Você gosta de macarrão?";
const pergunta2Resposta = prompt(pergunta2);
const pergunta3 = "Você gosta de arroz?";
const pergunta3Resposta = prompt(pergunta3);

console.log(pergunta1, pergunta1Resposta);
console.log(pergunta2, pergunta2Resposta);
console.log(pergunta3, pergunta3Resposta);

//Exercício 3
/* let cao = "Mingau";
let gato = "Bidu";
let auxiliar;

auxiliar = cao;
cao = gato;
gato = auxiliar;

console.log(`O novo valor de cao é: ${cao}`)
console.log(`O novo valor de gato é: ${gato}`) */

//Exercício 4, 5, 6 e 7
/* const resposta = confirm("Gostaria de ir para o site da Labenu?");
const frase = "Você está no site da Labenu";

console.log(resposta);

alert(frase);

const nomeDoUsuario = prompt("Qual seu nome?");
let ideiaDoDia = prompt("Qual a sua ideia para hoje?");
let diaAtual = prompt("Qual a data de hoje?");

console.log(`Olá ${nomeDoUsuario}, a sua ideia para o dia ${diaAtual} é ${ideiaDoDia}`)

ideiaDoDia = "Limpar o código";
diaAtual = new Date("2022/08/11");

console.log(`Olá ${nomeDoUsuario}, a sua ideia para o dia ${diaAtual} é ${ideiaDoDia}`) */

//Challenge
/* const firstNumber = Number(prompt("Digite o primeiro número: "));
const secondNumber = Number(prompt("Digite o segundo número: "));

const sumAndMultiplication = (a, b) => {
    console.log(`O primeiro número somado ao segundo número resulta em: ${a + b}`);
    console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${a * b}`);
}

sum(firstNumber, secondNumber); */