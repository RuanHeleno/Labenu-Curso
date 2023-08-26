/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum CORES_ARCOIRIS {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELA = "amarela",
  VERDE = "verde",
  AZUL = "azul",
  ANIL = "anil",
  VIOLETA = "violeta",
}

type TPersonEx1 = {
  nome: string;
  idade: number;
  corFavorita: CORES_ARCOIRIS;
};

const personOne: TPersonEx1 = {
  nome: "Ruan",
  idade: 26,
  corFavorita: CORES_ARCOIRIS.VERMELHO,
};

const personTwo: TPersonEx1 = {
  nome: "Sida",
  idade: 27,
  corFavorita: CORES_ARCOIRIS.VIOLETA,
};

const personThree: TPersonEx1 = {
  nome: "Italo",
  idade: 24,
  corFavorita: CORES_ARCOIRIS.VERDE,
};

console.table(personOne);
console.table(personTwo);
console.table(personThree);
