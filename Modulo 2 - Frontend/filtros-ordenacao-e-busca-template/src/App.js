import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;

function App() {
  const [idSearch, setIdSearch] = useState("");
  const [order, setOrder] = useState("crescente");
  const [name, setName] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) =>
    idSearch || name
      ? pokemon.id === idSearch || pokemon.name.english === name
      : pokemon
  );

  return (
    <>
      <GlobalStyle />
      <Header
        idSearch={idSearch}
        setIdSearch={setIdSearch}
        name={name}
        setName={setName}
        setOrder={setOrder}
      />
      <CardsContainer>
        {filteredPokemons
          .sort((a, b) => (order === "crescente" ? a.id - b.id : b.id - a.id))
          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;
