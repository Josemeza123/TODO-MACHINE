import React from "react";
import "../style/TodoItem.css";
const TodoItem = (props) => {
  return (
    <>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--Active"
          }` }
        >
          v
        </span>
        <p
          className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span className="Icon Icon-delete">x</span>
      </li>
    </>
  );
};

export default TodoItem;