//===========================================Interpretação de código==============================================================

/* 
1) Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

Resposta: 
- console.log("a. ", resultado): false
- console.log("b. ", resultado): false
- console.log("c. ", resultado): true
- console.log("d. ", typeof resultado): boolean

*/

/* 

2) Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Resposta: Será impresso concacatenação de duas strings.

*/

/* 

3) Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

Resposta: Number(prompt)

*/

//===========================================Escrita de código==============================================================

//Exercício 1
/* const idade = Number(prompt("Digite sua idade"));
const idadeDoAmigo = Number(prompt("Digite a idade do seu melhor amigo"));

console.log(`Sua idade é maior que a do seu melhor amigo? ${idade > idadeDoAmigo}`);
console.log(`A diferença de idade é de: ${idade - idadeDoAmigo}`); */

//Exercício 2
/* const par = Number(prompt("Insira um número"));

console.log(par % 2);
// Ele retorna 0 para par e 1 para ímpar 
*/

//Exercício 3
/* const idade = Number(prompt("Digite sua idade em anos"));

console.log(`Sua idade em meses: ${idade * 12} meses de vida`);
console.log(`Sua idade em dias: ${idade * 365} dias de vida`);
console.log(`Sua idade em horas: ${(idade * 365) * 24} horas de vida`); */

//Exercício 4
/* const primeiroNumero = Number(prompt("Digite um numero: "));
const segundoNumero = Number(prompt("Digite outro numero: "));

console.log(`
O primeiro número é maior que o segundo? ${primeiroNumero > segundoNumero}
O primeiro número é igual ao segundo? ${primeiroNumero === segundoNumero}
O primeiro número é divisível pelo segundo? ${primeiroNumero % segundoNumero === 0}
O segundo número é divisível pelo primeiro? ${primeiroNumero % segundoNumero === 0}
`) */

//Challenge

//Parte 1
/* const kelvin = (Fvalue) => {
  return (Fvalue - 32) * (5 / 9) + 273.15;
};

const fahrenheit = (celsius) => {
  return celsius * (9 / 5) + 32;
};

const celsius = Number(prompt("Digite os graus Celsius: "));

console.log(`77°F em K: ${kelvin(77)}°K`);
console.log(`80°C em F: ${fahrenheit(80)}°F`);
console.log(`${celsius}°C em F e K: ${fahrenheit(celsius)}°F / ${kelvin(fahrenheit(celsius))}°K`); */

//Parte 2
/* const quilowattHora = 0.05;
const desconto = 0.15;

console.log(`A residência que consumiu 280 quilowatt-hora vai pagar o valor de R$ ${(quilowattHora * 280).toFixed(2)}`);
console.log(`A residência que consumiu 280 quilowatt-hora e tem 15% de desconto vai pagar o valor de R$ ${((quilowattHora * 280) - (quilowattHora * 280) * desconto).toFixed(2)}`); */

//Parte 3
const lb = Number(prompt("Digite um número"));

const lbToKg = (lb) => {
    return (lb / 2.205).toFixed(2);
}

const ozToKg = (oz) => {
    return (oz / 3.527).toFixed(2);
}

const miToM = (mi) => {
    return (mi * 1609).toFixed(2);
}

const ftToM = (ft) => {
    return (ft / 3.281).toFixed(2);
}

const galToL = (gal) => {
    return (gal * 3.785).toFixed(2);
}

const xicToL = (xic) => {
    return (xic / 6).toFixed(2);
}

console.log(`${lb}lb equivalem a ${lbToKg(lb)}kg`);
console.log(`10.5oz equivalem a ${ozToKg(10.5)}kg`);
console.log(`100mi equivalem a ${miToM(100)}M`);
console.log(`50ft equivalem a ${ftToM(50)}M`);
console.log(`103.56gal equivalem a ${galToL(103.56)}L`);
console.log(`450xic equivalem a ${xicToL(450)}L`);