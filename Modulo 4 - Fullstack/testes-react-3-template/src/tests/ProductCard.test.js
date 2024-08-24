import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

jest.mock("axios");

const axiosResponseMock = {
  title: "MacBook Pro",
  description:
    "MacBook Pro 2021 with mini-LED display may launch between September, November",
  price: 1749,
  thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
};

describe("Testando ProductCard", () => {
  beforeEach(() => {
    axios.mockReset(); //resetando o mock
  });

  it("Deve renderizar o ProductCard", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<ProductCard />);
    screen.logTestingPlaygroundURL();

    await waitFor(() => {});
    screen.logTestingPlaygroundURL();
  });

  it("Deve renderizar o loading antes de exibir o Produto", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<ProductCard />);

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();

    expect(screen.queryByText("MacBook Pro")).not.toBeInTheDocument();

    await waitFor(() => {});
  });

  it("renderiza o componente com dados do produto", async () => {
    axios.get.mockResolvedValue({ data: axiosResponseMock });

    render(<ProductCard />);

    expect(
      await screen.findByText(axiosResponseMock.title)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(axiosResponseMock.description)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(`$${axiosResponseMock.price}`)
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("img", {
        name: /thumbnail for macbook pro/i,
      })
    ).toBeInTheDocument();

    expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();

    screen.logTestingPlaygroundURL();
  });
});
