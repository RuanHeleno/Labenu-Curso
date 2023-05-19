import axios from "axios";

import useForms from "../../hooks/useForms";
import { BASE_URL } from "../../constants/BASE_URL";

import { FormPost, Input, TextArea } from "./styled";

export default function CriarPost() {
  const { form, onChange } = useForms({ title: "", body: "" });

  const enviarPost = async (e) => {
    e.preventDefault();

    const body = {
      title: form.title,
      body: form.body,
    };

    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    await axios
      .post(`${BASE_URL}/posts`, body, config)
      .then((res) => console.log(res))
      .catch((err) => console.error(err.response.data));
  };

  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor="tituloPost">Título:</label>
      <Input
        placeholder="digite um título para o seu post"
        id="titulo"
        name="title"
        value={form.title}
        onChange={onChange}
        required
      />
      <label htmlFor="textoPost">Texto:</label>
      <TextArea
        placeholder="crie um post!"
        id="texto"
        name="body"
        value={form.body}
        onChange={onChange}
        required
      />
      <button>Enviar</button>
    </FormPost>
  );
}
