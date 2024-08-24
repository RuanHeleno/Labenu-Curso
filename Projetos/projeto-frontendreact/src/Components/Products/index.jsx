import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import RingLoader from "react-spinners/RingLoader";

import shirts from "../../Assets/data/shirts.json";
import toys from "../../Assets/data/toys.json";

import Card from "../Card/index.jsx";
import Filter from "../Filter/index.jsx";

import { Content, Top, Gallery, Title, Container } from "./styles.js";

const Products = (props) => {
  const {
    cards,
    setCards,
    cart,
    setCart,
    cartQuantity,
    setCartQuantity,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    searchByName,
    setSearchByName,
    order,
    setOrder,
    loading,
    setLoading,
  } = props;

  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    if (location.pathname === "/") {
      setTitle("Roupas Espaciais");
      setCards(shirts);
    } else if (location.pathname === "/toys") {
      setTitle("Brinquedos Espaciais");
      setCards(toys);
    }

    setLoading(false);
  }, [location.pathname]);

  const AddCartItem = (item) => {
    const findItem = cart.filter((e) => e.id === item.id);

    if (Array.isArray(findItem) && findItem.length) {
      swal({
        title: "Produto já adicionado!",
        icon: "error",
      });
    } else {
      setCart((arr) => [...arr, item]);
      setCartQuantity(cartQuantity + 1);
    }

  };

  return (
    <Content>
      <Container>
        <Title>{title}</Title>

        <Top>
          <Filter
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            searchByName={searchByName}
            setSearchByName={setSearchByName}
            setOrder={setOrder}
          />
        </Top>

        <Gallery>
          {loading ? (
            <RingLoader color="cyan" size={100} />
          ) : (
            <>
              <Card
                cardType={cards}
                minValue={minValue}
                maxValue={maxValue}
                searchByName={searchByName}
                order={order}
                AddCartItem={AddCartItem}
              />
            </>
          )}
        </Gallery>
      </Container>
    </Content>
  );
};

export default Products;
