const imprimirNome = (nome) => {
    return `Olá ${nome}`
}

const meuNome = "Ruan";

console.log(imprimirNome(meuNome));
console.log(imprimirNome("Ozemela"));
imprimirNome("Maria");

const imprimir = function (nome) {
    console.log(`Olá ${nome}, isso é uma função não nomeada`)
}

imprimir("Livia");

//========================================================================================
const numeroPar = (num) => {
    let verifica = num % 2 === 0;
    let soma = num + 10;
    let mult = num * num;

    return `\no número é ${num} é par? ${verifica}. 
Somado com 10 o resultado é ${soma} e multiplicado por ele mesmo é ${mult}.\n`
}

const resultado = numeroPar(3);

console.log(resultado);

//========================================================================================
const autenticar = (login, senha) => {
    const loginSalvo = "Ruan";
    const senhaSalva = "1234";

    const loginVerificado = loginSalvo === login;
    const senhaVerificado = senhaSalva === senha;

    const logar = loginVerificado && senhaVerificado;

    return logar;
}

console.log(autenticar("Ruan", "1234"));
console.log(autenticar("Ruan", "12345"));

//========================================================================================
const person = (name, birthdayAge) => {
    const currentYear = new Date().getFullYear();
    return `Is ${name} of legal age? ${currentYear - birthdayAge > 18}`
}

console.log(person("Ruan", 1990));
console.log(person("João", 2010));