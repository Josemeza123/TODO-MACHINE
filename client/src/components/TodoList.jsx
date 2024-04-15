import React from "react";
import '../style/TodoList.css'

const TodoList = ({children}) => {
  return (
   <ul className="TodoList">
    {children}
   </ul>
  );
};

export default TodoList;
