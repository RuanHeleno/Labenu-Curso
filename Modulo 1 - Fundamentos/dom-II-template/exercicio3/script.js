const msg = document.getElementById("mensagem");

const checaCaps = (event) => {
    event.shiftKey ? msg.innerHTML = "Segurou o Shift" : msg.innerHTML = ""
}