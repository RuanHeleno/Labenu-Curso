import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../../constants/BASE_URL";
import useForms from "../../hooks/useForms";
import { irParaCadastro, irParaFeed } from "../../routes/coordinator";

import { ContainerForm, ContainerLogin, Input } from "./styled";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { form, onChange } = useForms({ email: "", password: "" });

  const enviaLogin = async (e) => {
    e.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    setLoading(true);

    await axios
      .post(`${BASE_URL}/users/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        irParaFeed(navigate);
      })
      .catch((err) => console.log(err.response.data));

    setLoading(false);
  };

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          id="senha"
          name="password"
          type="password"
          minLength={8}
          value={form.password}
          onChange={onChange}
          placeholder="Digite sua senha"
          required
        />
        {loading ? <p>Carregando...</p> : <button>Fazer Login</button>}
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>
        Ainda não tenho uma conta
      </button>
    </ContainerLogin>
  );
}
