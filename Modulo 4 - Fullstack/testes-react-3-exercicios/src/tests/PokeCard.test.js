import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Pokecard from "../components/Pokecard";

jest.mock("axios");

const axiosResponseMock = {
  name: "Bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1/",
  sprites: {
    front_default: "https://pokeapi.co/media/sprites/pokemon/1.png",
  },
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
};

describe("Testando PokeCard", () => {
  beforeEach(() => {
    axios.mockReset(); // Resetando o mock
  });

  it("Deve renderizar o PokeCard", async () => {
    axios.get.mockResolvedValueOnce({ data: axiosResponseMock });

    render(<Pokecard url={axiosResponseMock.url} />);

    expect(await screen.findByText(axiosResponseMock.name)).toBeInTheDocument();
  });

  it("renderiza o componente com dados do Pokémon", async () => {
    axios.get.mockResolvedValue({ data: axiosResponseMock });

    render(<Pokecard url={axiosResponseMock.url} />);

    expect(await screen.findByText(axiosResponseMock.name)).toBeInTheDocument();
    expect(screen.queryByText(/Loading\.\.\./i)).not.toBeInTheDocument();
    expect(screen.getByAltText(axiosResponseMock.name)).toBeInTheDocument();

    axiosResponseMock.types.forEach((type) => {
      expect(screen.getByText(type.type.name)).toBeInTheDocument();
    });

    screen.logTestingPlaygroundURL();
  });

  it("Deve renderizar o loading antes de exibir o Pokémon", async () => {
    axios.get.mockResolvedValueOnce(new Promise(() => {}));

    render(<Pokecard url={axiosResponseMock.url} />);

    expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument();
    expect(screen.queryByText(axiosResponseMock.name)).not.toBeInTheDocument();

    await waitFor(() => {});
  });

  it("Deve disparar a função openModal quando o card é clicado", async () => {
    const openModal = jest.fn();
    axios.get.mockResolvedValueOnce({ data: axiosResponseMock });

    render(<Pokecard url={axiosResponseMock.url} openModal={openModal} />);

    const card = await screen.findByText(axiosResponseMock.name);
    fireEvent.click(card);

    expect(openModal).toHaveBeenCalledWith(axiosResponseMock);
  });
});
