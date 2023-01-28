const resultado1 = [2, 4, 6, 8, 10, 12];
const resultado2 = [1, 3, 5, 7, 9, 11];
const resultado3 = [2, 12, 22, 32, 42, 52];
const resultado4 = [3, 6, 9, 12, 15, 18];

const megaSena = [resultado1, resultado2, resultado3, resultado4];

//console.log(megaSena);

/* if (megaSena.length === 4) {
  for (let i = 0; i < megaSena.length; i++) {
    for(let j = 0; j < megaSena[i].length; j++) {
      console.log(`Sorteio ${i + 1}: ${megaSena[i]}`);
    }
  }
} else {
  console.log("É necessário alterar o número de itens do array");
} */

/* if (megaSena.length === 4) {
  for (let i in megaSena) {
    for(let j of megaSena[i]) {
      console.log(`Sorteio ${Number(i) + 1}: ${megaSena[i]}`);
    }
  }
} else {
  console.log("É necessário alterar o número de itens do array");
} */

//Guardar na cabeça
const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

/* for (let i = 0; i < filmes.length; i++) {
  console.log(
    `\n${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`
  );

  for(let j = 0; j < filmes[i].elenco.length; j++) {
    console.log(`Tem no elenco: ${filmes[i].elenco}`);
  }
} */

for (let prop in filmes) {
  console.log(
    `\n${filmes[prop].titulo}, de ${filmes[prop].ano}, dirigido por ${filmes[prop].diretor}`
  );

  for (let valor of filmes[prop].elenco) {
    console.log(`Tem no elenco: ${valor}`);
  }
}
