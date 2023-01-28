//===========================================Interpretação de código==============================================================

/*

1) Leia o código abaixo

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) O que vai ser impresso no console?

Resposta: vai imprimir o item correspondente ao valor do map, depois o indice e então o array completo

2) Leia o código abaixo

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

a) O que vai ser impresso no console?

Resposta: vai retornar o valor da chave nome de cada iteração do array

3) Leia o código abaixo

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

a) O que vai ser impresso no console?

Resposta: vai retornar todos os usuarios que tem apelido diferente de Chijo

*/

//===========================================Escrita de código==============================================================

//Exercício 1
/* const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

const nomes = pets.map((e) => e.nome);
console.log(nomes);

const tipo = pets.filter((e) => e.raca.toLowerCase() === "salsicha");
console.log(tipo);

const poodles = pets.filter((e) => e.raca.toLowerCase() === "poodle");
const desconto = poodles.map(
  (e) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${e.nome}!`
);
console.log(desconto); */

//Exercício 2
/* const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

const nomes = produtos.map((e) => e.nome);
console.log(nomes);

const produtosComDesconto = produtos.map((e) => {
  return { nome: e.nome, preco: "R$" + " " + (e.preco * 0.95).toFixed(2) };
});
console.log(produtosComDesconto);

const bebidas = produtos.filter((e) => e.categoria.toLowerCase() === "bebidas");
console.log(bebidas);

const ype = produtos.filter((e) => e.nome.includes("Ypê"));
console.log(ype);

const produtosYpe = ype.map((e) => {
  return `Compre ${e.nome} por R$ ${e.preco.toFixed(2).replace(".", ",")}`;
});
console.log(produtosYpe); */

//Challenge
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

//Parte 1
const ordemAlfabetica = pokemons.map(e => e.nome).sort();
console.log(ordemAlfabetica);

const tipos = pokemons.map(e => e.tipo);
//const tiposUnicos = [...new Set(tipos)];
const tiposUnicos = tipos.filter((tipo, index, array) => {
  return array.indexOf(tipo) === index;
});

console.log(tiposUnicos);