import { useSelector, useDispatch } from "react-redux";

import { removeTodo } from "../features/todo/todosSlice";
import { TodoTypes } from "../types";

function TodosList() {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="neon-header" style={{ marginTop: 30 }}>
        Todos
      </h1>

      <ul className="neon-list">
        {todos.map((todo: TodoTypes) => (
          <li
            key={todo.id}
            className="neon-item"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ marginLeft: 20 }}>{todo.text}</span>
            <button
              className="neon-button"
              onClick={() => dispatch(removeTodo({ id: todo.id }))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodosList;
