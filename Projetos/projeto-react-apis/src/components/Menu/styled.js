import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "a b c";
  padding: 0 2rem 1rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const LogoFigure = styled.figure`
  width: 100%;
  text-align: center;
  grid-area: b;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 50%;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  grid-area: c;
`;

export const LoginOrRegister = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    font-size: 1rem;
    font-weight: bold;
  }

  div p {
    font-weight: 300;
    font-size: .9rem;
  }

  div .welcome {
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const LinkStyled = styled.button`
  background-color: #33a4f5;
  border: 1px solid transparent;
  padding: 1rem 0;
  width: 25%;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  text-align: center;

  @media (max-width: 1200px) {
    width: 40%;
    padding: 0.8rem .5rem;
  }
`;

export const LinkStyledBack = styled.button`
  color: black;
  background-color: transparent;
  font-size: 1.2rem;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
`;

export const BackText = styled.p`
  font-weight: 700;
  text-decoration: underline;
`;

export const Capture = styled.button`
  cursor: pointer;
  font-family: "Poppins";
  font-weight: 500;
  background-color: ${(props) => props.getButtonCardBg};
  padding: 0.8rem 0;
  width: 25%;
  border-radius: 8px;
  z-index: 2;
  font-size: 1rem;
  color: white;

  @media (max-width: 1200px) {
    width: 50%;
    padding: 0.8rem .5rem;
  }
`;