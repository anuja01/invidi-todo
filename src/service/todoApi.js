import { loadAllTodos, showSpinner, showError, addTodo } from "../redux/action";
// import {getTodoAPI, addNewTodoAPI} from './api'

import { URL } from "../utility/constants";

const getTodoListAPI = async (dispatch, method) => {
  try {
    const response = await fetch(URL, {
      method: method // default, so we can ignore
    });
    if (!response.ok) {
      dispatch(
        showError({
          error: true,
          status: response.status,
          statusText: response.statusText
        })
      );
      return {
        error: true,
        status: response.status,
        statusText: response.statusText
      };
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getTodoList = async (dispatch) => {
  try {
    dispatch(showSpinner(true));
    const todoList = await getTodoListAPI(dispatch, "GET");
    dispatch(loadAllTodos(todoList));
    dispatch(showSpinner(false));
  } catch (error) {
    dispatch(showError(true));
  }
};

const addNewTodoAPI = async (dispatch, method, requestParams, id) => {
  try {
    const response = await fetch(URL, {
      method: method, // default, so we can ignore
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todo: requestParams, completed: false })
    });
    if (!response.ok) {
      dispatch(showError(true));
      return [];
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const addNewTodo = async (dispatch, todo) => {
  try {
    dispatch(showSpinner(true));
    await addNewTodoAPI(dispatch, "POST", todo, null);

    dispatch(showSpinner(false));
  } catch (error) {
    dispatch(showError(true));
  }
};

const updateTodoItemAPI = async (dispatch, method, requestParams, id) => {
  try {
    const response = await fetch(URL + id, {
      method: method, // default, so we can ignore
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todo: requestParams })
    });
    if (!response.ok) {
      dispatch(showError(true));
      return [];
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const updateTodoItem = async (dispatch, todo, id) => {
  try {
    dispatch(showSpinner(true));
    await updateTodoItemAPI(dispatch, "PUT", todo, id);
    dispatch(showSpinner(false));
  } catch (error) {
    dispatch(showError(true));
  }
};

const markCompletedAPI = async (dispatch, method, requestParams, id) => {
  try {
    const response = await fetch(URL + id, {
      method: method, // default, so we can ignore
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ completed: requestParams })
    });
    if (!response.ok) {
      dispatch(showError(true));
      return [];
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const markCompleted = async (dispatch, isCompleted, id) => {
  try {
    dispatch(showSpinner(true));
    await markCompletedAPI(dispatch, "PUT", isCompleted, id);
    dispatch(showSpinner(false));
  } catch (error) {
    dispatch(showError(true));
  }
};

const deleteTodoItemAPI = async (dispatch, method, id) => {
  try {
    const response = await fetch(URL + id, {
      method: method, // default, so we can ignore
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      dispatch(showError(true));
      return [];
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("error error: ", error);
  }
};

export const deleteTodoItem = async (dispatch, id) => {
  try {
    dispatch(showSpinner(true));
    await deleteTodoItemAPI(dispatch, "DELETE", id);
    dispatch(showSpinner(false));
  } catch (error) {
    dispatch(showError(true));
  }
};
