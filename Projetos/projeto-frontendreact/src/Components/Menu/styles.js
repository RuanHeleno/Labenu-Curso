import styled from "styled-components";
import { Link } from "react-router-dom";

import { BsFillCartFill } from "react-icons/bs";

export const Container = styled.section`
  background-color: #010812b0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 2rem;
  position: fixed;
  width: 100vw;

  @media (max-width: 600px) {
    padding: 0.3rem .5rem;
  }
`;

export const Logo = styled.img`
  width: 12%;

  @media (max-width: 1024px) {
    width: 16%;
  }
  
  @media (max-width: 600px) {
    width: 40%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const ListItem = styled.li``;

export const Button = styled(Link)`
  cursor: pointer;
  background-color: transparent;
  font-size: 1.3rem;
  opacity: 1;
  transition: all 400ms ease-in-out;
  color: inherit;

  &:hover {
    opacity: 0.4;
  }
`;

export const Cart = styled(BsFillCartFill)`
  color: white;
  background-color: black;
  padding: 0.4rem 0.2rem;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 400ms ease-in-out;

  &:hover {
    border-color: aquamarine;
    background-color: transparent;
  }
`;

export const Quantity = styled.p`
  position: absolute;
  z-index: 2;
  top: 2vh;
  right: 1.7vw;
  background-color: red;
  border-radius: 50%;
  padding: 0.1rem 0.3rem;
  font-size: 0.7rem;
  cursor: default;
  display: ${(props) => (props.cartQuantity > 0 ? "block" : "none")};

  @media (max-width: 1024px) {
    top: 1vh;
    right: 3vw;
  }

  @media (max-width: 600px) {
    top: .2vh;
    right: .5vw;
  }
`;
