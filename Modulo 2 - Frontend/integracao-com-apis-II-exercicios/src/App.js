import React, { useEffect, useState } from "react";
import axios from "axios";

import Playlists from "./componentes/Playlists/Playlists";

import { BASE_URL as api_url } from "./constantes/BASE_URL";
import { AUTH_TOKEN } from "./constantes/AUTH_TOKEN";

const headers = {
  headers: {
    Authorization: AUTH_TOKEN,
  },
};

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const getAllPlaylists = async () => {
    await axios
      .get(api_url, headers)
      .then((response) => {
        setPlaylists(response.data.result.list);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    getAllPlaylists();
  }, []);

  const pesquisaPlaylist = async () => {
    if (pesquisa === "") {
      getAllPlaylists();
      return;
    }

    try {
      const res = await axios.get(`${api_url}/search?name=${pesquisa}`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      setPlaylists(res.data.result.playlist);
    } catch (error) {
      console.log(error.response);
    }
  };

  const deletarPlaylist = async (id) => {
    try {
      const res = await axios.delete(`${api_url}/${id}`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      if (res.status === 200) {
        alert("Playlist removida");
        // chama de novo o getAllPlaylists pra atualizar a lista
        getAllPlaylists();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Playlists
      playlists={playlists}
      api_url={api_url}
      headers={headers}
      pesquisa={pesquisa}
      setPesquisa={setPesquisa}
      pesquisaPlaylist={pesquisaPlaylist}
      deletarPlaylist={deletarPlaylist}
    />
  );
}

export default App;
