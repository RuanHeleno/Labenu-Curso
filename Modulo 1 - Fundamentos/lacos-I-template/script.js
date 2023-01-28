// Vamos criar um sistema em que a pessoa será solicitada a inserir
//vários números, um após o outro.
// Quando digitar o número '0', devemos parar de solicitar novos inputs e
//imprimir no console a soma de todos os números indicados.
// Ex.: Vamos supor que ele coloque:
//10, 3, 50, 7, 0.
// O resultado deve ser: 70

let numeroUsuario //number ou + 
let soma1 = 0
while(numeroUsuario !==0) {
    numeroUsuario = Number(prompt("insira um número"))
    console.log(numeroUsuario)
    soma1 = soma1 + numeroUsuario
}
console.log(soma1)

//for
//Vamos escrever um programa que recebe um número
//por input de usuário.
//Esse programa deve escrever os números de 0 até o
//valor que foi digitado pela pessoa.
//• Para isso, vamos utilizar um laço for que roda por X
//vezes, onde X é o número digitado.

let numeroFor = Number(prompt("digite um numero"))

for(let i = 0; i<=numeroFor; i++){
    console.log(i)
}
console.log("fim do laço")
// let i = 0
// i = i + 1
// i += 1
// i ++

/* for com arrays
Vamos criar um array com 7 números, e utilizar um for
para percorrer os índices deste array, imprimindo no
console a cada linha:
"O número do índice $(indice) é ${numero}" */

const array =[1,2,3,4,5,6,7]

for(let i = 0; i<array.length; i++){
    const numero = array[i]
    console.log(`O número do índice ${i} é ${numero}`)
}
console.log("Fim do array")


/* 
Pra guardar na cabeça
1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo
de usuário. O tipo de usuário é representado pelas letras abaixo:
"A": Administrador;
"B": Usuário comum;
"C": Usuário assinante
-
Enquanto o valor passado for diferente da letra que representa "Administrador", o laço
deve se repetir, exibindo a mensagem: "Acesso negado."
Quando o valor for igual ao da letra que representa "Administrador", o laço deve parar, e a
mensagem "Boas-vindas, admin!" deve ser impressa. 
*/

let tipoUsuario = prompt("Digite o tipo de usuário:").toUpperCase()

while (tipoUsuario !=="A") {
    if(tipoUsuario !=="A"){
        console.log("Acesso negado")
    }
    tipoUsuario = prompt ("Digite o tipo de Usuário").toUpperCase()
    
}
console.log("Boas vindas, Admin!")


//Pra guardar na cabeça
//2. Escreva, utilizando o laço for, um programa que escreva a tabuada do 2

const num = 2
for (let i = i ; i <= 10; i++){
    console.log(`${i} x ${num} = ${i*num}`)
}

/* 
Pra guardar na cabeça
3. Crie um laço for que recebe um array de strings, e imprima no console
a string em caixa alta. 
*/

const arrayStrings = ["Marconha", "tay", "Ruanito", "Samuel Kent", "Paula Dentro", "Vini Boy"]
for(let i = 0; i <arrayStrings.length; i++){
    console.log(arrayStrings[i].toUpperCase())
}






//ELEMENTOS NECESSÁRIOS
/* Inicialização de váriável*/
/* Condição de continuação*/
/* Um conjunto de ações*/
/* Uma alteração que mude a condição de continuação*/
//1 - laço while enquanto
console.log("Prática Guiada I - ")
let numero = +prompt("Insira um número")
let soma = 0

while(numero!==0){
    soma = soma + numero
    console.log(soma);  
    numero =  +prompt("Insira um número")
}
console.log("Saiu do laço")

    
/* let numeroUsuario //number ou + 
let soma = 0
while(numeroUsuario !==0) {
    numeroUsuario = Number(prompt("insira um número"))
    console.log(numeroUsuario)
    soma = soma + numeroUsuario
}
console.log(soma) */