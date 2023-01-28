/* const numeros = [11, 15, 18, 14, 12, 13, 120];

let maior = -Infinity;
/* let i = 0;
while (i < numeros.length) {
  if (numeros[i] > maior) maior = numeros[i];
  i++;
}

/* for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maior) maior = numeros[i];
}


for(let numero of numeros) {
    if (numero > maior) maior = numero;
}

console.log(maior); */

const prof = {
  nome: "Leticia Chijo",
  idade: 27,
  aulasFront: true,
  aulasBack: false,
  jogosFavoritos: ["Chrono Trigger", "undertale", "hollow knight"],
  contaPiada: () => console.log("É pavê ou pacume?"),
  pet: {
    nome: "Polly",
    especie: "cachorrinha",
    raca: "Lhasa Apso",
    snacksFavoritos: ["Biscoito", "maçã", "frango"],
  },
};

const verificaAula = (aula) => {
  if (aula) return "Dou";
  else return "Não dou";
};

const aulasBack = verificaAula(prof.aulasBack);
const aulasFront = verificaAula(prof.aulasFront);

const jogos = [];
for (let i = 1; i <= prof.jogosFavoritos.length; i++) {
  jogos.push(`${i}) - ${prof.jogosFavoritos[i - 1]}`);
}

const frase = `Oi, eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
${aulasFront} aulas de front e ${aulasBack} aulas de back.
Meus jogos favoritos são:
${jogos}
Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}
`;

console.log(frase);
prof.contaPiada();