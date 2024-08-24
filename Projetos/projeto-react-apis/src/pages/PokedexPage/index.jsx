import { useContext, useState } from "react";

import { GlobalContext } from "../../contexts/GlobalContext";
import { Menu, Pokemon } from "../../components";

import { Cards, Container, Message, Order, Title, Top } from "./styled";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedex } = context;
  const [filterBy, setFilterBy] = useState("crescente");

  const options = [
    {
      label: "Numérica: Crescente",
      value: "crescente",
    },
    {
      label: "Numérica: Decrescente",
      value: "decrescente",
    },
    {
      label: "Alfabética: A-Z",
      value: "a-z",
    },
    {
      label: "Alfabética: Z-A",
      value: "z-a",
    },
  ];

  return (
    <>
      <Menu />
      <Container>
        <Top>
          <Title>Meus Pokémons</Title>
          <Order>
            <label htmlFor="order">Filtro:</label>
            <select id="order" onChange={(e) => setFilterBy(e.target.value)}>
              {options.map((option, id) => (
                <option key={id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Order>
        </Top>

        <Cards>
          {pokedex && pokedex.length === 0 && <Message>Não há nenhum pokemon registrado na pokedex...</Message>}
          {pokedex &&
            pokedex.length > 0 &&
            pokedex
              .map((pokemon, id) => <Pokemon key={id} pokemon={pokemon} />)
              .sort((a, b) => {
                if (filterBy === "crescente")
                  return a.props.pokemon.id < b.props.pokemon.id ? -1 : 1;
                else if (filterBy === "decrescente")
                  return a.props.pokemon.id > b.props.pokemon.id ? -1 : 1;
                else if (filterBy === "a-z")
                  return a.props.pokemon.name < b.props.pokemon.name ? -1 : 1;
                else if (filterBy === "z-a")
                  return a.props.pokemon.name > b.props.pokemon.name ? -1 : 1;

                return a.props.pokemon.id < b.props.pokemon.id ? -1 : 1;
              })}
        </Cards>
      </Container>
    </>
  );
};

export default PokedexPage;
