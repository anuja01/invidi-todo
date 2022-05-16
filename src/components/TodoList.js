import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, addTodo, removeTodo, updateTodo } from "../redux/action";

const TodoList = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  const dispatch = useDispatch();
  const createTodo = (newTodo) => {
    dispatch(addTodo(newTodo));
  };
  const udpateTodoItem = (id, updatedTodo) => {
    dispatch(updateTodo({id, updatedTodo}));
  };
  return (
    <>
      <div>Todo List</div>
      <AddTodo createTodo={createTodo} />
      {state.todos &&
        state.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              completed={todo.completed}
              toggleTodo={() => dispatch(completeTodo(todo))}
              removeTodo={() => dispatch(removeTodo(todo))}
              updateTodo={udpateTodoItem}
            />
          );
        })}
    </>
  );
};

export default TodoList;
