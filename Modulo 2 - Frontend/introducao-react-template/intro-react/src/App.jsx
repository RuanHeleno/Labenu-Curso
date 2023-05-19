import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const onClickBotao = (nome) => {
    alert(`${nome} clicou aqui!`);
  };

  return (
    <main className="container">
      <h1>Aprenda React na Labenu!</h1>
      <section>
        <article>
          <img className="Logo" src={logo} alt="logo" />
        </article>
        <article>
          <a href="https://labenu.com.br" target="_blank">
            Site da Labenu
          </a>
        </article>
        <article>
          <button onClick={() => onClickBotao("Ruan")}> Clique aqui! </button>
        </article>
      </section>
    </main>
  );
}

export default App;
