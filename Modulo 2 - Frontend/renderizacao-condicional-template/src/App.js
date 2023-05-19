import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [screen, setScreen] = useState("login");

  const ElementRender = () => {
    if (screen === "login") {
      return <TelaLogin setScreen={setScreen} />;
    } else if (screen === "cadastro") {
      return <TelaCadastro setScreen={setScreen} />;
    } else if (screen === "cadastroCompleto") {
      return <TelaUsuarioCadastrado setScreen={setScreen} />;
    } else {
      return alert(`Valor da tela (${screen}) não encontrado!`)
    }
  };

  return (
    <MainContainer>
      <GlobalStyled />
      {ElementRender()}
    </MainContainer>
  );
}

export default App;
