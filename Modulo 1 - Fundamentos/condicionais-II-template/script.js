// 1 - verificar se o dependente do usuário tem entre 13 e 17 anos
// Faremos de duas formas:
// 1.1 - Caso o número esteja entre 13 e 17, imprima:
// "Seu dependente já pode ter um cartão de crédito vinculado ao seu 33
// 1.2 Caso o número não esteja entre 13 e 17, imprima:
// "Consulte outras possibilidades do Labank"
//
//

//  A. Utilizando ifs aninhados
const idadeDoDependente = Number(prompt("qual é a idade do dependente ?"));

if (idadeDoDependente >= 13) {
  if (idadeDoDependente <= 17) {
    console.log(
      "Seu dependente já pode ter um cartão de crédito vinculado ao seu"
    );
  } else {
    console.log("Consulte outras possibilidades do Labank");
  }
} else {
  console.log("Consulte outras possibilidades do Labank");
}
//  B. Utilizando um operador lógico para unir duas operações
//  relacionais
if (idadeDoDependente >= 13 && idadeDoDependente <= 17) {
  console.log(
    "Seu dependente já pode ter um cartão de crédito vinculado ao seu"
  );
} else {
  console.log("Consulte outras possibilidades do Labank");
}

/* 
If ternário
1- Faça uma última verificação neste número, para verificar se o
número é exatamente 13.
1.1 - Caso seja 13, imprima "A idade do dependente é 13 e já pode ter um
cartão".
1.2 - Caso não seja, imprima " Verifique as opções possíveis".
• Utilize um if ternário para resolver. 
*/
console.log(typeof idadeDoDependente);
idadeDoDependente === 13
  ? console.log("A idade do dependente é 13 e já pode ter um cartão")
  : console.log("Verifique as opções possíveis");

idadeDoDependente ? idadeDoDependente === 13 : idadeDoDependente !== 13;

/* A Labank gostou muito do seu trabalho e quer implementar um
serviço de escolha do cartão pelo ramal telefónico.
。 1 para 'Fácil'
2 para 'Black'
3 para 'Platinum'
4 para 'Master Gold'
E caso não seja nenhuma dessas opções a mensagem deve ser 'Escolha umas das
quatro opções disponíveis'
 */

const ramal = Number(
  prompt(`
Opções de escolha:
1 para 'Fácil'
2 para 'Black'
3 para 'Platinum'
4 para 'Master Gold'
`)
);

switch (ramal) {
  case 1:
    console.log("Fácil");
    break;
  case 2:
    console.log("Black");
    break;
  case 3:
    console.log("Platinum");
    break;
  case 4:
    console.log("Master Gold");
  default:
    console.log("Escolha uma das quatro opções disponíveis");
}

/* 
Pra guardar na cabeça
1. Crie um código que receba um número por prompt e verifique se
um número é divisível por 2 e por 3. Faça isso:
a. Utilizando ifs aninhados
b. Utilizando um operador lógico para unir duas operações
relacionais 

Pra guardar na cabeça
2. Dentro do if anterior, crie um if ternário que imprima um número
surpresa que deve ser 30:
· Caso o número seja 30, imprima no console "UFA ACERTEI!"
Caso não seja, imprima " não foi dessa vez :( ".

Pra guardar na cabeça
3. Ainda dentro do if do exercício anterior, crie estrutura de switch case
que verifique se o número é 6, 12, 18, 24 ou 30 e imprima uma mensagem
diferente para cada número
Caso não seja nenhum deles, imprima "o número é maior que 30 ou
menor que 6" 
*/

//operador lógico
const numero = Number(prompt("Digite um número: "));

if (numero % 2 === 0 && numero % 3 === 0) {
  console.log("O número é divisível por 2 e por 3.");
} else if (numero % 2 === 0) {
  console.log("O número é divisivel somente por 2.");
} else if (numero % 3 === 0) {
  console.log("O número é divisível somente por 3.");
}

//número surpresa
numero === 30 ? console.log("UFA acertei!") : console.log("Não foi dessa vez.");

//switch case
switch (numero) {
  case 6:
    console.log("O número é 6.");
    break;
  case 12:
    console.log("O número é 12.");
    break;
  case 18:
    console.log("O número é 18.");
    break;
  case 24:
    console.log("O número é 24.");
    break;
  case 30:
    console.log("O número é 30.");
    break;
  default:
    console.log("O número é maior que 38 ou menor que 6.");
}
