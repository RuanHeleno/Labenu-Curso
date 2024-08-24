import Products from "../../Components/Products";

import { Container } from "./styled";

const Toys = (props) => {
  const {
    cards,
    setCards,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    searchByName,
    setSearchByName,
    cart,
    setCart,
    cartQuantity,
    setCartQuantity,
    order,
    setOrder,
    loading,
    setLoading,
  } = props;

  return (
    <Container>
      <Products
        cards={cards}
        setCards={setCards}
        cart={cart}
        setCart={setCart}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        searchByName={searchByName}
        setSearchByName={setSearchByName}
        order={order}
        setOrder={setOrder}
        loading={loading}
        setLoading={setLoading}
      />
    </Container>
  );
};

export default Toys;
