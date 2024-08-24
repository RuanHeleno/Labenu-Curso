import styled from "styled-components";

export const Content = styled.footer`
  background-color: #010812;
`;

export const Container = styled.div`
  padding: 1rem 2rem;
`;

export const Top = styled.section`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TopItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: .2rem;
`

export const Bottom = styled.section`
  border-top: 1px solid white;
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    p:last-of-type {
      border-top: 1px solid white;
      padding-top: 1rem;
    }
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: .2rem;
  cursor: default;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  color: inherit;
  opacity: 1;
  transition: all 400ms ease-in-out;

  &:hover {
    opacity: .4;
  }
`;