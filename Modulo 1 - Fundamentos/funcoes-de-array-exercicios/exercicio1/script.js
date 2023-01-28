const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

const objCaixaAlta = (obj) => {
  const novoObj = {};

  for (let [key, value] of Object.entries(obj)) {
    novoObj[key] = value.toUpperCase();
  }

  return novoObj;
};

const objTextoCorrido = (obj) => {
  let string = "";

  for (let i in obj) {
    string += " " + obj[i];
  }

  return string;
};

const objImprime = (obj, cb) => {
  console.log(cb(obj));
};

objImprime(objeto, objCaixaAlta);
objImprime(objeto, objTextoCorrido);

const mostrarIdade = (idade) => {
  console.log("Sua idade é: " + idade);
};

const calcularIdade = (anoAtual, anoNascimento, cb) => {
  const resultado = anoAtual - anoNascimento;
  cb(resultado);
};

calcularIdade(2022, 1996, mostrarIdade);

const mostrarJogador = (jogador) => {
  console.log(`O melhor jogador do time é: ${jogador}`);
};

const cbJogador = (nome, cb) => {
  return cb(nome);
};

cbJogador("Ruan", mostrarJogador);

const cantor = (nome) => {
  console.log(`Seu cantor favorito é ${nome}`);
}

const mostrarCantor = (cb) => {
  const nome = "Ruan";
  cb(nome);
}

mostrarCantor(cantor);