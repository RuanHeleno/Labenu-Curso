import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { GlobalContext } from "../../contexts/GlobalContext";

import {
  Card,
  CardLeftTop,
  Id,
  Image,
  Image2,
  Left,
  LinkDetails,
  Capture,
  Right,
  RightImage,
  Title,
  Type,
  Types,
  Message,
  BgImage,
} from "./styled";

import bgCard from "../../assets/bgCard.png";

const Pokemon = (props) => {
  const { pokemon } = props;
  const context = useContext(GlobalContext);
  const {
    goToPokemon,
    getBgCard,
    getBgType,
    handlePokedex,
    pokedex,
  } = context;
  const navigate = useNavigate();
  const location = useLocation();

  const findPokemonInPokedex = pokedex.find((item) => item.id === pokemon.id);

  return (
    <Card getBgCard={() => getBgCard(pokemon)}>
      <Left>
        <CardLeftTop>
          <Id>#{pokemon.id}</Id>
          <Title>{pokemon.name}</Title>
          <Types>
            {pokemon.types.map((item, id) => (
              <Type key={id} getBgType={() => getBgType(item.type.name)}></Type>
            ))}
          </Types>
        </CardLeftTop>

        <LinkDetails onClick={() => goToPokemon(navigate, pokemon.id)}>
          Detalhes
        </LinkDetails>
      </Left>

      <Right>
        <RightImage>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </RightImage>

        <BgImage>
          <Image2 src={bgCard} alt={"Fundo"} />
        </BgImage>

        {location.pathname === "/" && findPokemonInPokedex && (
          <Message>Capturado!</Message>
        )}
        {(location.pathname === "/pokedex" || !findPokemonInPokedex) && (
          <Capture
            onClick={() => handlePokedex(pokemon, location.pathname === "/" ? "add" : "remove")}
            getButtonCardBg={location.pathname === "/" ? "white" : "#FF6262"}
            getButtonCardColor={location.pathname === "/" ? "black" : "white"}
          >
            {location.pathname === "/" ? "Capturar!" : "Excluir"}
          </Capture>
        )}
      </Right>
    </Card>
  );
};

export default Pokemon;
