/**
 * filter todo list based on search input text
 * @param {Todo list} todos 
 * @param {Search text} inputText 
 * @returns 
 */
export const filteredList = (todos, inputText) => {
  return todos.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.todo.toLowerCase().includes(inputText);
    }
  });
};
