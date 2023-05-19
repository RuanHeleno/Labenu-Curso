import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";

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
  const [pesquisa, setPesquisa] = useState("");
  const [idFilter, setIdFilter] = useState("");
  const [type, setType] = useState("");
  const [order, setOrder] = useState("");

  return (
    <>
      <GlobalStyle />
      <Header
        idFilter={idFilter}
        setIdFilter={setIdFilter}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        setType={setType}
        setOrder={setOrder}
      />
      <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            return idFilter ? pokemon.id.includes(idFilter) : pokemon;
          })
          .filter((pokemon) => {
            return pokemon.name.english
              .toLowerCase()
              .includes(pesquisa.toLowerCase());
          })
          .filter((pokemon) => {
            return type !== ""
              ? pokemon.type[0].toLowerCase() === type
              : pokemon;
          })
          .sort((a, b) => {
            if (order === "decrescente")
              return a.name.english > b.name.english ? -1 : 1;
            else if (order === "crescente")
              return a.name.english < b.name.english ? -1 : 1;

            return pokemons;
          })
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
