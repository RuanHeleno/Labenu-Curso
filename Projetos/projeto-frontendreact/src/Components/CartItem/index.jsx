import React, { useState, useEffect } from "react";

import {
  Remove,
  Options,
  MinusOrPlus,
  Quantity,
  Left,
  Image,
  Right,
  Container,
  Top,
  Price,
  Name,
} from "./styles";

const CartItem = (props) => {
  const { name, price, id, quantity, image } = props.cart;
  const { setCart, setValor, cartQuantity, setCartQuantity } = props;

  const [itemQuantity, setItemQuantity] = useState(quantity);

  const removeItem = () => {
    setCart((current) =>
      current.filter((item) => {
        if (item.id !== id) return item;
        else {
          setCartQuantity(cartQuantity - item.quantity);
          item.quantity = 1;
          localStorage.removeItem("cart");
        }
      })
    );
  };

  const handleCartButtons = (value) => {
    const item = props.cart;

    if (value === "minus") {
      item.quantity -= 1;
      setCartQuantity(cartQuantity - 1);
    } else {
      item.quantity += 1;
      setCartQuantity(cartQuantity + 1);
    }

    setItemQuantity(item.quantity);
  };

  useEffect(() => {
    setValor(price * quantity);

    if (itemQuantity === 0) removeItem();
  }, [itemQuantity]);

  return (
    <Container id={id}>
      <Left>
        <Image src={image} alt={name} />
      </Left>

      <Right>
        <Top>
          <Name>{name}</Name>
          <Price>R$ {price.toString().replace(".", ",")}</Price>
        </Top>

        <Options>
          <MinusOrPlus onClick={() => handleCartButtons("minus")}>
            -
          </MinusOrPlus>
          <Quantity
            type={"number"}
            readOnly
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
          <MinusOrPlus onClick={() => handleCartButtons("plus")}>+</MinusOrPlus>
        </Options>

        <Remove onClick={removeItem}>Remover</Remove>
      </Right>
    </Container>
  );
};

export default CartItem;
