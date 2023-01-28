const frutas = ["laranja", "limão", "uva"];

const attLista = () => {
  const lista = Array.from(document.getElementsByTagName("li"));

  for (let i = 0; i < lista.length; i++) {
    document.getElementById(`fruta-${i + 1}`).innerHTML = frutas[i];
  }
};

attLista();

// 2
/* const showValue = (e) => {
    console.log(e.value);
}  */

const addFruit = () => {
  let fruta = document.getElementById("fruta");

  if (frutas.length < 4) {
    frutas.push(fruta.value);
  } else {
    const ul = document.getElementById("lista-de-frutas");
    const li = document.createElement("li");

    ul.appendChild(li).setAttribute("id", `fruta-${frutas.length + 1}`);
    frutas.push(fruta.value);
  }

  fruta.value = "";
  attLista();
};

document.getElementsByTagName("button")[0].addEventListener("click", addFruit);
