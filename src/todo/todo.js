import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../action";
import ReducedTodo from "./todoArrayMap";
import "./todo.css";

function TodoApp() {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();
  const text = useSelector((state) => state.todo.todos);

  let count = 1;
  function handleOnChange(element) {
    setUserInput(element.target.value);
  }

  const addingTodo = () => {
    count += 1;
    let object = { id: count, text: userInput, isCompleted: false };
    if (userInput !== "") {
      dispatch(addTodo(object));
    }
    setUserInput("");
  };

  return (
    <>
      <div className="inputAdd">
        <input onChange={handleOnChange} value={userInput} />
        <button onClick={addingTodo}>Add</button>
      </div>
      <div>
        {text.map((object) => (
          <ReducedTodo array={object} key={object.id} />
        ))}
      </div>
    </>
  );
}

export default TodoApp;
