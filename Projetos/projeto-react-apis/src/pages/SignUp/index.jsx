import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import { AiOutlineClose } from "react-icons/ai";

import { signUp } from "../../api";
import { Menu } from "../../components";
import useForms from "../../hooks/useForms";
import { goToLogin } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";

import { Container, Load, Login, Message, Send, Title } from "./styled";

const SignUp = () => {
  const context = useContext(GlobalContext);
  const {
    loadSignUpLogin,
    setLoadSignUpLogin,
    signUpMessage,
    setSignUpMessage,
    setLoginMessage,
  } = context;
  const { form, onChange } = useForms({
    email: "",
    senha: "",
    nomeUsuario: "",
    confirmaSenha: "",
  });
  const navigate = useNavigate();

  const sendSignUp = async (e) => {
    e.preventDefault();
    setLoadSignUpLogin(true);
    setSignUpMessage("");

    const dadosUsuario = {
      username: form.nomeUsuario,
      email: form.email,
      password: form.senha,
    };

    const res = await signUp(dadosUsuario);
    setLoadSignUpLogin(false);
    
    if (res === "success") {
      setLoginMessage("Cadastro realizado com sucesso!");
      goToLogin(navigate);
    } else setSignUpMessage(res);
  };

  return (
    <>
      <Menu />
      <Container>
        <Title>Cadastro</Title>
        <form onSubmit={sendSignUp}>
          <label htmlFor="nome">
            Nome de usuario:
            <input
              id="nome"
              name="nomeUsuario"
              pattern="[a-zA-Z\u00C0-\u00FF ]{3,}"
              title="Nome de usuário deve ter no mínimo 3 caracteres. Podendo conter letras, acentos e espaço"
              value={form.nomeUsuario}
              onChange={onChange}
              required
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type={"email"}
              value={form.email}
              onChange={onChange}
              placeholder="nome@email.com"
              required
            />
          </label>

          <label htmlFor="senha">
            Senha:
            <input
              id="senha"
              name="senha"
              type="password"
              minLength={8}
              value={form.senha}
              onChange={onChange}
              placeholder="Crie sua senha"
              required
            />
          </label>

          <label htmlFor="confirma-senha">
            Confirmação de senha:
            <input
              id="confirma-senha"
              name="confirmaSenha"
              type={"password"}
              value={form.confirmaSenha}
              onChange={onChange}
              placeholder="Confirme a senha"
              pattern={`${form.senha}`}
              title="confirme a senha digitada"
              required
            />
          </label>

          {loadSignUpLogin && (
            <Load>
              <MoonLoader color={"white"} size={40} />
            </Load>
          )}
          {!loadSignUpLogin && <Send>Enviar</Send>}
          <Login>
            Já tem uma conta?
            <button onClick={() => goToLogin(navigate)}>clique aqui</button>
          </Login>
        </form>
        
        <Message signUpMessage={signUpMessage}>
          <AiOutlineClose color={"red"} size={30} />
          {signUpMessage}
        </Message>
      </Container>
    </>
  );
};

export default SignUp;
