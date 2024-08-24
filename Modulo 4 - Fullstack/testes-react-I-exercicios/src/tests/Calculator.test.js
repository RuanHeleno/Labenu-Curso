import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../components/Calculator";

describe("Testando Counter", () => {
  test("Aplicação é renderizada corretamente com os dígitos de operações +, -, *, e /.", async () => {
    render(<Calculator />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();

    expect(
      screen.getByText("0", {
        selector: ".sc-fqkvVR.jwkMWk",
      })
    ).toBeInTheDocument();

    expect(screen.getByText("/")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText(".")).toBeInTheDocument();
    expect(screen.getByText("C")).toBeInTheDocument();
    expect(screen.getByText("=")).toBeInTheDocument();
  });

  test("Ao clicar nos dígitos para realizar a multiplicação 5 * 2 e clicar em =, deve aparecer no resultado o valor 10", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("*"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("Ao clicar nos dígitos para realizar a divisão 30 / 2 e clicar em =, deve aparecer no resultado o valor 15", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("/"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));

    expect(screen.getByText("15")).toBeInTheDocument();
  });

  test("Ao clicar nos dígitos para realizar a subtração 20 - 2 e clicar em =, deve aparecer no resultado o valor 18", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("-"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));

    expect(screen.getByText("18")).toBeInTheDocument();
  });

  test("Ao clicar nos dígitos para realizar a soma 20 +_ 2 e clicar em =, deve aparecer no resultado o valor 22", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));

    expect(screen.getByText("22")).toBeInTheDocument();
  });

  test("Concatenar operações está funcionando corretamente (5 * 2 + 10 deve ser 20 e não 25)", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("*"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("="));

    expect(screen.getByText("20")).toBeInTheDocument();
  });

  test("Dividir por 0 gera NaN", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("/"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("="));

    expect(screen.getByText("Infinity")).toBeInTheDocument();
  });
});
