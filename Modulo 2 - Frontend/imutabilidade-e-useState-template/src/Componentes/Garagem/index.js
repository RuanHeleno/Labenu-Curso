import { useState } from 'react';

import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome, setNome }) {

  const [automovel, setAutomovel] = useState({
    modelo: "Corsa",
    cor: "Branco",
    ano: 2020,
    adicionadoPor: "Labenu",
    flex: false,
    mudarCarro: () => setAutomovel({
      modelo: "Uno",
      cor: "Prata",
      ano: 2017,
      adicionadoPor: "Ruan",
      flex: false,
    })
  });

  const [automovel2, setAutomovel2] = useState({
    modelo: "Hilux",
    cor: "Preto",
    ano: 2023,
    adicionadoPor: "Ruan",
    flex: true,
    mudarCarro: () => setAutomovel2({
      modelo: "Ferrari",
      cor: "Verde",
      ano: 2021,
      adicionadoPor: "Ruan",
      flex: true,
    })
  });

  const changeNameGarage = () => {
    setNome("Ruan");
  }

  return (
    <GaragemContainer>
      <h1>Garagem do(a) {nome}</h1>
      <Botao onClick={changeNameGarage}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionadoPor}
          flex={automovel.flex}
          mudarCarro={automovel.mudarCarro}
        />
        <Carro
          modelo={automovel2.modelo}
          cor={automovel2.cor}
          ano={automovel2.ano}
          adicionadoPor={automovel2.adicionadoPor}
          flex={automovel2.flex}
          mudarCarro={automovel2.mudarCarro}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
