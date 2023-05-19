import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const resetForm = () => {
    console.log(`Nome: ${nome}\nIdade: ${idade} \nEmail: ${email}\nSenha: ${senha}`)
    setNome("");
    setIdade("");
    setEmail("");
    setSenha("");
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form id="form">
        <label htmlFor="nome">
          Nome:
          <Input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            id="nome"
            required
          />
        </label>
        <label htmlFor="idade">
          Idade:
          <Input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            id="idade"
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            required
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <Input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            id="senha"
            required
          />
        </label>
        <button onClick={resetForm}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
