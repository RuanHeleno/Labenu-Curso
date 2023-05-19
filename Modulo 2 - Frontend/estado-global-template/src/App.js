import Router from "./Router/Router";
import styled from "styled-components";

export default function App() {
  return (
    <AppContainer>
      <h1 id="frutinhas">Labefrutas <span role="img" aria-label="frutinhas">🍌 🍉 🍇 🍓 </span></h1>
      <Router />
    </AppContainer>
  );
}
const AppContainer = styled.div`
   text-align: center;
`;