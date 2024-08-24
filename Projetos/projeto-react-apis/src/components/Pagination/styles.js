import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  border: 1px solid white;

  * {
    color: black;
  }

  &:hover {
    background-color: transparent;

    * {
      color: white;
    }
  }
`;

export const Number = styled.p`
  border: 1px solid white;
  padding: 0.3rem 1rem;
  border-radius: 3px;
  background-color: white;
  cursor: default;
`;
