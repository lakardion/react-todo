import { deleteCall, get, patch, post } from "./apiCallService";

const todoUris = {
  todo: "todo",
  todoById: (id) => `todo/${id}`,
};
const todoService = {
  getTodos: () => get(todoUris.todo),
  deleteTodo: (id) => deleteCall(todoUris.todoById(id)),
  createTodo: (todo) => post(todoUris.todo, todo),
  patchTodo: (id, todo) => patch(todoUris.todoById(id), todo),
};
export default todoService;
