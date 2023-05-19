import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const { nome, foto } = props.dataLogin;

  const login = () => {
    props.setPageFlow(2);
  };

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input
            type={"text"}
            value={nome}
            name="nome"
            onChange={props.onChangeLogin}
          />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
            type={"text"}
            value={foto}
            name="foto"
            onChange={props.onChangeLogin}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
