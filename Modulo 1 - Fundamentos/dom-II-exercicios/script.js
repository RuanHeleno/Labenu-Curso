const main = document.getElementById("container");
Array.from(document.getElementsByClassName("item")).forEach(element => {
  element.innerHTML = "Quadrado"
});

const adicionaItem = () => {
  const article = document.createElement("article");
  article.setAttribute("class", "item");
  article.setAttribute("onclick", "removeItem(event)");
  article.innerHTML = "Quadrado";

  article.addEventListener("click", removeItem);
  main.insertAdjacentElement("beforeend", article);
};

const removeItem = (event) => {
  event.target.remove();
};
