import axios from "axios";
import { useEffect, useState } from "react";

import {
  Botao,
  ContainerInputs,
  ContainerMusicas,
  InputMusica,
  Musica,
} from "./styled";

export default function Musicas(props) {
  const { api_ul, headers, playlist } = props;
  const [musicas, setMusicas] = useState([]);
  const [musica, setMusica] = useState("");
  const [artista, setArtista] = useState("");
  const [url, setUrl] = useState("");

  const getPlayListTracks = () => {
    axios
      .get(`${api_ul}/${playlist.id}/tracks`, headers)
      .then((response) => {
        setMusicas(response.data.result.tracks);
      })
      .catch((error) => console.error(error.response));
  };

  useEffect(() => {
    getPlayListTracks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicas]);

  const addTrackToPlaylist = () => {
    const body = {
      name: musica,
      artist: artista,
      url,
    };

    axios
      .post(
        `${api_ul}/${playlist.id}/tracks`,
        body,
        headers
      )
      .then((response) => {
        alert("Música adicionada com sucesso!");
      })
      .catch((error) => console.error(error.response));
  };

  const removeTrackFromPlaylist = (id) => {
    axios
      .delete(
        `${api_ul}/${playlist.id}/tracks/${id}`,
        headers
      )
      .then((response) => {
        alert("Música excluída com sucesso!");
      })
      .catch((error) => console.error(error.response));
  };

  return (
    <ContainerMusicas>
      <h2>{props.playlist.name}</h2>
      {musicas.map((musica) => {
        return (
          <Musica key={musica.id}>
            <h3>
              {musica.name} - {musica.artist}
            </h3>
            <audio src={musica.url} controls />
            <button onClick={() => removeTrackFromPlaylist(musica.id)}>X</button>
          </Musica>
        );
      })}
      <ContainerInputs>
        <InputMusica
          placeholder="artista"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
        />
        <InputMusica
          placeholder="musica"
          value={musica}
          onChange={(e) => setMusica(e.target.value)}
        />
        <InputMusica
          placeholder="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Botao onClick={addTrackToPlaylist}>Adicionar musica</Botao>
      </ContainerInputs>
    </ContainerMusicas>
  );
}
