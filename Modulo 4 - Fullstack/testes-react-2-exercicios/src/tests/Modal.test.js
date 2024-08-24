import { render, screen, fireEvent } from "@testing-library/react";

import Modal from "../components/Modal";

const activeModal = {
  id: "1",
  sprites: {
    front_default:
      "https://fastly.picsum.photos/id/847/200/300.jpg?hmac=c59lDNOau0hCfCBs141cA-vqX8QIRiqaVEnT3tRrDe0",
  },
  name: "Bulbasaur",
  types: [{ type: { name: "electric" } }, { type: { name: "flying" } }],
  weight: 69,
  height: 7,
};

const closeModal = jest.fn();

describe("testando Modal", () => {
  it("deve renderizar Modal", () => {
    render(<Modal activeModal={activeModal} closeModal={closeModal} />);
  });

  it("deve renderizar Modal com as propriedades usadas: id, sprites.front_default, name, types.type.name, weight, height", () => {
    render(<Modal activeModal={activeModal} closeModal={closeModal} />);

    const image = screen.getByAltText(activeModal.name);
    expect(image).toBeInTheDocument();

    const name = screen.getByText(activeModal.name);
    expect(name).toBeInTheDocument();

    const electricType = screen.getByText("electric");
    const flyingType = screen.getByText("flying");
    expect(electricType).toBeInTheDocument();
    expect(flyingType).toBeInTheDocument();

    const weight = screen.getByText(`${activeModal.weight / 10} kg`);
    const height = screen.getByText(`${activeModal.height / 10} m`);
    expect(weight).toBeInTheDocument();
    expect(height).toBeInTheDocument();

    const closeButton = screen.getByText("❌");
    expect(closeButton).toBeInTheDocument();
  });

  it("Deve fechar o modal ao clicar no botão", () => {
    render(<Modal activeModal={activeModal} closeModal={closeModal} />);

    const closeButton = screen.getByText("❌");
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(closeModal).toHaveBeenCalled();
  });
});
