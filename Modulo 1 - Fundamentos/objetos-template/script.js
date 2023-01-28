const estudante = {
    nome: "Ruan",
    sobrenome: "Rocha",
    numeroMatricula: 24,
    notasDoSemestre: [10, 9]
}

console.log("=======================================PARTE 1===========================================")
console.log(estudante.nome);
console.log(estudante["sobrenome"]);

estudante.modulo = "Javascript";

console.log(`Nome do estudante: ${estudante.nome}`);
console.log(`Segunda nota do semestre: ${estudante.notasDoSemestre[1]}`);
console.log(`Modulo do estudante: ${estudante.modulo}`);


console.log("=======================================PARTE 2===========================================")
const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasDoSemestre: [...estudante.notasDoSemestre, 9],
    modulo: "HTML"
};

novoEstudante.notasDoSemestre.push(8);
console.log("Nota do semestre do novo estudante: ", novoEstudante.notasDoSemestre);

console.log("=======================================PARTE 3===========================================")
const estudantesLabenu = [];

estudantesLabenu.push(estudante);
estudantesLabenu.push(novoEstudante);

console.log(estudantesLabenu[1].nome);

console.log("=======================================PARTE 4===========================================")
const carrinho = {
    nome: "Ruan",
    formaPagamento: "MasterCard",
    endereco: "Rua teste",
}

carrinho.compras = [{
    nome: "Desodorante",
    preco: 8.99,
    quantidade: 4
}]

console.log("Tamanho do array de compras: ", carrinho.compras.length);

const carrinhoPresente = {
    ...carrinho,
    nome: "Sida",
    formaPagamento: "Cartão presente"
}

console.log(carrinhoPresente);