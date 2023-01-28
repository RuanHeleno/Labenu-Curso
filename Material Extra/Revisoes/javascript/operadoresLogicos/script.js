const idade = Number(prompt("Digite sua idade"));
const altura = Number(prompt("Digite sua altura em centímetros"));
const problemaCardiaco = prompt("Você tem algum problema cardiaco? S/N");

if(idade >= 18 && altura >= 160 && problemaCardiaco === "N") console.log("Pode entrar")
else console.log("não pode entrar")