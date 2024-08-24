import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Home from "./pages/Home";
import Toys from "./pages/Toys";

const AppRoutes = () => {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [cartQuantity, setCartQuantity] = useState(
    JSON.parse(localStorage.getItem("cartQuantity")) || 0
  );
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState(1000);
  const [searchByName, setSearchByName] = useState("");
  const [order, setOrder] = useState("decrescente");
  const [valor, setValor] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Router>
        <Menu cartQuantity={cartQuantity} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cards={cards}
                setCards={setCards}
                minValue={minValue}
                setMinValue={setMinValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                searchByName={searchByName}
                setSearchByName={setSearchByName}
                cart={cart}
                setCart={setCart}
                cartQuantity={cartQuantity}
                setCartQuantity={setCartQuantity}
                order={order}
                setOrder={setOrder}
                loading={loading}
                setLoading={setLoading}
                valor={valor}
                setValor={setValor}
              />
            }
          />
          <Route
            path="toys"
            element={
              <Toys
                cards={cards}
                setCards={setCards}
                minValue={minValue}
                setMinValue={setMinValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                searchByName={searchByName}
                setSearchByName={setSearchByName}
                cart={cart}
                setCart={setCart}
                cartQuantity={cartQuantity}
                setCartQuantity={setCartQuantity}
                order={order}
                setOrder={setOrder}
                loading={loading}
                setLoading={setLoading}
                valor={valor}
                setValor={setValor}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                valor={valor}
                setValor={setValor}
                cartQuantity={cartQuantity}
                setCartQuantity={setCartQuantity}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default AppRoutes;
