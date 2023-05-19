import React from "react";

const InfosUsuario = (props) => {

  const { titulo, imagem } = props;
  
  return (
    <div className="autor">
      <figure>
        <img src={imagem} alt="Ícone do autor" />
      </figure>
      <h4>
        <b>Autor:</b> {titulo}
      </h4>
    </div>
  );
};

export default InfosUsuario;
