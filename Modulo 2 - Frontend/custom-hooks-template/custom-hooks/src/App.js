import { BASE_URL, Base_URL_HP } from "./constants/constants";

import { useRequestData } from "./hooks";

import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { Title, NameContainer, PostContainer } from "./style";

function App() {
  const [nomes, isLoadingNome, isErrorNome] = useRequestData(
    `${BASE_URL}users`,
    []
  );

  const [postagens, isLoadingPostagem, isErrorPostagem] = useRequestData(
    `${BASE_URL}comments`,
    []
  );

  const [personagens, isLoadingPersonagem, isErrorPersonagens] = useRequestData(
    `${Base_URL_HP}characters`,
    []
  );

  const renderNomes = nomes.map((usuario) => {
    return (
      <Card
        key={usuario.id}
        text={usuario.name}
        backgroudColor={"nome"}
        textColor={"nome"}
      />
    );
  });

  const renderPostagens = postagens.map((post) => {
    return (
      <Card
        key={post.id}
        text={post.body}
        backgroudColor={"#1dc690"}
        textColor={"#ffffff"}
      />
    );
  });

  const renderPersonagens = personagens.map((post) => {
    return (
      <Card
        key={post.id}
        text={post.name}
        backgroudColor={"#1dc690"}
        textColor={"#ffffff"}
      />
    );
  });

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoadingNome && <p>Carregando usuários...</p>}
        {!isLoadingNome && isErrorNome && <p>Ocorreu um erro</p>}
        {!isLoadingNome && nomes && nomes.length > 0 && renderNomes}
        {!isLoadingNome && !isErrorNome && nomes && nomes.length === 0 && (
          <p>Nenhum usuário cadastrado</p>
        )}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {isLoadingPostagem && <p>Carregando postagens...</p>}
        {!isLoadingNome && isErrorPostagem && <p>Ocorreu um erro</p>}
        {!isLoadingPostagem &&
          postagens &&
          postagens.length > 0 &&
          renderPostagens}
        {!isLoadingPostagem &&
          !isErrorPostagem &&
          postagens &&
          postagens.length === 0 && <p>Nenhuma postagem criada</p>}
      </PostContainer>

      <hr />
      <Title>Personagens de Harry Potter</Title>
      <PostContainer>
        {isLoadingPersonagem && <p>Carregando personagens...</p>}
        {!isLoadingNome && isErrorPersonagens && <p>Ocorreu um erro</p>}
        {!isLoadingPersonagem &&
          personagens &&
          personagens.length > 0 &&
          renderPersonagens}
        {!isLoadingPersonagem &&
          !isErrorPersonagens &&
          personagens &&
          personagens.length === 0 && <p>Nenhum personagem encontrando</p>}
      </PostContainer>
    </div>
  );
}

export default App;
