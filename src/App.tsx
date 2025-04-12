import TodosList from "./store/components/Todos";
import AddToDo from "./store/components/AddToDo";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <AddToDo />
      <TodosList />
    </div>
  );
}

export default App;
