const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2];

const multiplicarPorTres = (array) => {
  const novoArray = [];

  for (let value of array) {
    novoArray.push(value * 3);
  }

  return novoArray;
};

//console.log(multiplicarPorTres(arrayNumeros));

const retornaPar = (arr) => {
  const novoArray = [];

  for (element of arr) {
    if (element % 2 === 0) novoArray.push(element);
  }

  return novoArray;
};

//console.log(retornaPar(arrayNumeros));

/* const somar = (num) => {
  return num + 2;
}

const imprimirNoConsole = (callback, num) => {
  console.log(callback(num));
}

imprimirNoConsole(somar, 20); */

const imprimir = (callback, arr) => {
  const resultado = callback(arr);
  console.log(resultado);
};

/* imprimir(multiplicarPorTres, arrayNumeros);
imprimir(retornaPar, arrayNumeros); */

/*  const resultadoMultTres = arrayNumeros.map((element) => element * 3);
console.log(resultadoMultTres);

const resultadoPar = arrayNumeros.filter((element) => element % 2 === 0);
console.log(resultadoPar); */

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

const giveHp = (obj) => {
  const novoObj = {
    ...obj,
    vida: 100
  }

  return novoObj;
};

const pokemonsVidaCheia = pokemons.map(giveHp);
console.log(pokemonsVidaCheia);

const pokemonsDeFogo = pokemons.filter((element) => element.tipo === "fogo" );
console.log(pokemonsDeFogo);