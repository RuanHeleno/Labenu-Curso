import { TitleHeader, Left, Perfil } from "./styled";

export const Header = (props) => {
  const { nome, foto } = props.dataLogin;

  return (
    <TitleHeader>
      <Left>
        <Perfil src={foto} alt={nome} />
        {nome}
      </Left>
      Insta4
    </TitleHeader>
  );
};
