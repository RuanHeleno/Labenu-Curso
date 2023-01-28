let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch (nacionalidade) {
  case "brasileira":
  case "brasileiro":
    console.log("a pessoa é do Brasil!");
    break;
  case "argentina":
  case "argentino":
    console.log("a pessoa é da Argentina!");
    break;
  case "uruguaia":
  case "uruguaio":
    console.log("a pessoa é do Uruguai!");
    break;
  case "chilena":
  case "chileno":
    console.log("a pessoa é do Chile!");
    break;
  case "colombiana":
  case "colombiano":
    console.log("a pessoa é da Colômbia!");
    break;
  default:
    console.log("nacionalidade não encontrada");
    break;
}