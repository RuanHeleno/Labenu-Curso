import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  const { dataPostagem, onChangePostagem } = props;

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input
            id="titulo"
            name="titulo"
            value={dataPostagem.titulo}
            onChange={onChangePostagem}
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input
            id="foto"
            name="imagem"
            value={dataPostagem.imagem}
            onChange={onChangePostagem}
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            name="descricao"
            value={dataPostagem.descricao}
            onChange={onChangePostagem}
          />
        </StyledLabel>
        
        <SendButton />
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
