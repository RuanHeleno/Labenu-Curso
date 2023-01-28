const frase = "  Hoje eu vou comer cenoura ebaaa  ";

console.log(frase.length);
console.log(frase.trim());
console.log(frase.toLowerCase());
console.log("Tem a palavra comer?", frase.includes("comer"));
console.log("Tem a palavra batata?", frase.includes("batata"));

const novaFrase = frase.replaceAll("cenoura", "batata");
console.log(novaFrase);
console.log("Tem a palavra comer?", novaFrase.includes("comer"));
console.log("Tem a palavra batata?", novaFrase.includes("batata"));
