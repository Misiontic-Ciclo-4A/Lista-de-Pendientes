import "./App.css";
import { TodoList } from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      <h1>Lista de Pendientes</h1>
      <TodoList />
    </div>
  );
}
