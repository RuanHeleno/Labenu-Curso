const pessoa = {
    nome: "Ruan",
    idade: 26,
    generoMusical: "Rap"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta de ${pessoa.generoMusical}`);

const outraPessoa = {
    ...pessoa,
    nome: "Sida"
}

console.log(`O nome da pessoa é ${outraPessoa.nome}, ela tem ${outraPessoa.idade} anos e gosta de ${outraPessoa.generoMusical}`);