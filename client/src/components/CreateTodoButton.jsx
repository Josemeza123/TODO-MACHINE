import React from "react";
import "../style/CreateTodoButton.css";

const CreateTodoButton = () => {
  function presion(event) {
    console.log("Hiciste click");
    console.log(event.target);
  }
  return (
    <div>
      <button className="CreateTodoButton" onClick={presion}>
        +
      </button>
    </div>
  );
};

export default CreateTodoButton;
