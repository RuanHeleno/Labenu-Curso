import { Link } from "react-router-dom";
import LogoImage from "../../Assets/Logo.png";

import {
  Button,
  Cart,
  Container,
  List,
  ListItem,
  Logo,
  Nav,
  Quantity,
  Right,
} from "./styles";

const Menu = (props) => {
  const { cartQuantity } = props;

  return (
    <Container>
      <Link to={"/"}>
        <Logo src={LogoImage} alt="Logo" />
      </Link>

      <Right>
        <Nav>
          <List>
            <ListItem>
              <Button to={"/"}>Roupas</Button>
            </ListItem>
            <ListItem>
              <Button to={"/toys"}>Brinquedos</Button>
            </ListItem>
          </List>
        </Nav>

        <Link to="/cart">
          <Cart size={35} />
        </Link>

        <Quantity cartQuantity={cartQuantity}>
          {cartQuantity}
        </Quantity>
      </Right>
    </Container>
  );
};

export default Menu;
