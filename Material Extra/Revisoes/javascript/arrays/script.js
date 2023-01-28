const listaDeCompras = ["batata", "cenoura", "beterraba"];

console.log(listaDeCompras[1]);
console.log(listaDeCompras.length);
listaDeCompras.push("mandioca");
console.log(listaDeCompras);
console.log(listaDeCompras.includes("cenoura"));
listaDeCompras.splice(1, 1);
console.log(listaDeCompras);