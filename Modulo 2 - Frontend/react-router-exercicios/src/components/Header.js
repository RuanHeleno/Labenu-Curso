import { useNavigate } from "react-router-dom";
import { goToHome, goToProduct, goToProfile } from "../routes/coordinator";

import { StyledHeader, StyledButton } from "../style";

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHome(navigate)}>Ir para página inicial</StyledButton>
      <StyledButton onClick={() => goToProfile(navigate, "ruan")}>Ir para página de perfil</StyledButton>
      <StyledButton onClick={() => goToProduct(navigate, 1)}>Ir para página de Produto</StyledButton>
    </StyledHeader>
  );
}

export default Header;
