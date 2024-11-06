import React from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");

  function addTodo() {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), text: inputText },
    ]);
    setInputText("");
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  console.log(inputText);

  function clearTodos() {
    setTodos([]);
  }

  return (
    <>
      <main>
        <input
          value={inputText}
          onChange={handleInputChange}
          type="text"
          id="todoInput"
        />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={clearTodos}>Clear Todos</button>
      </main>
    </>
  );
};

export default Todos;
