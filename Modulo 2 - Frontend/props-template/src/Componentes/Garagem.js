import Carro from "./Carro";

function Garagem(props) {
  const { nome, func, carro1, carro2, carro3, carro4 } = props;

  return (
    <div>
      <h1>{nome}</h1>
      <button onClick={() => func(nome)}>Receber boas vindas</button>
      <Carro carro={carro1} />
      <Carro carro={carro2} />
      <Carro carro={carro3} />
      <Carro carro={carro4} />
    </div>
  );
}

export default Garagem;
