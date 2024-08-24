import GlobalState from "./contexts/GlobalState";
import AppRoutes from "./routes/Router";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <AppRoutes />
    </GlobalState>
  );
}

export default App;
