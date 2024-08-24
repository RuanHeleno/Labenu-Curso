import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";

import { login } from "../../api";
import { Menu } from "../../components";
import useForms from "../../hooks/useForms";
import { goToHome, goToSignUp } from "../../routes/coordinator";

import { GlobalContext } from "../../contexts/GlobalContext";

import { Container, Load, Message, MessageIcon, Send, SignUp, Title } from "./styled";

const Login = () => {
  const context = useContext(GlobalContext);
  const {
    setLogged,
    loadSignUpLogin,
    setLoadSignUpLogin,
    loginMessage,
    setLoginMessage,
  } = context;
  const { form, onChange } = useForms({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const sendLogin = async (e) => {
    e.preventDefault();
    setLoadSignUpLogin(true);
    setLoginMessage("");

    const body = {
      email: form.email,
      password: form.password,
    };

    const res = await login(body);
    setLoadSignUpLogin(false);
    setLogged(true);

    if (res !== "success") {
      setLoginMessage(res);
    } else goToHome(navigate);
  };

  return (
    <>
      <Menu />
      <Container>
        <Title>Login</Title>
        <form onSubmit={sendLogin}>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
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
              name="password"
              type="password"
              minLength={8}
              value={form.password}
              onChange={onChange}
              placeholder="Crie sua senha"
              required
            />
          </label>

          {loadSignUpLogin && (
            <Load>
              <MoonLoader color={"white"} size={40} />
            </Load>
          )}
          {!loadSignUpLogin && <Send>Entrar</Send>}
          <SignUp>
            Ainda não tem uma conta?
            <button onClick={() => goToSignUp(navigate)}>clique aqui</button>
          </SignUp>
        </form>

        <Message loginMessage={loginMessage}>
          <MessageIcon color={"red"} size={30} />
          {loginMessage}
        </Message>
      </Container>
    </>
  );
};

export default Login;
