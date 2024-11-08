export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});

export const completeTodo = (id) => ({
  type: "COMPLETE_TODO",
  payload: id,
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

// export const deleteTodo = (text) => ({
//   type: "DELETE_TODO",
//   payload: { text },
// });
