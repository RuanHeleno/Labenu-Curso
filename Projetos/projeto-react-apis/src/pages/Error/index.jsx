import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { GlobalContext } from "../../contexts/GlobalContext";

import { Container } from "./styled";
import { Menu } from "../../components";

const Error = () => {
  const context = useContext(GlobalContext);
  const { goToHome } = context;
  const navigate = useNavigate();

  return (
    <>
      <Menu />
      <Container>
        <article>
          <p>Desculpe, a página procurada não existe! :(</p>
          <button onClick={() => goToHome(navigate)}>
            <AiOutlineArrowLeft size={20} />
            Voltar para Tela Inicial
          </button>
        </article>
      </Container>
    </>
  );
};

export default Error;
