import React from "react";
const Header = (props) => {
  return (
    <header className="p-2 bg-dark d-flex align-items-center justify-content-center">
      <span className="text-white">Todo App</span>
      <span aria-label="todoEmoji">📋</span>
    </header>
  );
};
export default Header;
