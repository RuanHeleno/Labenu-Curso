function Carro(props) {
  const { nome, cor, ano, flex} = props.carro;

  return (
    <div>
      <h2>{nome}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? "Sim" : "Não"}</li>
      </ul>
    </div>
  );
}

export default Carro;
