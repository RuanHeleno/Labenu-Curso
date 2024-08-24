import { useContext } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { GlobalContext } from "../../contexts/GlobalContext";

import { Button, Container, Number } from "./styles";

const Pagination = () => {
  const context = useContext(GlobalContext);
  const { page, setPage, totalPages } = context;

  const onLeftClick = () => {
    if (page > 0) setPage(page - 1);
  };

  const onRightClick = () => {
    if (page + 1 < totalPages) setPage(page + 1);
  };

  return (
    <Container>
      <Button onClick={onLeftClick}>
        <BiLeftArrowAlt />
      </Button>

      <Number>
        {page + 1}/{totalPages}
      </Number>

      <Button onClick={onRightClick}>
        <BiRightArrowAlt />
      </Button>
    </Container>
  );
};

export default Pagination;
