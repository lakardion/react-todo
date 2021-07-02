import React, { useState } from "react";
import Todo from "../Todo/Todo";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  deleteTodo,
  updateTodo,
} from "../../store/actions/todo/actions";
const customTodos = [
  {
    description: "SomeDescription",
    details: "Some details",
    dueDate: new Date(),
    todoId: 1,
    createdOn: new Date(),
    updatedOn: new Date(),
  },
];
const TodoList = () => {
  const [isCreatingATodo, setIsCreatingATodo] = useState(false);
  const todos = useSelector((x) => x.todos);

  const dispatch = useDispatch();
  const handleCreateTodo = (todo) => {
    dispatch(createTodo(todo));
  };
  const handleDeleteTodo = (todoId) => () => {
    dispatch(deleteTodo(todoId));
  };
  const handleEditTodo = (todoId) => (todo) => {
    dispatch(updateTodo(todoId, todo));
  };
  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center">
        {isCreatingATodo && (
          <Todo
            isBeingCreated
            handleCancelCreation={() => setIsCreatingATodo(false)}
            createTodo={handleCreateTodo}
          />
        )}
        {todos.map((todo) => (
          <Todo
            description={todo.description}
            details={todo.details}
            dueDate={todo.dueDate}
            createdOn={todo.createdOn}
            updatedOn={todo.updatedOn}
            key={`todo-item-${todo.todoId}`}
            editTodo={handleEditTodo(todo.todoId)}
            deleteTodo={handleDeleteTodo(todo.todoId)}
          />
        ))}
      </div>
      <Fab
        color="primary"
        className="fab"
        title="Add a todo!"
        onClick={() => setIsCreatingATodo(true)}
      >
        <AddIcon />
      </Fab>
    </>
  );
};
export default TodoList;
