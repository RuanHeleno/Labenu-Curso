import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 80%;
`;

const CardContainer = styled.section`
  width: 150px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

export default function CardFruta(props) {
  const { url, name, price } = props.fruta;

  return (
    <CardContainer>
      <Image src={url} alt={name} />
      <p>{name}</p>
      <p>R${price}</p>
      <button onClick={props.comprar}>Comprar</button>
    </CardContainer>
  );
}
