import styled from "styled-components";

export const Item = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;

  .loading {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  }

  article {
    border: 2px solid ${props => props.selected ? "red" : "black"};
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
  }

  .id {
    color: gray;
    font-size: 0.8rem;
  }
`;
