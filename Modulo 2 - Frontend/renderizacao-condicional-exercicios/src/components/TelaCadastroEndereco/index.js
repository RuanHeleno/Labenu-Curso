import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styles";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro de Endereço </h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numero">
          Número:
          <Input type="number" id="numero" />
        </StyledLabel>
        <StyledLabel htmlFor="tel">
          Telefone:
          <Input type="tel" id="tel" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <BackToLoginButton onClick={() => props.mudarTela(4)}>
          Cadastrar
        </BackToLoginButton>
        <SendButton onClick={() => props.mudarTela(2)}>
          Voltar ao cadastro
        </SendButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
