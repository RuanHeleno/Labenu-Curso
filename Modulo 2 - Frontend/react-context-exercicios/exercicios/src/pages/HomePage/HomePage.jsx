import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

import Card from "../../components/Card";

import { Container, Button, Button2 } from "./styled";

function HomePage() {
  const context = useContext(GlobalContext);
  const {
    form,
    onChange,
    createUsers,
    users,
    getAllUsers,
    listed,
    setListed,
    loading,
  } = context;

  const enviarCadastro = async (e) => {
    e.preventDefault();

    createUsers(form.name, form.email);
  };

  const listado = () => {
    if (!listed) {
      getAllUsers();
      setListed(true);
    } else {
      setListed(false);
    }
  };

  return (
    <Container>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </label>

        <Button onClick={enviarCadastro}>Enviar</Button>
      </form>

      <Button2 onClick={listado}>Listar</Button2>
      {listed && users && loading && <p className="loading">Carregando...</p>}
      {users &&
        !loading &&
        users.map((user) => <Card key={user.id} user={user} />)}
    </Container>
  );
}

export default HomePage;
