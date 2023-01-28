const nome = prompt("Write your name");
const idade = prompt("Write your age");

nome === "José" ? console.log("Oi, Zé!") : console.log(`Olá, ${nome}`);

idade >= 18
  ? console.log("pode tirar carteira de motorista!")
  : console.log("Ainda não pode tirar carteira de motorista");
