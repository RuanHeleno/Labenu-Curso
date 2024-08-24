import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { GlobalContext } from "../../contexts/GlobalContext";

import { Container } from "./styled";

const CapturedOrRemoved = () => {
  const context = useContext(GlobalContext);
  const { capturedOrRemoved, displayMessage, setDisplayMessage } = context;

  return (
    <Container displayMessage={displayMessage} onClick={() => setDisplayMessage(false)}>
      <article className="animate__animated animate__zoomIn animate__faster card">
        <button className="close" onClick={() => setDisplayMessage(false)}>
          {<AiOutlineClose size={30} />}
        </button>

        {capturedOrRemoved === "captured" && (
          <>
            <h2 className="title">Gotcha!</h2>

            <p className="text">O Pokémon foi adicionado a sua Pokédex</p>
          </>
        )}
        {capturedOrRemoved !== "captured" && (
          <>
            <h2 className="title">Oh, no!</h2>

            <p className="text">O Pokémon foi removido da sua Pokedéx</p>
          </>
        )}
      </article>
    </Container>
  );
};

export default CapturedOrRemoved;
