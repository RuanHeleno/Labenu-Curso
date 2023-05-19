import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    display: flex;
    gap: 1rem;
  }

  input {
    border-radius: 3px;
    width: 20vw;
    padding: 0.2rem;
  }
`;

export const Button = styled.button`
  width: 30%;
  margin: 0 auto;
  padding: .5rem 2rem;
  border-radius: 3px;
  cursor: pointer;
`;

export const Button2 = styled.button`
  width: 10%;
  margin: 0 auto;
  padding: .5rem 2rem;
  border-radius: 3px;
  cursor: pointer;
`;

