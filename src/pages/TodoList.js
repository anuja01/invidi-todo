import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Alert,
  Backdrop,
  CircularProgress,
  Pagination,
  Typography
} from "@mui/material";

import Todo from "../components/Todo/Todo";
import AddTodo from "../components/AddTodo/AddTodo";
import SearchInput from "../components/Search/Search";

import usePagination from "../utility/pagination";
import { filteredList } from "../utility/util";
import { PER_PAGE } from "../utility/constants";
import { completeTodo, addTodo, removeTodo, updateTodo } from "../redux/action";
import "./todolist.css";
import { useEffect } from "react";
import {
  addNewTodo,
  getTodoList,
  updateTodoItem,
  markCompleted,
  deleteTodoItem
} from "../service/todoApi";

const TodoList = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  const dispatch = useDispatch();

  const createTodo = async (newTodo) => {
    await addNewTodo(dispatch, newTodo);
    dispatch(addTodo(newTodo));
  };
  const udpateTodoItem = async (id, updatedTodo) => {
    await updateTodoItem(dispatch, updatedTodo, id);
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

  useEffect(() => {
    async function fetchData() {
      await getTodoList(dispatch);
    }
    fetchData();
  }, []);

  return (
    <div className="TodoListContainer">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.showSpinner}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography variant="h4" gutterBottom component="div">
        Todo List
      </Typography>

      <SearchInput searchInputHandler={searchInputHandler} />

      <AddTodo createTodo={createTodo} />
      {state.showError && (
        <Alert severity="error">{`${state.errorDetails}, please try again`}</Alert>
      )}
      {/* iterate through filtered results to show todo list */}

      {_DATA.currentData().length ? (
        _DATA.currentData().map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              completed={todo.completed}
              toggleTodo={() => {
                markCompleted(dispatch, !todo.completed, todo.id);
                dispatch(completeTodo(todo));
              }}
              removeTodo={() => {
                deleteTodoItem(dispatch, todo.id);
                dispatch(removeTodo(todo));
              }}
              updateTodo={udpateTodoItem}
            />
          );
        })
      ) : (
        <Typography variant="h5" gutterBottom component="div">
          No Todo's found!
        </Typography>
      )}
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
