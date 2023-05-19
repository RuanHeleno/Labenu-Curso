import { useForm } from "../../hooks/useForm";
import { ContainerForm, ContainerSignup, Input } from "./styled";

export default function Signup() {
  const [form, onChange, setForm] = useForm({
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const enviarCadastro = (e) => {
    e.preventDefault();

    //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
    if (form.password === form.confirmPassword) {
      console.log(form.user, form.email, form.password, form.confirmPassword);

      setForm({
        user: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      alert("Senha digitada incorreta");
    }
  };

  return (
    <ContainerSignup>
      <ContainerForm onSubmit={enviarCadastro}>
        <label htmlFor="nome">Nome de usuario:</label>
        <Input
          type="text"
          id="nome"
          name="user"
          value={form.user}
          onChange={onChange}
          placeholder="username"
          required
        />
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          type="password"
          id="senha"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Crie sua senha"
          required
        />
        <label htmlFor="confirma-senha">Confirmação de senha:</label>
        <Input
          type="password"
          id="confirma-senha"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onChange}
          placeholder="Confirme a senha"
          required
        />
        <button>Cadastrar</button>
      </ContainerForm>
    </ContainerSignup>
  );
}
