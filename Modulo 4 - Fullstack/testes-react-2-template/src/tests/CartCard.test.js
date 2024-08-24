import { render, screen, fireEvent } from "@testing-library/react";

import CartCard from "../components/Cart/CartCard";

const CartMock = {
  id: "cart001",
  title: "Cart Legal",
  price: 100,
  image:
    "https://fastly.picsum.photos/id/847/200/300.jpg?hmac=c59lDNOau0hCfCBs141cA-vqX8QIRiqaVEnT3tRrDe0",
};

const addToCartMock = jest.fn();

describe("testando Cart Card", () => {
  it("deve renderizar Cart Card", () => {
    render(<CartCard product={CartMock} addToCart={addToCartMock} />);
  });

  it("deve renderizar Cart Card com a imagem, titulo, preço, quantidade e botão", () => {
    render(<CartCard product={CartMock} addToCart={addToCartMock} />);

    const title = screen.getByRole("heading", {
      name: /cart legal/i,
    });

    const price = screen.getByText(/\$100\.00/i);

    const quantidade = screen.getByText(/\$100\.00/i);

    const imagem = screen.getByRole("img", {
      name: /cart legal/i,
    });

    const botao = screen.getByRole("button", {
      name: /remove/i,
    });

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(imagem).toBeInTheDocument();
    expect(quantidade).toBeInTheDocument();
    expect(botao).toBeInTheDocument();
  });

  test("deve disparar função addCart quando clicado", () => {
    render(<CartCard product={CartMock} addToCart={addToCartMock} />);

    const botao = screen.getByRole("button", {
      name: /remove/i,
    });

    fireEvent.click(botao);
    expect(addToCartMock).toHaveBeenCalled();
    expect(addToCartMock).toReturn();
    expect(addToCartMock).toHaveBeenCalledWith(CartMock);
  });
});
