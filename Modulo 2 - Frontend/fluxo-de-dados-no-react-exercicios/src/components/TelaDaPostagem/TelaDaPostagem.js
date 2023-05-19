import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  const { titulo, imagem, descricao } = props.dataPostagem;

  return (
    <ContainerPostagem>
      <TitleHeader>{titulo}</TitleHeader>
      <Image src={imagem} />
      <Description>{descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
