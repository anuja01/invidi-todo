import React, { useState } from "react";
import Todo from "../components/Todo/Todo";
import AddTodo from "../components/AddTodo/AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, addTodo, removeTodo, updateTodo } from "../redux/action";
import { Pagination, TextField, Typography } from "@mui/material";
import usePagination from "../utility/pagination";
import { filteredList } from "../utility/util";
import { PER_PAGE } from "../utility/constants";

import "./todolist.css";
import SearchInput from "../components/Search/Search";

const TodoList = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  const dispatch = useDispatch();

  const createTodo = (newTodo) => {
    dispatch(addTodo(newTodo));
  };
  const udpateTodoItem = (id, updatedTodo) => {
    dispatch(updateTodo({ id, updatedTodo }));
  };

  // handle search input
  const [inputText, setInputText] = useState("");
  let searchInputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = filteredList(state.todos, inputText);

  // handle pagination
  let [page, setPage] = useState(1);

  const count = Math.ceil(filteredData.length / PER_PAGE);
  const _DATA = usePagination(filteredData, PER_PAGE);
  const paginationHandler = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div className="TodoListContainer">
      <Typography variant="h4" gutterBottom component="div">
        Todo List
      </Typography>

      <SearchInput searchInputHandler={searchInputHandler} />

      <AddTodo createTodo={createTodo} />

      {/* iterate through filtered results to show todo list */}
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
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={paginationHandler}
      />
    </div>
  );
};

export default TodoList;
