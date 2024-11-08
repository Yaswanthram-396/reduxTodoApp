import "./todo.css";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../action";

function ReducedTodo({ array }) {
  const dispatch = useDispatch();

  const completeButton = (id) => {
    dispatch(completeTodo(id));
  };

  function deleteButton(id) {
    dispatch(deleteTodo(id));
  }
  return (
    <div key={array.id} className="card">
      <h1
        style={{
          textDecoration: array.isCompleted ? "line-through" : "none",
        }}
      >
        {array.text}
      </h1>
      <div className="statusButtons">
        <button className="buttons" onClick={() => completeButton(array.id)}>
          Complete
        </button>
        <button
          className="buttons-delete"
          onClick={() => deleteButton(array.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default ReducedTodo;
