import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styled";

function TelaCadastro(props) {
  const { setScreen } = props;

  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={() => setScreen("cadastroCompleto")}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => setScreen("login")}>
          Já possuo um cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
