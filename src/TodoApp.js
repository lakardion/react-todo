import React from "react";
import FilterToolbar from "./components/FilterToolbar/FilterToolbar";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import TodoList from "./components/TodoList/TodoList";
const TodoApp = (props) => {
  return (
    <>
      <Header />
      <main className="d-flex flex-grow-1 overflow-auto flex-column">
        <FilterToolbar />
        <TodoList />
      </main>
      <Footer />
    </>
  );
};
export default TodoApp;
