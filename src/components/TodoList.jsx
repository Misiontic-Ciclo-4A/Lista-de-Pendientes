import { TodoItem } from "./TodoItem";

export function TodoList() {
  return (
    <>
      <span>Pendientes: 03.</span>
      <ul className="card">
        <TodoItem description="Ver la sesión #06" isDone />
        <TodoItem description="Hacer el componente práctico" />
        <TodoItem description="Guardar cámbios" />
      </ul>
    </>
  );
}
