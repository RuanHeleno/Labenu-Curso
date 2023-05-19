import React, { useEffect, useState } from "react";
import axios from "axios";

import Playlists from "./componentes/Playlists/Playlists";

const api_ul =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "ruan-rocha-ozemela",
  },
};

function App() {
  const [playlists, setPlaylists] = useState([]);

  const getAllPlaylists = () => {
    axios
      .get(api_ul, headers)
      .then((response) => {
        setPlaylists(response.data.result.list);
      })
      .catch((error) => console.error(error.response));
  };

  useEffect(() => {
    getAllPlaylists();
  }, []);

  return (
    <Playlists
      playlists={playlists}
      api_ul={api_ul}
      headers={headers}
    />
  );
}

export default App;
