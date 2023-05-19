import { useState } from "react";

import { Item } from "./styled";

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, name } = props.user;
  const [selected, setSelected] = useState(false);

  const isSelected = () => {
    setSelected(!selected);
  };

  return (
    <Item selected={selected}>
      <article key={id} onClick={isSelected}>
        <p className="id">#{id}</p>
        <p className="nome">{name}</p>
      </article>
    </Item>
  );
};

export default Card;
