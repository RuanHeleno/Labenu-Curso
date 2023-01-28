const nacionalidadesArray = [
  "brasileira",
  "argentina",
  "uruguaia",
  "chilena",
  "colombiana",
];

const nascimento = () => {
  let nacionalidade = prompt("Escreva aqui sua nacionalidade");

  if (nacionalidadesArray.includes(nacionalidade)) console.log(`Sua nacionalidade é ${nacionalidade}`);
  else console.log("Nacionalidade não encontrada");
};

nascimento();
