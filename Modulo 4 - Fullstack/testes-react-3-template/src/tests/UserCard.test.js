import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserCard from "../components/UserCard";

jest.mock("axios");

const axiosResponseMock = {
  firstName: "Oleta",
  lastName: "Abbott",
  bank: {
    cardNumber: "3589 6409 4947 0047",
    cardExpire: "10/23",
  },
};

describe("Testando UserCard", () => {
  beforeEach(() => {
    axios.get.mockReset(); // Resetando o mock
  });

  it("Deve renderizar o UserCard e suas propriedades", async () => {
    axios.get.mockResolvedValueOnce({ data: axiosResponseMock });

    render(<UserCard />);

    expect(
      await screen.findByText(
        `${axiosResponseMock.firstName} ${axiosResponseMock.lastName}`
      )
    ).toBeInTheDocument();

    expect(
      await screen.findByText(axiosResponseMock.bank.cardNumber)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(axiosResponseMock.bank.cardExpire)
    ).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
  });

  it("Deve renderizar o loading antes de exibir o Produto", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<UserCard />);

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();

    expect(screen.queryByText("MacBook Pro")).not.toBeInTheDocument();

    await waitFor(() => {});
  });
});
