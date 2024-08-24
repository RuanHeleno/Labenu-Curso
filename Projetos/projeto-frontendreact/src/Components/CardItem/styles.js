import styled from "styled-components";

import { LazyLoadImage } from "react-lazy-load-image-component";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-radius: 10px;
  max-height: 100vh;
  box-shadow: 0 0 2px white;
  background-color: #010812;
  width: 32%;

  @media (max-width: 1024px) {
    width: 48%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Image = styled(LazyLoadImage)`
  width: 100%;
  border-bottom: 1px solid black;
  border-radius: 10px 10px 0 0;
  height: 60%;
  aspect-ratio: 1;
`;

export const Body = styled.div`
  padding: 0 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: default;
`;

export const Title = styled.h3`
  text-align: center;
  width: 100%;
`;

export const Price = styled.p``;

export const AddCarrinho = styled.button`
  padding: 1rem 2rem;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 5px;
  background-color: black;
  font-size: 1.1rem;
  transition: all 400ms ease-in-out;

  &:hover {
    border-color: aquamarine;
    background-color: transparent;
  }
`;
