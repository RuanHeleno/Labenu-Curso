import React from "react";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  const { data } = props;
  console.log(data)

  return (
    <ContainerPostagem>
      <Image src={data.urlFoto} alt={data.descricao} />
      <h3>{data.titulo}</h3>
      <Description>{data.descricao}</Description>
    </ContainerPostagem>
  );
};
export default TelaDaPostagem;
