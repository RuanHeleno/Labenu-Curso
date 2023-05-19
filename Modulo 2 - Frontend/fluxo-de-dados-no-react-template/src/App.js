import { useState } from "react";

import styled, { createGlobalStyle } from "styled-components";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [data, setData] = useState({
    urlFoto: "",
    descricao: "",
    titulo: "",
  });

  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro data={data} handleData={handleData} />
        </aside>
        <TelaDaPostagem data={data} />
      </Container>
    </>
  );
}

export default App;
