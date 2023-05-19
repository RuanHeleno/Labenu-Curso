import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  /*{
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  }
  */

  const [pokemon, setPokemon] = useState({
    name: "Pikachu",
    type: "Electric",
    evolved: false,
    weight: 6,
    color: "yellow",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    id: 0,
    changePokemon: () => {
      if (!pokemon.evolved) {
        setPokemon({
          ...pokemon,
          name: "Raichu",
          evolved: true,
          weight: 30,
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        });
      } else {
        alert("Pokemon já evoluido!");
      }
    },
  });

  const [pokemon2, setPokemon2] = useState({
    name: "Charizard",
    type: "Fire",
    evolved: true,
    weight: 90.5,
    color: "orangered",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    id: 1,
    changePokemon: () => {
      if (!pokemon2.evolved) {
        setPokemon2({
          ...pokemon2,
        });
      } else {
        alert("Pokemon já evoluido!");
      }
    },
  });

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard pokemon={pokemon} />
        {/* Crie aqui seus próximos pokemons! */}
        <PokemonCard pokemon={pokemon2} />
      </FlexContainer>
    </>
  );
}

export default App;
