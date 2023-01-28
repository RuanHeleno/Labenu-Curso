const bichinho = prompt("Digite um bichinho");

/* if (bichinho === "cachorro") console.log("Au au");
else if (bichinho === "gato") console.log("Miau");
else if (bichinho === "vaca") console.log("Muuu");
else console.log("Barulho não encontrado"); */

switch (bichinho) {
  case "cachorro":
    console.log("Au au");
    break;
  case "gato":
    console.log("Miau");
    break;
  case "vaca":
    console.log("Muuu");
    break;
  default:
    console.log("Barulho não encontrado");
}