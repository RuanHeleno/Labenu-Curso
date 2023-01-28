const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

let posicao = 1;

for (lista of maioresPaises) {
  console.log(`${posicao} - ${lista}`);
  posicao++;
}

// Código com o método entries()
// for([index, value] of maioresPaises.entries()) {
//     console.log(`${index + 1} - ${value}`)
// }