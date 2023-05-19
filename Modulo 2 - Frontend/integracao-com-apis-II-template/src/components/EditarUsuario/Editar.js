import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ButtonNome,
  DeleteButton,
  ButtonContainer,
  MainContainer,
  InputContainer,
  SaveButton,
  CloseButton,
} from "./style";
import { AiOutlineDelete } from "react-icons/ai";
import { Input } from "../../Appstyle";

export const EditarUsuario = (props) => {
  const { BASE_URL, AUTH_TOKEN } = props;

  const [usuario, setUsuario] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [editar, setEditar] = useState(false);

  const getDadosUsuario = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${props.id}`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      setUsuario(res.data);
      setEmail(res.data.email);
      setName(res.data.name);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getDadosUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editaUsuario = async () => {
    const body = {
      name,
      email,
    };

    try {
      const res = await axios.put(`${BASE_URL}/${usuario.id}`, body, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      if (res.status === 200) {
        getDadosUsuario();
        setEditar(!editar);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const deletarUsuario = async () => {
    try {
      const res = await axios.delete(`${BASE_URL}/${usuario.id}`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      if (res.status === 200) {
        alert("usuario removido");
        // chama de novo o get usuarios pra atualizar a lista
        props.getUsuarios();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <MainContainer>
      {editar ? (
        <InputContainer>
          <Input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SaveButton onClick={editaUsuario}>Salvar</SaveButton>
          <CloseButton onClick={() => setEditar(!editar)}>Fechar</CloseButton>
        </InputContainer>
      ) : (
        <ButtonContainer>
          <ButtonNome onClick={() => setEditar(!editar)}>
            {usuario.name}
          </ButtonNome>
          <DeleteButton onClick={deletarUsuario}>
            <AiOutlineDelete />
          </DeleteButton>
        </ButtonContainer>
      )}
    </MainContainer>
  );
};
