const lista = document.getElementById("lista");
const item = document.getElementById("meu-input");

const insereItem = () => {
  if (!item.value) return;

  const li = document.createElement("li");
  const liTexto = document.createTextNode(item.value);
  li.appendChild(liTexto);

  lista.insertAdjacentElement("beforeend", li);
  item.value = "";
};