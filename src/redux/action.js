import * as types from "./actionTypes";

export const completeTodo = (todo) => ({
  type: types.COMPETE_TODO,
  payload: todo
});

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo
});

export const removeTodo = (todo) => ({
  type: types.REMOVE_TODO,
  payload: todo
});

export const updateTodo = (todo) => ({
  type: types.UPDATE_TODO,
  payload: todo
});

export const loadAllTodos = (todos) => ({
  type: types.ALL_TODOS,
  payload: todos
});

export const showSpinner = (visibility) => ({
  type: types.SHOW_SPINNER,
  payload: visibility
});

export const showError = (payload) => ({
  type: types.SHOW_ERROR,
  payload: payload
});
