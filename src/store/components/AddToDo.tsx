import { Button, Checkbox, Input } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { addTodo } from "../features/todo/todosSlice";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  const addTodohandler = (e: any) => {
    e.preventDefault();

    const newTodo = {
      text: input,
      completed: completed,
    };

    dispatch(addTodo(newTodo));
    setInput("");
    setCompleted(false);
    console.log("Todo added:", newTodo);
  };

  return (
    <form className="neon-form" onSubmit={addTodohandler}>
      <Input
        type="text"
        value={input}
        placeholder="Enter a Todo..."
        onChange={(e) => setInput(e.target.value)}
        className="neon-input"
      />

      <Checkbox
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
        className="neon-checkbox"
      />

      <Button type="primary" htmlType="submit" className="neon-button">
        Submit
      </Button>
    </form>
  );
};

export default AddToDo;
