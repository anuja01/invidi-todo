import * as types from "./actionTypes";

export const completeTodo = (todo) => ({
    type: types.COMPETE_TODO,
    payload: todo,
})

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    payload: todo,
})