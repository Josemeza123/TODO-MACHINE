import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateTodoButton from "./components/CreateTodoButton";
import { useState } from "react";

const defaultTodo = [
  { text: "cortar cebolla", completed: false },
  { text: "Saludar", completed: true },
  { text: "Estudiar", completed: false },
  { text: "Almorzar", completed: true },
  { text: "Desayunar", completed: false },
  { text: "Viajar", completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodo);

  const [searchValue, setSearchValue] = useState("");
  // console.log(searchValue);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searcText = searchValue.toLowerCase();
    return todoText.includes(searcText);
  });
  const completeTodo = () => {
    const newTodos = [...todos];
    newTodos[(todoIndex.completed = true)];
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={completeTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
