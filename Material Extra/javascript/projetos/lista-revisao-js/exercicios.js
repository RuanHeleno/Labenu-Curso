// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((e) => e % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array.filter((e) => e % 2 === 0).map((e) => e ** 2);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const obj = {
    maiorNumero: num1 > num2 ? num1 : num2,
    maiorDivisivelPorMenor: num1 > num2 ? num1 % num2 === 0 : num2 % num1 === 0,
    diferenca: Math.abs(num2 - num1),
  };

  return obj;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const arr = [];

  for (let i = 0; i < n * 2; i++) {
    if (i % 2 === 0) arr.push(i);
  }

  return arr;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) return "Escaleno";
  else if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC)
    return "Equilátero";
  else return "Isósceles";
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const novoArray = [];

  for (let indice in array) {
    let segundoMaior = 0;

    novoArray.push(array[indice]);
  }

  return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const atoresFilmes = [];

  for (let indice in filme.atores) {
    if (indice > 0) filme.atores[indice] = " " + filme.atores[indice];
    atoresFilmes.push(filme.atores[indice]);
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresFilmes}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const novoObj = {
    ...pessoa,
    nome: "ANÔNIMO",
  };

  return novoObj;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  return pessoas.filter((e) => e.idade > 14 && e.idade < 60 && e.altura > 1.5);
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter(
    (e) => e.idade <= 14 || e.idade >= 60 || e.altura < 1.5
  );
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (let i = 0; i < contas.length; i++) {
    for (let value of contas[i].compras) {
      contas[i].saldoTotal -= value;
    }

    contas[i].compras = [];
  }

  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => a.nome.localeCompare(b.nome));
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  for (let i = 0; i < consultas.length; i++) {
    consultas[i].dataDaConsulta = new Date(consultas[i].dataDaConsulta);
  }
  consultas.sort((a, b) => a.dataDaConsulta - b.dataDaConsulta)

  for (let i = 0; i < consultas.length; i++) {
    consultas[i].dataDaConsulta = new Date("DD/MM/YYYY");
  }

  return consultas;
}
