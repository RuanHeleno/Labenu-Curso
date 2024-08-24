import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import userEvent from "@testing-library/user-event";

describe("Testando ToDoList", () => {
  test("Deve renderizar o Título", () => {
    render(<TodoList />);

    const title = screen.getByText(/Todo List/i);

    expect(title).toBeInTheDocument();
  });

  test("O input deve iniciar vazio", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter a todo");

    expect(input).toHaveValue("");
  });

  test("Deve atualizar o valor do input ao digitar nele", async () => {
    const user = userEvent.setup();

    render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter a todo");
    await user.type(input, "bananinha");

    expect(input).toHaveValue("bananinha");
  });

  test("Deve renderizar uma nova tarefa ao apertar Enter", async () => {
    const user = userEvent.setup();

    render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter a todo");
    await user.type(input, "bananinha{enter}");

    const result = screen.getByText("bananinha");

    expect(result).toBeInTheDocument();
  });

  test("Deve alterar o status da tarefa quando for clicado", async () => {
    const user = userEvent.setup();

    render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter a todo");
    await user.type(input, "bananinha{enter}");

    const todoItem = screen.getByText("bananinha");

    const buttonToggle = screen.getByRole("button", {
      name: /toggle/i,
    });

    await user.click(buttonToggle);

    expect(todoItem).toHaveStyle("text-decoration: line-through");

    await user.click(buttonToggle);

    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("Deve remover a tarefa quando o botão de deletar for clicado", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter a todo");
    await user.type(input, "Tarefa de teste{enter}");

    const todoItem = screen.getByText("Tarefa de teste");

    const buttonDelete = screen.getByText("Delete");
    await userEvent.click(buttonDelete);

    expect(todoItem).not.toBeInTheDocument();
  });
});
