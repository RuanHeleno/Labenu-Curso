import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useForms from "../../hooks/useForms.js";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { baseURL } from "../../constants/baseURL.js";

import { FormContainer, InputContainer } from "./styled.js";

function LoginPage() {
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
      .post(`${baseURL}/users/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate);
      })
      .catch((err) => console.error(err.response.data));

    setLoading(false);
  };

  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={enviaLogin}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="nome@email.com"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            type="password"
            minLength={8}
            value={form.password}
            onChange={onChange}
            placeholder="Digite sua senha"
            required
          />
        </InputContainer>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <button onClick={() => goToFeed(navigate)}>Entrar</button>
        )}
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
