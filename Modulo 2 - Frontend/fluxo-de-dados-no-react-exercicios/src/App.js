import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
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
  const [pageFlow, setPageFlow] = useState(1);
  const [dataLogin, setDataLogin] = useState({
    nome: "",
    foto: "https://media.licdn.com/dms/image/D4D35AQGizNXFHvEjww/profile-framedphoto-shrink_400_400/0/1633561897374?e=1676930400&v=beta&t=PmmJOyBWbJafqN-A6pA73D9bJd1eBFmz4DAeQZcwcvs",
  });
  
  const [dataPostagem, setDataPostagem] = useState({
    titulo: "Um título",
    imagem: "https://picsum.photos/536/354",
    descricao: "Uma descrição",
  });

  const onChangeLogin = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePostagem = (e) => {
    setDataPostagem({
      ...dataPostagem,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header dataLogin={dataLogin} />

          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}
              dataLogin={dataLogin}
              onChangeLogin={onChangeLogin}
            />
          ) : (
            <FormularioPostagem
              dataPostagem={dataPostagem}
              onChangePostagem={onChangePostagem}
            />
          )}
        </aside>

        <TelaDaPostagem dataPostagem={dataPostagem} />
      </Container>
    </>
  );
}

export default App;
