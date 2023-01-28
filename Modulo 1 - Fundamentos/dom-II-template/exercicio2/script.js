//Change input type
const input = document.getElementById("password");
let senha = true;

const escondeSenha = (event) => {
    event.preventDefault();

    senha = !senha;
    input.setAttribute("type", !senha ? "password" : "text");  
}

//Change Themes
const theme = document.getElementsByTagName("form")[0];
let light = true;

const changeTheme = (event) => {
    event.preventDefault();

    light = !light;
    theme.setAttribute("class", !light ? "dark" : "light");
}