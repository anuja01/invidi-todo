import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("render single todo", () => {
  //mock
  const todo = () =>
    render(
      <Todo
        toggleTodo={jest.fn()}
        todo="study"
        completed={false}
        id="1"
        removeTodo={jest.fn()}
        updateTodo={jest.fn()}
      />
    );
  test("render passed todo", () => {
    todo();
    const renderTodo = screen.getByText("study");
    expect(renderTodo).toBeInTheDocument();
  });

  test("render edit/delete buttons", () => {
    todo();
    const editButton = screen.getByText("Edit");
    expect(editButton).toBeInTheDocument();

    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  });
});
