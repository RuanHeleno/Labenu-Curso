import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  display: ${(props) => (props.displayMessage ? "block" : "none")};
  top: 0;
  z-index: 5;
  min-height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);

  .card {
    display: ${(props) => (props.displayMessage ? "flex" : "none")};
    flex-direction: column;
    position: relative;
    background-color: white;
    align-items: center;
    border-radius: 7px;
    padding: 4rem 2rem;
    width: 30vw;
    top: 30vh;
    left: 35vw;
  }

  .close {
    position: absolute;
    background-color: transparent;
    top: 2%;
    right: 2%;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .title {
    text-align: center;
    font-size: 2.5rem;
  }

  .text {
    font-weight: 700;
    font-size: 1.1rem;
  }

  @media (max-width: 1200px) {
    .card {
      width: 42vw;
      height: 35vh;
      top: 35vh;
      left: 30vw;
      padding: 4rem 1rem;
    }

    .text {
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    .card {
      width: 50vw;
    }
  }

  @media (max-width: 768px) {
    .card {
      left: 20vw;
      width: 60vw;
    }
  }

  @media (max-width: 600px) {
    .card {
      left: 15vw;
      width: 70vw;
    }
  }
`;
