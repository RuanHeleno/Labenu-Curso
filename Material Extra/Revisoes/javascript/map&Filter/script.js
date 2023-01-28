const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.8 },
];

const produtosComDesconto = produtos.map((prod) => {
  return { ...prod, preco: (prod.preco * 0.9).toFixed(2) };
});

console.log(produtosComDesconto);

const hortifruti = produtos.filter((prod) => {
  return prod.categoria.toLowerCase() === "hortifruti";
});

console.log(hortifruti);

const hortifrutiComDesconto = produtosComDesconto
  .filter((prod) => {
    return prod.categoria.toLowerCase() === "hortifruti";
  })
  .map((prod) => {
    return { ...prod, preco: (prod.preco * 0.9).toFixed(2) };
  });

console.log(hortifrutiComDesconto);
