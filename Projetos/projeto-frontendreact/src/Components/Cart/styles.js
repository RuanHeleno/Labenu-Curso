import styled from "styled-components";

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  width: 60%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    padding: .5rem;
    width: 95%;
  }
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 60vh;
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: var(--font-title);
  letter-spacing: 5px;
  font-weight: 100;
  cursor: default;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Valor = styled.div`
  display: ${(props) => (props.valor > 0 ? "flex" : "none")};
  justify-content: flex-start;
  font-size: 1.3rem;
  gap: 0.5rem;
`;
