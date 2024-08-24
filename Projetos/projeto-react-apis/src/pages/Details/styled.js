import styled from "styled-components";

export const Container = styled.section`
  background-color: #5e5e5e;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-top: 1rem;
`;

export const Load = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.article`
  background-color: ${(props) => props.getBgCard};
  padding: 2rem 3rem;
  display: grid;
  grid-template-columns: 20vw 25vw 20vw 1fr;
  gap: 2rem;
  border-radius: 3rem;

  @media (max-width: 1024px) {
    grid-template-areas: "c d" "a b";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 600px) {
    grid-template-areas: "c d" "a ." "b .";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  figure {
    background-color: white;
    border-radius: 12px;
    text-align: center;
    height: 46%;
  }

  figure img {
    width: 80%;
  }

  @media (max-width: 1200px) {
    figure {
      height: 35%;
    }

    figure img {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    grid-area: a;
    max-height: 90vh;

    figure {
      height: 45%;
      max-width: 30vw;
    }

    figure img {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    figure {
      height: 45%;
      min-width: 40vw;
    }

    figure img {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    max-height: 40vh;

    figure {
      height: 45%;
      width: 100%;
    }

    figure img {
      width: 100%;
    }
  }
`;

export const Center = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .title {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    grid-area: b;
  }
`;

export const BaseStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  z-index: 2;

  .total {
    display: grid;
    grid-template-columns: 35% 7% 45%;
    gap: 1.5rem;
    border-top: 1px solid lightgray;
    padding-top: 0.3rem;
  }

  p {
    text-align: right;
  }

  .total_name {
    text-transform: ${(props) => (props.id === 0 ? "uppercase" : "capitalize")};
    font-size: 0.9rem;
    color: #4f4f4f;
  }

  .total_value {
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    .total {
      grid-template-columns: 25% 12% 1fr;
    }
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 35% 7% 45%;
  align-items: center;
  gap: 1.5rem;
  border-top: 1px solid lightgray;
  padding-top: 0.3rem;

  p {
    text-transform: ${(props) => (props.id === 0 ? "uppercase" : "capitalize")};
    font-size: 0.9rem;
    color: #4f4f4f;
    text-align: right;
  }

  .stat_name {
    width: 100%;
  }

  .stat_value {
    font-weight: 600;
  }

  .stat_bar .bar {
    background-color: ${(props) => props.getProgressBarColor};
    width: ${(props) => props.getProgressBarWidth};
  }

  @media (max-width: 1024px) {
    grid-template-columns: 25% 12% 1fr;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  margin-left: 2rem;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-area: c;
    margin-left: 0;
  }
`;

export const Top = styled.div`
  color: white;

  .id {
    font-weight: 700;
  }

  .title {
    font-size: 2.5rem;
    text-transform: capitalize;
    margin-top: -0.5rem;
  }
`;

export const Types = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Type = styled.p`
  background: url(${(props) => props.getBgType}) no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: default;
  width: 6vw;
  height: 4vh;

  @media (max-width: 1200px) {
    width: 7.5vw;
  }

  @media (max-width: 1024px) {
    width: 10vw;
  }

  @media (max-width: 768px) {
    width: 13vw;
  }

  @media (max-width: 600px) {
    width: 24vw;
  }
`;

export const Moves = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-height: 25vh;
  border-radius: 12px;
  min-height: 61vh;
  max-width: 20vw;
  overflow-y: auto;
  z-index: 3;

  .title {
    font-size: 1.5rem;
  }

  ::-webkit-scrollbar {
    display: block;
    width: 1.1rem;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 0 10px 10px 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 0 10px 10px 0;
    height: 25%;
  }

  @media (max-width: 1200px) {
    min-width: 22vw;
  }

  @media (max-width: 1024px) {
    min-width: 30vw;
    min-height: 43vh;
  }

  @media (max-width: 768px) {
    min-width: 40vw;
    min-height: 49vh;
  }

  @media (max-width: 600px) {
    min-width: 55vw;
    min-height: 31vh;
    z-index: 2;
  }
`;

export const Move = styled.p`
  background-color: #ececec;
  border-radius: 7px;
  width: fit-content;
  padding: 0 1rem;
  cursor: default;
  border: 1px solid transparent;
  transition: all 400ms ease-in-out;
  text-transform: capitalize;

  &:hover {
    background-color: transparent;
    border-color: black;
  }
`;

export const OfficialImage = styled.figure`
  margin-top: -22vh;
  z-index: 2;

  img {
    width: 100%;
  }

  @media (max-width: 1200px) {
    margin-top: -18vh;
    margin-left: -3vw;
    text-align: right;

    img {
      min-width: 16vw;
    }
  }

  @media (max-width: 1024px) {
    grid-area: d;
    max-height: 30vh;

    img {
      max-width: 25vw;
    }
  }

  @media (max-width: 600px) {
    img {
      max-width: 30vw;
      margin-top: 5vh;
    }
  }

  @media (max-width: 600px) {
    img {
      margin-top: 8vh;
    }
  }
`;

export const BgImage = styled.figure`
  position: absolute;
  width: 50%;
  text-align: right;
  margin-top: -18vh;
  right: -4.7vw;
  z-index: 1;

  img {
    width: 100%;
  }

  @media (max-width: 1200px) {
    right: 0;
    margin-top: -13vh;
    width: 55%;
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: -10vh;
    z-index: 0;
  }
`;
