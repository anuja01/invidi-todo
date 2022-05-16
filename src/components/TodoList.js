import React, {useState} from "react";
import Todo from "./Todo/Todo";
import AddTodo from "./AddTodo/AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, addTodo, removeTodo, updateTodo } from "../redux/action";
import "./todolist.css";
import { Divider, Pagination, Typography } from "@mui/material";
import usePagination from "../utility/pagination";

const TodoList = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  const dispatch = useDispatch();
  const createTodo = (newTodo) => {
    dispatch(addTodo(newTodo));
  };
  const udpateTodoItem = (id, updatedTodo) => {
    dispatch(updateTodo({ id, updatedTodo }));
  };

  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(state.todos.length / PER_PAGE);
  const _DATA = usePagination(state.todos, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <div className="TodoListContainer">
      <Typography variant="h4" gutterBottom component="div">
        Todo List
      </Typography>
      <AddTodo createTodo={createTodo} />

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      
      {_DATA &&
        _DATA.currentData().map((todo) => {
          return (
            <>
              <Todo
                key={todo.id}
                id={todo.id}
                todo={todo.todo}
                completed={todo.completed}
                toggleTodo={() => dispatch(completeTodo(todo))}
                removeTodo={() => dispatch(removeTodo(todo))}
                updateTodo={udpateTodoItem}
              />
            </>
          );
        })}
    </div>
  );
};

export default TodoList;
