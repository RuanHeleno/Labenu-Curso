const produtoNome = prompt("Insira um novo produto: ");
let produtoPreco = Number(prompt("Insira o preço do produto: "));
produtoPreco -= 1;

console.log(`O produto ${produtoNome} custa R$ ${produtoPreco.toFixed(2)}`);