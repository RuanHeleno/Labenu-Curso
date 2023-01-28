//===========================================Interpretação de código==============================================================

/* 

1) Leia o código abaixo

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) O que será impresso no console?

Resposta: 
- console.log(filme.elenco[0]): Matheus Nachtergaele
- console.log(filme.elenco[filme.elenco.length - 1]): Virginia Cavendish
- console.log(filme.transmissoesHoje[2]): {canal: "Globo", horario: "14h"}

*/

/*

2) Leia o código abaixo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que será impresso no console?

Resposta:
- console.log(cachorro): { nome: "Juca",  idade: 3, raca: "SRD" }
- console.log(gato): { nome: "Juba",  idade: 3, raca: "SRD" }
- console.log(tartaruga): { nome: "Jubo",  idade: 3, raca: "SRD" }

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

Resposta: é o sinal de espalhamento (spread) que copia os atributos de um objeto para o outro.

*/

/* 

3) Leia o código abaixo

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que será impresso no console?

Resposta:
- console.log(minhaFuncao(pessoa, "backender")): false
- console.log(minhaFuncao(pessoa, "altura")): undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

Resposta: O primeiro console busca o valor da propriedade 'Backender' e retorna seu valor que é false. Já o segundo console adiciona uma nova propriedade 'altura' no objeto 'pessoa' sem o valor e por isso o resultado é undefined.

*/

//===========================================Escrita de código==============================================================

//Exercício 1
/* const pessoa = {
    nome: "Ruan",
    apelido: ["Ruanito", "boy magia", "zito"]
}

const myObj = (objeto) => {
    return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`
}

console.log(myObj(pessoa));

const pessoa2 = {
    ...pessoa,
    apelido: ["Heleno", "Heleninho", "Helenito"]
}

console.log(myObj(pessoa2)); */

//Exercício 2
/* const pessoa1 = {
  nome: "Ruan",
  idade: 26,
  profissao: "Desenvolvedor frontend junior",
};

const pessoa2 = {
  nome: "Sida",
  idade: 27,
  profissao: "Desenvolvedora em construção",
};

const objInformacoes = (obj) => {
  console.log(`
O valor de nome é ${obj.nome}
O numero de caracteres do valor é ${obj.nome.length}
O valor de idade é ${obj.idade}
O valor de profissão é ${obj.profissao}
O numero de caracteres do valor profissão é ${obj.profissao.length}
`);
};

objInformacoes(pessoa1);
objInformacoes(pessoa2); */

//Exercício 3
/* const carrinho = [];

const fruta1 = {
    nome: "uva",
    disponibilidade: true
}

const fruta2 = {
    nome: "banana",
    disponibilidade: true
}

const fruta3 = {
    nome: "pêra",
    disponibilidade: true
}

const inserirNoCarrinho = (fruta) => {
    carrinho.push(fruta);
}

inserirNoCarrinho(fruta1);
inserirNoCarrinho(fruta2);
inserirNoCarrinho(fruta3);

console.log(carrinho)

const atualizaEstoque = (fruta) => {
  return fruta.disponibilidade = !fruta.disponibilidade;
}

atualizaEstoque(fruta3);

console.log(carrinho); */

//Challenge

//Parte 1
const criarObjeto = () => {
  const pessoa = {
    nome: prompt("Digite seu nome: "),
    idade: Number(prompt("Digite sua idade: ")),
    profissao: prompt("Digite sua profissao: "),
  };

  console.log(pessoa, typeof pessoa);
};

criarObjeto();

//Parte 2
/* const filme1 = {
  nome: "Esqueceram de mim",
  anoLancamento: 2018
}

const filme2 = {
  nome: "Esqueceram de mim 2",
  anoLancamento: 2018
}

const myMovies = (obj1, obj2) => {
  console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento > filme2.anoLancamento}`);
  console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento === filme2.anoLancamento}`);
}

myMovies(filme1, filme2); */
