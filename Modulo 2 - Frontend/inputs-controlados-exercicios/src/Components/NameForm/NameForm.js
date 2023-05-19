import React, { useState } from "react";
import { Form, Input } from "../MainPage/styles";

const NameForm = (props) => {
  console.log(props);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  return (
    <Form>
      <label>
        Nome:
        <Input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Idade:
        <Input
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </label>
      <label>
        E-mail:
        <Input
          placeholder="usuario@usuario.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Confirmação de e-mail:
        <Input
          placeholder="usuario@usuario.com"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
      </label>
      <button onClick={props.sendData}>Enviar dados</button>
    </Form>
  );
};

export default NameForm;
