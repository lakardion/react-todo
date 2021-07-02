import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  deleteTodo,
  fetchTodos,
  updateTodo,
} from "../../store/actions/todo/actions";

const TodoList = () => {
  const [isCreatingATodo, setIsCreatingATodo] = useState(false);
  const todos = useSelector((x) => x.todos);

  const dispatch = useDispatch();
  const handleCreateTodo = (todo) => {
    dispatch(createTodo(todo));
    setIsCreatingATodo(false);
  };
  const handleDeleteTodo = (todoId) => () => {
    dispatch(deleteTodo(todoId));
  };
  const handleEditTodo = (todoId) => (todo) => {
    dispatch(updateTodo(todoId, todo));
  };
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

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
        {todos
          .sort((a, b) => (new Date(a.dueDate) < new Date(b.dueDate) ? -1 : 1))
          .map((todo) => (
            <Todo
              description={todo.description}
              details={todo.details}
              dueDate={todo.dueDate}
              createdOn={new Date(todo.createdOn)}
              updatedOn={new Date(todo.updatedOn)}
              key={`todo-item-${todo.id}`}
              editTodo={handleEditTodo(todo.id)}
              deleteTodo={handleDeleteTodo(todo.id)}
            />
          ))}
      </div>
      {!todos?.length && !isCreatingATodo && (
        <div className="flex-grow-1 align-items-center d-flex h-100 justify-content-center">
          <em>
            Everyone has something to do, start adding with the plus button!
          </em>
        </div>
      )}
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
