import { showError } from "../redux/action";

// filter todo list based on search input text
export const filteredList = (todos, inputText) => {
  return todos.length && todos.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.todo.toLowerCase().includes(inputText);
    }
  });
};

// dispatch showError action when there is an API error
export const handleApiError = (dispatch, response) => {
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
};
