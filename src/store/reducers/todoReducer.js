import {
  ADD_TODO,
  DELETE_TODO,
  REFRESH_TODOS,
  UPDATE_TODO,
} from "../actions/todo/actionTypes";

const initialState = [];
const findIndexByTodoId = (list, id) =>
  list.findIndex((td) => td.todoId === id);
const todoReducer = (state = initialState, action) => {
  const stateCopy = [...state];
  switch (action.type) {
    case UPDATE_TODO:
      const updatedTodoIdx = findIndexByTodoId(
        stateCopy,
        action.payload.todoId
      );
      stateCopy[updatedTodoIdx] = action.payload.todo;
      return stateCopy;
    case REFRESH_TODOS:
      return action.payload;
    case DELETE_TODO:
      return stateCopy.filter((td) => td.todoId !== action.payload);
    case ADD_TODO:
      return stateCopy.concat(action.payload);
    default:
      return state;
  }
};

export default todoReducer;
