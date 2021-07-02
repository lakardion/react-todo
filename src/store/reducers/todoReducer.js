import {
  CREATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
} from "../actions/todo/actionTypes";

const initialState = [];
const findIndexByTodoId = (list, id) => list.findIndex((td) => td.id === id);
const todoReducer = (state = initialState, action) => {
  const stateCopy = [...state];
  switch (action.type) {
    case UPDATE_TODO_SUCCESS:
      const updatedTodoIdx = findIndexByTodoId(stateCopy, action.payload.id);
      stateCopy[updatedTodoIdx] = action.payload.todo;
      return stateCopy;
    case FETCH_TODOS_SUCCESS:
      return action.payload;
    case DELETE_TODO_SUCCESS:
      return stateCopy.filter((td) => td.id !== action.payload);
    case CREATE_TODO_SUCCESS:
      return stateCopy.concat(action.payload);
    default:
      return state;
  }
};

export default todoReducer;
