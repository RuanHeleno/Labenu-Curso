import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import {
  Bottom,
  Container,
  Content,
  Item,
  Link,
  Text,
  Title,
  Top,
  TopItems,
} from "./styles";

const Footer = () => {
  return (
    <Content>
      <Container>
        <Top>
          <Title>Contato</Title>

          <TopItems>
            <Item>
              <AiFillInstagram size={25} />
              <Link
                href="https://www.instagram.com/ruanhelenoof/"
                target="_blank"
                rel="noreferrer"
              >
                ruanhelenoof
              </Link>
            </Item>

            <Item>
              <MdEmail size={25} />
              <Link href="mailto:ruanheleno.dev@gmail.com?subject=Space Station Contato">
                ruanheleno.dev@gmail.com
              </Link>
            </Item>

            <Item>
              <AiFillGithub size={25} />
              <Link
                href="https://github.com/RuanHeleno"
                target="_blank"
                rel="noreferrer"
              >
                RuanHeleno
              </Link>
            </Item>
          </TopItems>
        </Top>

        <Bottom>
          <Text>Todos os direitos reservados &copy; - 2023</Text>

          <Text>
            Desenvolvido por{" "}
            <Link
              href="https://github.com/RuanHeleno"
              target="_blank"
              rel="noreferrer"
            >
              Ruan Heleno - Desenvolvedor Web Frontend
            </Link>
          </Text>
        </Bottom>
      </Container>
    </Content>
  );
};

export default Footer;
