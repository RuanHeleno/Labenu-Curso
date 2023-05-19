import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  console.log(props)
  const {
    datanascimento,
    cidade,
    telefone,
    OnChangeDataNascimento,
    OnChangeCidade,
    OnChangeTelefone,
  } = props;

  return (
    <Form>
      <label>
        Data de Nascimento <br />
        <input
          placeholder="Data de nascimento"
          value={datanascimento}
          onChange={OnChangeDataNascimento}
        />
      </label>
      <label>
        Telefone <br />
        <input
          placeholder="Telefone"
          value={telefone}
          onChange={OnChangeTelefone}
        />
      </label>
      <label>
        Cidade <br />
        <input
          placeholder="Cidade"
          value={cidade}
          onChange={OnChangeCidade}
        />
      </label>
      <button onClick={props.sendForm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;
