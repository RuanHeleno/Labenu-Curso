import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { goToFeed, goToLogin } from "../../routes/coordinator";
import { baseURL } from "../../constants/baseURL";
import useForms from "../../hooks/useForms";

import { FormContainer, InputContainer } from "./styled";

function SignUpPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { form, onChange } = useForms({
    email: "",
    senha: "",
    nomeUsuario: "",
    confirmaSenha: "",
  });

  const signUp = async (body) => {
    setLoading(true);

    await axios
      .post(`${baseURL}/users/signup`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToFeed(navigate);
      })
      .catch((err) => console.error(err.response.data));

    setLoading(false);
  };

  const enviarCadastro = (e) => {
    e.preventDefault();
    //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
    // não é necessário caso use o pattern para a mesma funcionalidade

    if (form.senha === form.confirmaSenha) {
      const dadosUsuario = {
        username: form.nomeUsuario,
        email: form.email,
        password: form.senha,
      };

      signUp(dadosUsuario);
    } else {
      alert("Digite a mesma senha nos campos 'senha' e 'confirmação de senha'");
    }
  };

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={enviarCadastro}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            value={form.nomeUsuario}
            pattern="[a-zA-Z\u00C0-\u00FF ]{3,}"
            title="Nome de usuário deve ter no mínimo 3 caracteres. Podendo conter letras, acentos e espaço"
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            type={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="nome@email.com"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="senha"
            type="password"
            minLength={8}
            value={form.senha}
            onChange={onChange}
            placeholder="Crie sua senha"
            required
          />
        </InputContainer>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <button onClick={() => goToFeed(navigate)}>Cadastrar</button>
        )}
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;
