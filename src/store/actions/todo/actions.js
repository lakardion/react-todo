import {
  CREATE_TODO_SUCCESS,
  CREATE_TODO,
  DELETE_TODO,
  FILTER_TODO,
  FETCH_TODOS,
  UPDATE_TODO,
  FETCH_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
} from "./actionTypes";

export const fetchTodos = () => ({
  type: FETCH_TODOS,
});
export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});
export const updateTodo = (id, todo) => ({
  type: UPDATE_TODO,
  payload: { id, todo },
});
export const updateTodoSuccess = (id, todo) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: { id, todo },
});
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const deleteTodoSuccess = (id) => ({
  type: DELETE_TODO_SUCCESS,
  payload: id,
});
export const createTodo = (todo) => ({ type: CREATE_TODO, payload: todo });
export const createTodoSuccess = (todo) => ({
  type: CREATE_TODO_SUCCESS,
  payload: todo,
});
export const filterTodos = (filters) => ({
  type: FILTER_TODO,
  payload: filters,
});
