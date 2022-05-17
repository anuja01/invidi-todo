import * as types from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

// initial mock state
const initialState = {
  todos: [],
  showSpinner: false
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ALL_TODOS:
      return {
        ...state,
        todos: action.payload
      };

    case types.ADD_TODO:
      const newTodo = {
        id: uuidv4(), // generate unique ID for a todo
        todo: action.payload,
        completed: false
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
      };

    case types.REMOVE_TODO:
      // remove only from state, no API involvement
      const filterTodo = state.todos.length && state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: filterTodo
      };
    case types.UPDATE_TODO:
      // update todo in state
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, todo: action.payload.updatedTodo };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos
      };
    case types.COMPETE_TODO:
      const toggleTodo = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : t
      );
      return {
        ...state,
        todos: toggleTodo
      };
    case types.SHOW_SPINNER:
      return {
        ...state,
        showSpinner: action.payload
      };
    case types.SHOW_ERROR:
      return {
        ...state,
        showError: action.payload.error,
        errorDetails: `${action.payload.status} ${action.payload.statusText}`
      };
    default:
      return state;
  }
};

export default todoReducer;
