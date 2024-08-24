import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  background-color: ${(props) => props.getBgCard};
  padding: 1rem;
  font-family: "Inter";
  height: 25vh;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 1200px) {
    height: 26vh;
  }
`;

export const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardLeftTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Id = styled.p`
  color: white;
  font-weight: 300;
`;

export const Title = styled.h3`
  text-transform: capitalize;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: white;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
`;

export const Types = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Type = styled.p`
  background: url(${(props) => props.getBgType}) no-repeat center center;
  background-size: cover;
  padding: 0.5rem 1rem;
  cursor: default;
  width: 5vw;
  height: 3.5vh;
  border-radius: 7px;

  @media (max-width: 1200px) {
    width: 7vw;
  }

  @media (max-width: 768px) {
    width: 10vw;
  }

  @media (max-width: 600px) {
    width: 22vw;
  }
`;

export const LinkDetails = styled.button`
  background-color: transparent;
  color: white;
  text-decoration: underline;
  font-family: "Poppins";
  font-weight: 700;
  margin-top: auto;
  width: fit-content;
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightImage = styled.figure`
  z-index: 2;
  width: 100%;
  margin-top: -9vh;
  text-align: right;
`;

export const Image = styled.img`
  max-width: 11vw;

  @media (max-width: 1200px) {
    max-width: 10vw;
  }

  @media (max-width: 1024px) {
    max-width: 13vw;
  }

  @media (max-width: 768px) {
    max-width: 15vw;
  }

  @media (max-width: 600px) {
    max-width: 30vw;
    margin-top: 3vh;
  }
`;

export const BgImage = styled.figure`
  position: absolute;
  width: 15%;
  margin-left: -2.8vw;
  margin-top: -2vh;
  z-index: 1;

  @media (max-width: 1200px) {
    margin-left: -3.3vw;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    width: 18%;
  }

  @media (max-width: 600px) {
    width: 50%;
    margin-left: -15vw;
  }
`;

export const Image2 = styled.img`
  width: 100%;
`;

export const Message = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: auto;
  border: 1px solid white;
  padding: 0.4rem 0;
  border-radius: 7px;
  cursor: default;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0.4rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0;
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    padding: 0.4rem 0.5rem;
  }
`;

export const Capture = styled.button`
  cursor: pointer;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1rem;
  background-color: ${(props) => props.getButtonCardBg};
  color: ${(props) => props.getButtonCardColor};
  padding: 0.4rem 0;
  border-radius: 8px;
  width: 100%;
  margin: auto 0 0 auto;
  z-index: 4;

  @media (max-width: 1024px) {
    width: 13vw;
  }

  @media (max-width: 768px) {
    width: 16vw;
  }

  @media (max-width: 600px) {
    width: 26vw;
  }
`;
