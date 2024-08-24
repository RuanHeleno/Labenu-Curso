import { useEffect } from "react";

import CartItem from "../../Components/CartItem";

import { Content, Message, Title, Top, Valor } from "./styles.js";

const Cart = (props) => {
  const { cart, setCart, valor, setValor, cartQuantity, setCartQuantity } =
    props;

  const componentsCart =
    cart.map((obj) => (
      <CartItem
        key={obj.id}
        cart={obj}
        setCart={setCart}
        setValor={setValor}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
      />
    )) || [];

  useEffect(() => {
    let itemValor = 0;
    let totalItems = 0;
    const arr = [];

    for (let item of componentsCart) {
      itemValor += Number(item.props.cart.price * item.props.cart.quantity);
      arr.push(item.props.cart);

      totalItems += item.props.cart.quantity;
    }

    localStorage.setItem("cart", JSON.stringify(arr));
    localStorage.setItem("cartQuantity", JSON.stringify(totalItems));

    setValor(itemValor);
  }, [componentsCart]);

  return (
    <Content>
      <Top>
        <Title>Seus Produtos</Title>
      </Top>
      <Valor valor={valor}>
        <p>Valor Total:</p>
        <p>
          <b>R$ {valor.toFixed(2).replace(".", ",")} </b>
        </p>
      </Valor>
      {componentsCart.length === 0 ? (
        <Message>Não há produtos no carrinho!</Message>
      ) : (
        componentsCart
      )}
    </Content>
  );
};

export default Cart;
