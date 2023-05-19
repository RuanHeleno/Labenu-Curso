import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const User = styled.div`
  border: black 1px solid;
  margin-top: 8px;
  width: 350px;
  padding: 8px;
`;
function Usuario(props) {
  const { api_url, headers } = props;
  const [usuario, setUsuario] = useState(props.usuario);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  const getUserById = async () => {
    await axios
      .get(`${api_url}/${usuario.id}`, headers)
      .then((response) => {
        setNome(response.data.name);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getUserById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editUser = (nome, email) => {
    const body = {
      name: nome,
      email,
    };

    axios
      .put(`${api_url}/${usuario.id}`, body, headers)
      .then(() => {
        alert("Usuário editado com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = () => {
    axios
      .delete(`${api_url}/${usuario.id}`, headers)
      .then((response) => {
        console.log(response);
        alert("Usuário deletado com sucesso!");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <User>
      {editar ? (
        <div>
          <p>Nome: {usuario.name}</p>
          <p>E-mail: {usuario.email}</p>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={() => editUser(nome, email)}>Enviar alterações</button>
        </div>
      ) : (
        <>
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>E-mail:</strong> {email}
          </p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={deleteUser}>Excluir</button>
    </User>
  );
}

export default Usuario;
