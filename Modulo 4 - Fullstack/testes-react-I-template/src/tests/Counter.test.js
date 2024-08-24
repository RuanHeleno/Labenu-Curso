import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

describe("Testando Counter", () => {
  test("Deve aumentar em 3 o contador quando o botão de incremento for clicado 3 vezes", async () => {
    render(<Counter />);

    const button = screen.getByText("+");
    const contador = screen.getByText("0");

    expect(contador).toHaveTextContent("0");

    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    expect(contador).toHaveTextContent("3");
  });
});
