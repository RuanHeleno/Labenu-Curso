import axios from "axios";
import React, { useState } from "react";
import { InputCadastro, ContainerCadastro } from "./style";

function AddUsuario(props) {
  const { BASE_URL, AUTH_TOKEN } = props;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const postNovoUsuario = async () => {
    const body = {
      name: nome,
      email,
    };

    try {
      const res = await axios.post(BASE_URL, body, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      if (res.status === 201) {
        alert("usuario criado!");
        props.getUsuarios();
        setEmail("");
        setNome("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerCadastro>
      <h3>Cadastrar novo usuario</h3>
      <InputCadastro
        placeholder={"Nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <InputCadastro
        type="email"
        placeholder={"E-mail"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={postNovoUsuario}>Enviar</button>
    </ContainerCadastro>
  );
}

export default AddUsuario;
