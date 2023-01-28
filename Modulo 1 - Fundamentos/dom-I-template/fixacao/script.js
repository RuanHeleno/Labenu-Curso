const p = document.getElementById("paragrafo");
const input = document.getElementById("texto");

const changeInputValue = (e) => {
  console.log(e.value);
};

const changeText = () => {
  p.innerHTML = input.value;
  input.value = ""
};