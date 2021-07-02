import {
  ADD_TODO,
  CREATE_TODO,
  DELETE_TODO,
  FILTER_TODO,
  GET_ALL_TODOS,
  UPDATE_TODO,
} from "./actionTypes";

export const getAllTodos = () => ({
  type: GET_ALL_TODOS,
});
export const updateTodo = (todoId, updatedTodo) => ({
  type: UPDATE_TODO,
  payload: { todoId, updatedTodo },
});
export const deleteTodo = (todoId) => ({ type: DELETE_TODO, payload: todoId });
export const createTodo = (todo) => ({ type: CREATE_TODO, payload: todo });
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const filterTodos = (filters) => ({
  type: FILTER_TODO,
  payload: filters,
});
