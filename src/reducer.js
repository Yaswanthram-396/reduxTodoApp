// import { addTodo } from "./action";
// import { deleteTodo } from "./action";

const initialState = {
  todos: [{ id: 0, text: "Learn React", isCompleted: false }],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        // ...state,
        // todos: [...state.todos, { text: action.payload, completed: false }],
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      const DeleteTodo = state.todos.filter(
        (eachVar) => eachVar.id !== action.payload
      );
      console.log(DeleteTodo);
      return { todos: DeleteTodo };

    case "COMPLETE_TODO":
      const Todo = state.todos.map((eachVar) => {
        if (eachVar.id === action.payload) {
          eachVar.isCompleted = true;
          return eachVar;
        }
        return eachVar;
      });

      return {
        todos: Todo,
      };
    default:
      return state;
  }
};
export default todoReducer;
