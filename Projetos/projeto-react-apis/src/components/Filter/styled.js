import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SelectQuantity = styled.select`
  min-width: 5vw;
  max-width: 10vw;
  border: 1px solid black;
  border-radius: 0.25em;
  padding: 0.2em 0.5em;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

  @media (max-width: 1024px) {
    max-width: 20vw;
  }
`;
