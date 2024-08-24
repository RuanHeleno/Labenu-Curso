import styled from "styled-components";

export const Content = styled.section`
  width: 80vw;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90vw;
  }

  @media (max-width: 600px) {
    width: 95vw;
  }
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 600px) {
    gap: 2rem;
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  font-family: var(--font-title);
  letter-spacing: 5px;
  font-weight: 100;
  cursor: default;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Top = styled.div`
  
`;

export const Gallery = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
`;
