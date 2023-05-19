import Musicas from "../Musicas/Musicas";

function Playlists(props) {
  const { playlists, api_ul, headers } = props;

  return (
    <div>
      {playlists.map((playlist) => {
        return (
          <Musicas
            key={playlist.id}
            playlist={playlist}
            api_ul={api_ul}
            headers={headers}
          />
        );
      })}
    </div>
  );
}

export default Playlists;
