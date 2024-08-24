import { render, screen, fireEvent } from "@testing-library/react";

import ProductCard from "../components/ProductsList/ProductCard";

const productMock = {
  id: "prod001",
  title: "Produto Legal",
  price: 100,
  image:
    "https://fastly.picsum.photos/id/847/200/300.jpg?hmac=c59lDNOau0hCfCBs141cA-vqX8QIRiqaVEnT3tRrDe0",
};

const addToCartMock = jest.fn();

describe("testando Product Card", () => {
  it("deve renderizar product card", () => {
    render(<ProductCard product={productMock} addToCart={addToCartMock} />);
  });

  it("deve renderizar Product Card com a imagem, titulo, preço e botão", () => {
    render(<ProductCard product={productMock} addToCart={addToCartMock} />);

    const title = screen.getByRole("heading", {
      name: /produto legal/i,
    });

    const price = screen.getByText(/\$100\.00/i);

    const imagem = screen.getByRole("img", {
      name: /produto legal/i,
    });

    const botao = screen.getByRole("button", {
      name: /buy/i,
    });

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(imagem).toBeInTheDocument();
    expect(botao).toBeInTheDocument();
  });

  test("deve disparar função addCart quando clicado", () => {
    render(<ProductCard product={productMock} addToCart={addToCartMock} />);

    const botao = screen.getByRole("button", {
      name: /buy/i,
    });

    fireEvent.click(botao);
    expect(addToCartMock).toHaveBeenCalled();
    expect(addToCartMock).toBeCalledTimes(1);
    expect(addToCartMock).toReturn();
    expect(addToCartMock).toHaveBeenCalledWith(productMock);
  });
});
