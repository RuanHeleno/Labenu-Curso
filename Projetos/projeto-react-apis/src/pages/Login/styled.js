import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: #5e5e5e;
  padding: 2rem;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  form label {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: white;
  }

  form label span {
    color: red;
  }

  form label input {
    width: 20vw;
    padding: 0.2rem;
    border-radius: 3px;
    border: 2px solid transparent;
    transition: all 400ms ease-in-out;

    &:focus {
      border-color: green;
    }
  }

  @media (max-width: 1024px) {
    form label input {
      width: 30vw;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    form label input {
      width: 40vw;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
`;

export const Send = styled.button`
  width: 50%;
  padding: .5rem 0;
  border-radius: 5px;
  background-color: darkgreen;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 400ms ease-in-out;
  margin: .5rem auto 0;

  &:hover {
    border-color: black;
    background-color: transparent;
  }
`;

export const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 1rem;

  button {
    background-color: transparent;
    color: white;
    text-decoration: underline;
    font-size: 1.1rem;
    cursor: pointer;
    text-transform: capitalize;
  }
`;

export const Load = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Message = styled.p`
  display: ${(props) => (props.loginMessage !== "" ? "flex" : "none")};
  color: ${(props) => (props.loginMessage !== "Cadastro realizado com sucesso!" ? "#E08E6D" : "#A4D0A4")};
  justify-content: center;
  align-items: center;
  gap: .5rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  width: 100%;
`;

export const MessageIcon = styled(AiOutlineClose)`
  display: ${(props) => (props.loginMessage !== "Cadastro realizado com sucesso!" ? "block" : "none")};
`;