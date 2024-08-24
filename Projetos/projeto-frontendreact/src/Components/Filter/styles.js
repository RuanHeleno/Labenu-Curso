import styled from "styled-components";

export const MainContent = styled.section`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20%;

  @media (max-width: 1024px) {
    width: 30%;
  }
`;

export const Label = styled.label`
  @media (max-width: 600px) {
    font-size: .8rem;
  }
`;

export const Order = styled.div`
  margin-left: auto;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const Select = styled.select`
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.2rem;
  width: 90%;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.2rem;
  width: 50%;
  transition: all 400ms ease-in-out;

  &:focus {
    width: 80%;
  }

  @media (max-width: 1024px) {
    width: 60%;

    &:focus {
      width: 90%;
    }
  }

  @media (max-width: 600px) {
    width: 80%;

    &:focus {
      width: 100%;
    }
  }
`;
