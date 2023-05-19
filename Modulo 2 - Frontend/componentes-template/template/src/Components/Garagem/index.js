import React from "react";
import Carro from "../Carro";

const Garagem = () => {
  return (
    <>
      <h2>Garagem da Ozemela</h2>
      <Carro nome={"Hilux"} cor={"Branco"} ano={2022} flex={true} />
      <Carro nome={"Honda Civic"} cor={"Prata"} ano={2020} flex={false} />
    </>
  );
};

export default Garagem;
