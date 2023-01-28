/* const nome = document.getElementById("nome");
console.log(nome.value);
nome.value = "";
console.log(nome.value);

const endereco = document.getElementById("endereco");
console.log(endereco.value);
endereco.value = "";

const email = document.getElementById("email");
console.log(email.value);
email.value = ""; */

const exibirNome = function () {
    const result = document.getElementById("nome");
    return result;
};

const exibirEndereco = function () {
    const result = document.getElementById("endereco");
    return result;
};

const exibirEmail = function () {
  const result = document.getElementById("email");
  return result;
};

const exibirDados = () => {
  console.log(exibirNome().value);
  exibirNome().value = "";

  console.log(exibirEndereco().value);
  exibirEndereco().value = "";
  
  console.log(exibirEmail().value);
  exibirEmail().value = "";
};

document
  .getElementsByTagName("button")[0]
  .addEventListener("click", exibirDados);
