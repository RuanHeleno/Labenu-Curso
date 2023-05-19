import { Content } from "./style"

export function Carro(props) {
    return (
      <Content>
        <h2>Meu carro</h2>
        <ul>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </ul>
      </Content>
    );
  }
  
