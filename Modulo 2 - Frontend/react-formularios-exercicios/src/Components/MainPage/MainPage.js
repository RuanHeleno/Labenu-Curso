import React from "react";
import { MainContainer, Form, Input } from "./styles";
import { useForm } from "../../hooks/useForm";

function MainPage() {
  const initialState = {
    name: "",
    modules: 0,
    tecnologies: "",
    responsavel: "",
  };

  const [form, onChange, setForm] = useForm(initialState);

  const sendForm = (e) => {
    e.preventDefault();

    if (form.modules < 2)
      return alert("O número de módulos não pode ser menor que 2");
    if (form.name.length < 5)
      return alert("O nome do responsável não pode ter menos de 5 caracteres");

    setForm(initialState);
    alert("Curso cadastrado com sucesso!");

    console.log(form.name, form.modules, form.tecnologies, form.responsavel);
  };

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={sendForm}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          id="nome"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          id="modulos"
          name="modules"
          type="number"
          value={form.modules}
          onChange={onChange}
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input
          id="tecnologias"
          name="tecnologies"
          value={form.tecnologies}
          onChange={onChange}
          required
        />

        <label htmlFor="responsavel">Responsável: </label>
        <Input
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          onChange={onChange}
        />
        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
