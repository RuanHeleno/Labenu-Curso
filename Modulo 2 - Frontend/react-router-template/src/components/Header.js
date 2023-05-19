import { useNavigate } from "react-router-dom";
import { goToHome, goToLogin, goToProfile } from "../routes/coordinator";

import { StyledHeader, StyledButton } from "../style";

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHome(navigate)}>Ir para página inicial</StyledButton>
      <StyledButton onClick={() => goToProfile(navigate, "ruan")}>Ir para página de perfil</StyledButton>
      <StyledButton onClick={() => goToLogin(navigate)}>Ir para página de login</StyledButton>
    </StyledHeader>
  );
}

export default Header;
