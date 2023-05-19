import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {
  const { data, handleData } = props;

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input
            id="foto"
            name="urlFoto"
            value={data.urlFoto}
            onChange={handleData}
          />
        </StyledLabel>

        <StyledLabel htmlFor="titulo">
          Titulo:
          <input
            id="title"
            name="titulo"
            value={data.titulo}
            onChange={handleData}
          />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            name="descricao"
            value={data.descricao}
            onChange={handleData}
          />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
