import { Content, Image, Title, Price, AddCarrinho, Body } from "./styles";

const CardItem = (props) => {
  const { image, alt, name, price } = props.card;

  return (
    <Content>
      <Image src={image} alt={alt} />
      <Body>
        <Title>{name}</Title>
        <Price>R$ {price.toFixed(2).replace(".", ",")}</Price>
        <AddCarrinho onClick={props.AddCartItem}>
          Adicionar ao Carrinho
        </AddCarrinho>
      </Body>
    </Content>
  );
};

export default CardItem;
