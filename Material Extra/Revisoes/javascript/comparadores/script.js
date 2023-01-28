const numeroSorteado = Math.floor(Math.random() * 10) + 1;
const numeroRecebido = Number(prompt("Insira um número de 1 a 10"));

console.log(`O número sorteado foi ${numeroSorteado}`);

if (numeroRecebido === numeroSorteado)
  console.log("Seu número é igual ao número sorteado!");
else if (numeroRecebido > numeroSorteado)
  console.log("Seu número é maior que o número sorteado!");
else console.log("Seu número é menor que o número sorteado!");
