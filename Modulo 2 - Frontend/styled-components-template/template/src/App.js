import { Garagem } from "./Componentes/Garagem";
import { GlobalStyle } from "./theme/GlobalStyle";

export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}