//===========================================Interpretação de código==============================================================

/* 

1) Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let string
console.log('a. ', string)

string = null
console.log('b. ', string)

string = "paralelepípedo"
console.log('c. ', string.length)

let i = 0
console.log('d. ', string[i])

const valor = string[i+6]
console.log('e. ', valor)

i = 13
console.log('f. ', string[i])

i = 14
console.log('g. ', string[i])

Resposta: 
- console.log('a. ', string): undefined
- console.log('b. ', string): null
- console.log('c. ', string.length) 14
- console.log('d. ', string[i]): p
- console.log('e. ', valor): l
- console.log('f. ', string[i]): o
- console.log('g. ', string[i]): undefined

*/

/*

2) Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

R: SUBI NUM EM MIRROCOS, 27

*/


//===========================================Escrita de código==============================================================

//Exercício 1
/* const nome = prompt("Digite seu nome: "); */
/* const email = prompt("Digite seu email: "); */
/*  */
/* console.log(`O e-mail ${email} foi cadastrado com sucesso. seja bem-vinda(o), ${nome}!`); */

//Exercício 2
/* const senha = prompt("Digite sua senha: ");

console.log(`A senha tem ${senha.length} caracteres`); */

//Exercício 3
/* const email = prompt("Digite seu email: "); 

console.log(email.includes('@')); */

//Exercício 4
/* const nomeUsuario = prompt("Digite seu nome: ").toLowerCase();

console.log(nomeUsuario); */

//Exercício 5
const email = prompt("Digite seu email: "); 

const novoEmail = email.replace("mail.com", "labenu.com");

console.log(email, novoEmail);