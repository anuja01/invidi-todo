import * as types from "./actionTypes";

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
        todos: action.payload.reverse()
      };

    case types.ADD_TODO:
      const addedTodos = [action.payload, ...state.todos ];
      return {
        ...state,
        todos: addedTodos,
      };

    case types.REMOVE_TODO:
      const filterTodo =
        state.todos.length &&
        state.todos.filter((todo) => todo.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodo
      };
    case types.UPDATE_TODO:
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
