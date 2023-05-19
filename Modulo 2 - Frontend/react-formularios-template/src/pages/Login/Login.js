import { useNavigate } from "react-router-dom";
import { irParaCadastro } from "../../Routes/coordinator";
import { ContainerForm, ContainerLogin, Input } from "./styled";
import { useForm } from "../../hooks/useForm";

export default function Login() {
  const navigate = useNavigate();
  const [form, onChange, setForm] = useForm({
    email: "",
    password: "",
  });

  const enviaLogin = (e) => {
    e.preventDefault();
    
    setForm({
      email: "",
      password: "",
    });

    console.log(form);
  };

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          id="senha"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="Digite sua senha"
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>
        Ainda não tenho uma conta
      </button>
    </ContainerLogin>
  );
}
