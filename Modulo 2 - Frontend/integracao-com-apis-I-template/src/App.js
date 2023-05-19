import React, { useEffect, useState } from "react";
import axios from "axios";

import AddUsuario from "./Componentes/AddUsuario/AddUsuario";
import Usuario from "./Componentes/Usuario/Usuario";

const headers = {
  headers: {
    Authorization: "ruan-rocha-ozemela",
  },
};

const api_url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    try {
      getAllUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAllUsers = async () => {
    await axios
      .get(api_url, headers)
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <>
      <p>
        Para esta aula usaremos a{" "}
        <a
          href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro"
          target="_blank"
          rel="noreferrer"
        >
          API Labenusers
        </a>
      </p>
      <AddUsuario api_url={api_url} headers={headers} />
      <hr />
      {usuarios.map((usuario) => {
        return (
          <Usuario
            key={usuario.id}
            usuario={usuario}
            api_url={api_url}
            headers={headers}
          />
        );
      })}
    </>
  );
}

export default App;
