import { frota, TCarro } from "./frota";

function buscarCarrosPorMarca(frota: Array<TCarro> , marca: string) {
  if (marca === undefined) {
    return frota;
  }

  return frota.filter((carro) => {
    return carro.marca === marca;
  });
}

console.log(buscarCarrosPorMarca(frota, "Ford"));