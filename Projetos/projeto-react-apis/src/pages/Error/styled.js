import styled from "styled-components";

export const Container = styled.section`
  background-color: #5e5e5e;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: 100vh;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  article p {
    color: white;
    font-size: 2rem;
  }

  article button {
    padding: 0.5rem 2rem;
    background-color: transparent;
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
    text-decoration: underline;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
