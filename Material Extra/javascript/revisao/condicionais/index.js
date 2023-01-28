//===========================================Interpretação de código==============================================================

/* 

1) Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza?

Resposta: Testa se o número é par.

b) Para que tipos de números ele imprime no console "Passou no teste"? 

Resposta: Números pares.

c) Para que tipos de números a mensagem é "Não passou no teste"? 

Resposta: Números ímpares.

*/

/*

2) O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?

Resposta: Define o preço da fruta escolhida.

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

Resposta: "O preço da fruta Maçã é 2.25R$".

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

Resposta: Vai passar direto e executar o comando "default" do case, assim definindo o preço para 5 e não 5.5

*/

/* 

3) Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?

Resposta: Pegando um valor digitado pelo usuário e transformando em Number.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

Resposta: 
- 10: "Esse número passou no teste"
- -10: Nada

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

Resposta: sim, porque a let mensagem está definida dentro do if e possui o escopo local, ou seja, só vai existir para os códigos dentro do bloco.

*/

//===========================================Escrita de código==============================================================

//Exercício 1
/* const idade = Number(prompt("Digite sua idade"));

if(idade >= 18) console.log("Você pode dirigir");
else console.log("Você não pode dirigir"); */

//Exercício 2
/* const turno = prompt("Digite o turno em que estuda (M, V ou N)");

if(turno === "M") console.log("Bom dia!");
else if(turno === "V") console.log("Boa tarde!");
else console.log("Boa noite!"); */

//Exercício 3
/* const turno = prompt("Digite o turno em que estuda (M, V ou N)");

switch (turno) {
  case "M":
    console.log("Bom dia!");
    break;
  case "V":
    console.log("Boa tarde!");
    break;
  case "N":
    console.log("Boa noite!");
    break;
  default:
    console.log("Digite novamente");
    break;
} */

//Exercício 4
/* const genero = prompt("Digite o gênero do filme");
const preco = Number(prompt("Digite o valor do filme"));

if(genero === "fantasia" && preco < 15) console.log("Bom filme!");
else console.log("Escolha outro filme! :("); */

//Challenge

//Parte 1
/* const genero = prompt("Digite o gênero do filme");
const preco = Number(prompt("Digite o valor do filme"));
const lanche = prompt("Qual lanche vai querer?");

if (genero === "fantasia" && preco < 15) console.log(`Bom filme! \nAproveite o(a) seu(sua) ${lanche}`);
else console.log("Escolha outro filme! :("); */

//Parte 2
const nome = prompt("Digite seu nome completo");
const tipoJogo = prompt("Digite o tipo de Jogo (IN ou DO)");
const etapaJogo = prompt("Digite o etapa de Jogo (SF, DT ou FI)");
const categoria = Number(prompt("Digite a categoria (1, 2, 3 ou 4"));
const qtdIngressos = Number(prompt("Digite a quantidade de ingressos"));

let valorPorIngresso;
let valorTotal;
let dolar = 4.1;

if (tipoJogo === "DO") {
  if (etapaJogo === "SF") {
    if (categoria === 1) valorPorIngresso = 1320;
    else if (categoria === 2) valorPorIngresso = 880;
    else if (categoria === 3) valorPorIngresso = 550;
    else if (categoria === 4) valorPorIngresso = 220;
    else console.log("Valor errado. Digite novamente!");
  } else if (etapaJogo === "DT") {
    if (categoria === 1) valorPorIngresso = 660;
    else if (categoria === 2) valorPorIngresso = 440;
    else if (categoria === 3) valorPorIngresso = 330;
    else if (categoria === 4) valorPorIngresso = 170;
    else console.log("Valor errado. Digite novamente!");
  } else if (etapaJogo === "FI") {
    if (categoria === 1) valorPorIngresso = 1980;
    else if (categoria === 2) valorPorIngresso = 1320;
    else if (categoria === 3) valorPorIngresso = 880;
    else if (categoria === 4) valorPorIngresso = 330;
    else console.log("Valor errado. Digite novamente!");
  } else console.log("Valor errado. Digite novamente!");
} else if (tipoJogo === "IN") {
  if (etapaJogo === "SF") {
    if (categoria === 1) valorPorIngresso = 1320 * dolar;
    else if (categoria === 2) valorPorIngresso = 880 * dolar;
    else if (categoria === 3) valorPorIngresso = 550 * dolar;
    else if (categoria === 4) valorPorIngresso = 220 * dolar;
    else console.log("Valor errado. Digite novamente!");
  } else if (etapaJogo === "DT") {
    if (categoria === 1) valorPorIngresso = 660 * dolar;
    else if (categoria === 2) valorPorIngresso = 440 * dolar;
    else if (categoria === 3) valorPorIngresso = 330 * dolar;
    else if (categoria === 4) valorPorIngresso = 170 * dolar;
    else console.log("Valor errado. Digite novamente!");
  } else if (etapaJogo === "FI") {
    if (categoria === 1) valorPorIngresso = 1980 * dolar;
    else if (categoria === 2) valorPorIngresso = 1320 * dolar;
    else if (categoria === 3) valorPorIngresso = 880 * dolar;
    else if (categoria === 4) valorPorIngresso = 330 * dolar;
    else console.log("Valor errado. Digite novamente!");
  } else console.log("Valor errado. Digite novamente!");
} else console.log("Valor errado. Digite novamente!");

valorTotal = valorPorIngresso * qtdIngressos;

console.log(`---Dados da compra---
Nome do cliente: ${nome}
Tipo de jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${qtdIngressos} ingressos
---Valores---
Valor do ingresso: R$ ${valorPorIngresso}
Valor total: R$ ${valorTotal}
`);
