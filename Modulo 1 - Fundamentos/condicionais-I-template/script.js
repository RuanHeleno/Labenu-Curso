/* const bool1 = false
const bool2 = true

 */
//if = true
//else = false

/* if (bool1){
    alert ("não é falsiane!")
} else {
    alert ("é falsiane sim!")
} */

//Crie uma terceira variável chamada bool3, com valor true
/* const bool3 = true */

//Crie um if que verifica se booll e bool2 são iguais e exiba um alert

//Crie um else if que verifica se bool2 e bool3 são iguais e exiba um alert.

//Crie mais um else if que verifica se booll e bool3 são iguais e exiba um alert.

//Crie um else que exiba um alert caso não existam valores iguais.

/* if(bool1 === bool2) {
    alert ("bool1 tem o mesmo valor de bool2")
} else if(bool2 === bool3) {
    alert ("bool2 tem o mesmo valor de bool3")
} else if (bool1 === bool3) {
    alert("bool1 tem o mesmo valor de bool3")
} else {
    alert ("não existem valores iguais")
} */

/* Vamos verificar se o usuário já pode tirar seu título de eleitor!
Crie uma variável idade e atribua um valor a ela.
Agora crie uma lógica com os requisitos abaixo:
O Pode emitir título de eleitor: pessoas com 18 anos ou mais
Não pode emitir título de eleitor: pessoas menores de 18 anos
Casos facultativos:
· Pessoas com 60 anos ou mais
· Pessoas com idade entre 16 e 17 anos*/
/* let idade
if (idade >= 18 && idade < 60) {
    alert("Pode tirar o título de eleitor!")
} else if ( idade < 18 && idade >=16 ) {
    alert("Votar não é obrigatorio")
} else if (idade >= 60){
    alert("facultativo")
} */


/* let idade2 = numer (prompt("Insira sua idade"))
if (idade2 >= 18 && idade2 <60) {
alert("pode tirar o título de eleitor!")
} else if ((idade2 < 18 && idade2 >= 16 )||
idade2 >= 60) {
alert("votar não é obrigatório")
} else if (idade2 < 16){
    alert("não pode votar")
} */

/*Pra guardar na cabeça
1. Crie uma variável chamada média, e atribua a ela um valor numérico
entre 0 e 10;
Crie um if que verifica se o valor é maior ou igual a 5. Caso seja, imprima
que a pessoa foi aprovada. Adicione um else que imprime que a pessoa
foi reprovada se a condição não foi atendida. */



/* let media = prompt("insira a média:")

if (media>=5){
    alert("aprovado!")
}else {
    alert("Reprovado")
} */

/* 
2. Adicione um else if antes de reprovar, que verifica se a nota é maior ou
igual a 3. Caso seja, imprima "Recuperação" 

3. Altere o último else para que ele também
seja um else if que verifica se a nota é menor
que três para exibir "Reprovado".

4. Adicione um último else, que imprima
"dado inválido" caso nenhuma das condições
anteriores seja atendida
I 
*/
let media = prompt("insira a média:")

if (media>=5 && media <= 10){
    alert("aprovado!")
}else if(media >=3 && media < 5) {
    alert("Recuperação")
}else if(media < 3 && media >=0  ) {
    alert ("Reprovado")
}else { 
    alert("Dado inválido")
}

