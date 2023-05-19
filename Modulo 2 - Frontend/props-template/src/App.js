import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nomeNovaGaragem = "Garagem do Ruan";

  const apresentaGaragem = (nomeDaGaragem) => {
    alert(`Boas vindas a ${nomeDaGaragem}`);
  };

  const carro1 = {
    nome: "Hb20",
    cor: "Prata",
    ano: "2017",
    flex: false,
  };

  const carro2 = {
    nome: "Hb20s",
    cor: "Azul",
    ano: "2020",
    flex: true,
  };

  const carro3 = {
    nome: "Hilux",
    cor: "Branca",
    ano: "2023",
    flex: true,
  };

  const carro4 = {
    nome: "Uno",
    cor: "Vermelho",
    ano: "2013",
    flex: false,
  };

  const carro5 = {
    nome: "Gol",
    cor: "Branco",
    ano: "2007",
    flex: false,
  };

  const carro6 = {
    nome: "Corsa",
    cor: "Azul",
    ano: "2019",
    flex: true,
  };

  const carro7 = {
    nome: "Fusca",
    cor: "Amarelo",
    ano: "2018",
    flex: false,
  };

  const carro8 = {
    nome: "Corolla",
    cor: "Preto",
    ano: "2019",
    flex: true,
  };

  return ( 
    <main>
      <Garagem 
        nome="Garagem da Labenu"
        func={apresentaGaragem}
        carro1={carro1}
        carro2={carro2}
        carro3={carro3}
        carro4={carro4}
      />
      
      <Garagem
        nome={nomeNovaGaragem}
        func={apresentaGaragem}
        carro1={carro5}
        carro2={carro6}
        carro3={carro7}
        carro4={carro8}
      />
    </main>
  );
}
