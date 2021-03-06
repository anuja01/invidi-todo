import { fireEvent, render, screen } from "@testing-library/react";
import AddTodo from "./AddTodo";

describe("renders add todo input", () => {
  //mock
  const createTodo = jest.fn();

  render(<AddTodo createTodo={createTodo} />);
  test("check if createTodo is called with input text value", () => {
    const addTodoButton = screen.getByText("Add Todo");
    expect(addTodoButton).toBeInTheDocument();

    const addTodoInput = screen.getByTestId("textField-addTodo");
    expect(addTodoInput).toBeInTheDocument();

    fireEvent.change(addTodoInput, { target: { value: "go shopping" } });
    fireEvent.click(addTodoButton);
    expect(createTodo).toHaveBeenCalledWith("go shopping");
  });
});
