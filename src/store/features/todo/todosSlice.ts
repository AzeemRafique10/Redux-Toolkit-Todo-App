import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      text: "Learn React",
      completed: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const todoId = action.payload.id;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
