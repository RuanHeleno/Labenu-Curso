/* const nome = "Ruan";
const cor = "branco";

const frase = `A cor favorita do ${nome} é a cor ${cor}`;

console.log(frase);

const citacao = "testando";

const fraseCitacao = "\"" + citacao + "\"";
console.log(fraseCitacao);

//quebrar a linha
console.log(`Nome: ${nome} \nCor favorita: ${cor}`);

//letra maiúscula
console.log(`Nome: ${nome} \nCor favorita: ${cor.toUpperCase()}`);

console.log(nome.length);
console.log(nome.includes('b')); */







//Exercício
const nomeUsuario = prompt("Your name: ");
const email = prompt("Your Email: ");

let phrase = `o email ${email} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}`;

console.log(phrase);
console.log(`A quantidade de caracteres em ${nomeUsuario} é: ${nomeUsuario.length}`);

phrase = phrase.replaceAll("R", "L");
phrase = phrase.replaceAll("r", "l");

console.log(phrase);
console.log(phrase.includes("@"));