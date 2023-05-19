import React from "react";
import InfosUsuario from "../InfosUsuario";

import autor from "../../assets/Icone.png";

function CardVideo(props) {
  const { video, image, titulo } = props;

  return (
    <div className="box-pagina-principal" onClick={video}>
      <img src={image} alt="" />
      <InfosUsuario titulo={titulo} imagem={autor} />
    </div>
  );
}

export default CardVideo;
