const ataques = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
};

const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5
};

pokemon1.ataques = [];

pokemon1.ataques.push(ataques);

const pokemon1Copia = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água",
};

pokemon1Copia.ataques = [
  ...pokemon1.ataques,
  {
    nome: "Jato de Água”",
    dano: 40,
    tipo: "Água",
    precisao: 100,
  },
];

pokemon1.ataques.push({
  nome: "Folha Navalha",
  dano: 45,
  tipo: "“Grama”",
  precisao: 100,
});

console.log("Original: ", pokemon1);
console.log("Copia: ", pokemon1Copia);