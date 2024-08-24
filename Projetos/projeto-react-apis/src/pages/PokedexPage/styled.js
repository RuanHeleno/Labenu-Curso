import styled from "styled-components";

export const Container = styled.section`
  background-color: #5e5e5e;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Top = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
`;

export const Order = styled.div`
  display: flex;
  gap: 1rem;

  label {
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
  }

  select {
    border-radius: 3px;
  }

  option {
    border-radius: 0;
  }
`;

export const Message = styled.p`
  width: 100vw;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
`;

export const Cards = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    min-width: 100%;
  }
`;
