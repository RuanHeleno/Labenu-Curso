import CardItem from "../CardItem";

import { Container, Items } from "./styles";

const Card = (props) => {
  const {
    cardType,
    minValue,
    maxValue,
    searchByName,
    order,
    AddCartItem,
  } = props;

  return (
    <Container>
      <Items>
        {cardType
          .filter((e) => e.price > Number(minValue))
          .filter((e) => e.price < Number(maxValue))
          .filter((e) =>
            e.name.toLowerCase().includes(searchByName.toLowerCase())
          )
          .sort((a, b) => {
            if (order === "decrescente") return a.price > b.price ? -1 : 1;
            else if (order === "crescente") return a.price < b.price ? -1 : 1;

            return cardType;
          })
          .map((item) => (
            <CardItem
              key={item.id}
              card={item}
              AddCartItem={() => AddCartItem(item)}
            />
          ))}
      </Items>
    </Container>
  );
};

export default Card;
