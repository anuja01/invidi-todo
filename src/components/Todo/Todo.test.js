import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe("render single todo", () => {
  //mock
  const updateTodo = jest.fn();
  const removeTodo = jest.fn();
  const todo = () =>
    render(
      <Todo
        toggleTodo={jest.fn()}
        todo="study"
        completed={false}
        id="1"
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    );
  test("render todo", () => {
    todo();
    const renderTodo = screen.getByText("study");
    expect(renderTodo).toBeInTheDocument();
  });

  test("render edit button and edit calling with proper parameters", () => {
    todo();
    const editButton = screen.getByText("Edit");
    expect(editButton).toBeInTheDocument();
    userEvent.click(editButton);
    const editInput = screen.getByTestId("textField-editTodo");
    fireEvent.change(editInput, { target: { value: "go shopping" } });
    const saveButton = screen.getByText("Save Todo");
    userEvent.click(saveButton);
    expect(updateTodo).toHaveBeenCalledWith("1", "go shopping");
  });

  test("render delete button and delete is calling with proper parameters", () => {
    todo();
    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
    userEvent.click(deleteButton);
    expect(removeTodo).toHaveBeenCalled();
  });
});
