import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #5E5E5E;
  padding: 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  z-index: 9;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
`;

export const Load = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
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
