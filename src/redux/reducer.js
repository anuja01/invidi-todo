import * as types from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [{ id: 1, todo: "Wake up", completed: false }]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        todo: action.payload,
        completed: false
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
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
    default:
      return state;
  }
};

export default todoReducer;
