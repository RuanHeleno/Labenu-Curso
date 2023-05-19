import Musicas from "../Musicas/Musicas";

import { Button, Container, Input } from "./styled";

function Playlists(props) {
  const {
    playlists,
    api_url,
    headers,
    pesquisa,
    setPesquisa,
    pesquisaPlaylist,
    deletarPlaylist,
  } = props;

  return (
    <Container>
      <Input
        placeholder="Digite o nome da playlist"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
      <Button onClick={pesquisaPlaylist}>Pesquisar</Button>
      {playlists.map((playlist) => {
        return (
          <Musicas
            key={playlist.id}
            playlist={playlist}
            api_url={api_url}
            headers={headers}
            deletarPlaylist={() => deletarPlaylist(playlist.id)}
          />
        );
      })}
    </Container>
  );
}

export default Playlists;
