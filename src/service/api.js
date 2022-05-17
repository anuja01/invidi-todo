import { loadAllTodos, showSpinner, showError, addTodo } from "../redux/action";

export const getTodoAPI = async (dispatch, method) => {
    try {
      const response = await fetch(URL, {
        method: method // default, so we can ignore
      });
      console.log('response: ', await response)
      if (!response.ok) {
        dispatch(showError({ error: true, status: response.status, statusText: response.statusText}));
        return { error: true, status: response.status, statusText: response.statusText};
      }
      const body = await response.json();
      return body;
    } catch (error) {
      console.log("error error: ", error);
    }
  };
 
export const addNewTodoAPI = async (dispatch, method, requestParams, id) => {
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
      console.log("error error: ", error);
    }
  };

export const deleteTodo = (todo) => fetch(`https://62828894ed9edf7bd8862088.mockapi.io/api/v1/todos/${todo}`);

export const completeTodo = (todo) => fetch(`https://62828894ed9edf7bd8862088.mockapi.io/api/v1/todos/${todo}`);