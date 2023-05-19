import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const { idSearch, setIdSearch, name, setName, setOrder } = props;

  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input
        type="number"
        placeholder="Buscar por id"
        value={idSearch}
        onChange={(e) => setIdSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select onChange={(e) => setOrder(e.target.value)}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
