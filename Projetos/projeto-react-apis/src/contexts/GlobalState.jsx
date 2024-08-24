import { useEffect, useState } from "react";

import { GlobalContext } from "./GlobalContext";
import { getPokemonData, getPokemons } from "../api";
import { goToHome, goToPokedex, goToPokemon } from "../routes/coordinator";

import poison from "../assets/poison.png";
import grass from "../assets/grass.png";
import fire from "../assets/fire.png";
import fly from "../assets/fly.png";
import water from "../assets/water.png";
import bug from "../assets/bug.png";
import normal from "../assets/normal.png";
import dark from "../assets/dark.png";
import dragon from "../assets/dragon.png";
import electric from "../assets/electric.png";
import fairy from "../assets/fairy.png";
import fighting from "../assets/fighting.png";
import ghost from "../assets/ghost.png";
import ground from "../assets/ground.png";
import ice from "../assets/ice.png";
import psychic from "../assets/psychic.png";
import rock from "../assets/rock.png";
import steel from "../assets/steel.png";

export default function GlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState(
    JSON.parse(localStorage.getItem("pokedex")) || []
  );
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [itensPerPage, setItensPerPage] = useState(30);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [capturedOrRemoved, setCapturedOrRemoved] = useState("");
  const [logged, setLogged] = useState(false);
  const [loadSignUpLogin, setLoadSignUpLogin] = useState(false);
  const [signUpMessage, setSignUpMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) setLogged(true);
  }, []);

  const loadPokemons = async () => {
    try {
      setLoading(true);

      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const result = await Promise.all(promises);

      setPokemons(result);

      setTotalPages(Math.ceil(data.count / itensPerPage));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, [page || itensPerPage]);

  const handlePokedex = (item, func) => {
    let arr;

    if (func === "add") {
      setCapturedOrRemoved("captured");
      arr = [...pokedex, item];
    } else {
      setCapturedOrRemoved("removed");
      arr = pokedex.filter((el) => el.id !== item.id);
    }

    setDisplayMessage(true);
    setPokedex(arr);
    localStorage.setItem("pokedex", JSON.stringify(arr));
  };

  const getBgCard = (item) => {
    switch (item.types[0].type.name) {
      case "poison":
        return "#AB31AA";
      case "grass":
        return "#729F92";
      case "water":
        return "#71C3FF";
      case "fire":
        return "#EAAB7D";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762";
      case "ice":
        return "#74AEA0";
      case "dragon":
        return "#004170";
      case "electric":
        return "#D1C125";
      case "ground":
        return "#D57110";
      case "fairy":
        return "#EA7BB6";
      case "fighting":
        return "#BA2561";
      case "rock":
        return "#A6A55A";
      case "psychic":
        return "#D55156";
      case "ghost":
        return "#3366AA";
      case "dark":
        return "#3A3345";
      case "steel":
        return "#919191";
      default:
        break;
    }
  };

  const getBgType = (type) => {
    switch (type) {
      case "grass":
        return grass;
      case "water":
        return water;
      case "fire":
        return fire;
      case "bug":
        return bug;
      case "normal":
        return normal;
      case "fly":
        return fly;
      case "poison":
        return poison;
      case "electric":
        return electric;
      case "ground":
        return ground;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "rock":
        return rock;
      case "psychic":
        return psychic;
      case "ghost":
        return ghost;
      case "ice":
        return ice;
      case "dragon":
        return dragon;
      case "dark":
        return dark;
      case "steel":
        return steel;
      default:
        break;
    }
  };

  const data = {
    pokemons,
    handlePokedex,
    loading,
    page,
    setPage,
    setItensPerPage,
    totalPages,
    pokedex,
    goToHome,
    goToPokedex,
    goToPokemon,
    getBgCard,
    getBgType,
    capturedOrRemoved,
    displayMessage,
    setDisplayMessage,
    logged,
    setLogged,
    loadSignUpLogin,
    setLoadSignUpLogin,
    signUpMessage,
    setSignUpMessage,
    loginMessage,
    setLoginMessage,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
