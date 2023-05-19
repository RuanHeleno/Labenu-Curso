import axios from "axios";
import React, { useState } from "react";

function AddUsuario(props) {
  const { api_url, headers } = props;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    const body = {
      name: nome,
      email: email,
    };

    await axios
      .post(api_url, body, headers)
      .then((response) => {
        console.log(response.status);
        setNome("");
        setEmail("");
        alert("Usuário cadastrado com sucesso")
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <>
      <h3>Adicionar novo usuario</h3>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={createUser}>Enviar</button>
    </>
  );
}

export default AddUsuario;
