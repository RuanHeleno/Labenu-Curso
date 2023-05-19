import { Container } from "./style";

function CardVideo(props) {

  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <Container onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </Container>
  );
}

export default CardVideo;
