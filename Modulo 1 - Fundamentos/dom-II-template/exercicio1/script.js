const lista = document.getElementById('lista');

const li = document.createElement('li');
const liTexto = document.createTextNode("Item 0");
li.appendChild(liTexto);

const li2 = document.createElement('li');
const li2Texto = document.createTextNode("Item 5");
li2.appendChild(li2Texto);

lista.insertAdjacentElement('afterbegin', li);
lista.insertAdjacentElement('beforeend', li2);