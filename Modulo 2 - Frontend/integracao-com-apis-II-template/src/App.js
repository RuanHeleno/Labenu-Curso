import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditarUsuario } from "./components/EditarUsuario/Editar";
import AddUsuario from "./components/CadastraUsuario/AddUsuario";
import { Header } from "./components/Header/Header";
import {
  ContainerPrincipal,
  ContainerBarra,
  ButtonCadastro,
  BoxCadastro,
} from "./Appstyle";

import { BASE_URL } from "./constantes/BASE_URL";
import { AUTH_TOKEN } from "./constantes/AUTH_TOKEN";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [pageFlow, setPageFlow] = useState(1);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [pesquisa, setPesquisa] = useState({ nome: "", email: "" });

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    try {
      const res = await axios.get(BASE_URL, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      setUsuarios(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const pesquisaUsuario = async (pesquisa) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/search?name=${nome}&email=${email}`,
        {
          headers: {
            Authorization: AUTH_TOKEN,
          },
        }
      );

      setUsuarios(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const onChangeName = (e) => {
    setNome(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const enviarDados = () => {
    const novaPesquisa = {
      nome: nome,
      email,
    };
    setPesquisa(novaPesquisa);

    setNome("");
    setEmail("");
  };

  useEffect(() => {
    pesquisaUsuario(pesquisa);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pesquisa]);

  const onClickVoltar = () => {
    getUsuarios();
    setPageFlow(1);
  };

  return (
    <div>
      <Header />
      <ContainerPrincipal>
        {pageFlow === 2 ? (
          <BoxCadastro>
            <button onClick={() => setPageFlow(1)}>Voltar</button>
            <AddUsuario
              getUsuarios={getUsuarios}
              BASE_URL={BASE_URL}
              AUTH_TOKEN={AUTH_TOKEN}
            />
          </BoxCadastro>
        ) : (
          <>
            <ContainerBarra>
              <div>
                <input
                  value={nome}
                  onChange={onChangeName}
                  placeholder="Nome"
                />
                <input
                  value={email}
                  onChange={onChangeEmail}
                  placeholder="Email"
                />
                <button type="submit" onClick={enviarDados}>
                  Pesquisar
                </button>
              </div>
              {pageFlow === 3 ? (
                <ButtonCadastro onClick={onClickVoltar}>Voltar</ButtonCadastro>
              ) : (
                <ButtonCadastro onClick={() => setPageFlow(2)}>
                  Cadastrar
                </ButtonCadastro>
              )}
            </ContainerBarra>
            {usuarios.map((usuario) => {
              return (
                <EditarUsuario
                  key={usuario.id}
                  id={usuario.id}
                  getUsuarios={getUsuarios}
                  setPageFlow={setPageFlow}
                  pageFlow={pageFlow}
                  BASE_URL={BASE_URL}
                  AUTH_TOKEN={AUTH_TOKEN}
                />
              );
            })}
          </>
        )}
      </ContainerPrincipal>
    </div>
  );
}

export default App;
