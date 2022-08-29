import { TodoItem } from "./TodoItem";

export function TodoList() {
  return (
    <>
      <hr />
      <span>Pendientes: 03.</span>
      <hr />
      <ul>
        <TodoItem description="Ver la sesión #06" isDone />
        <TodoItem description="Hacer el componente práctico" />
        <TodoItem description="Guardar cámbios" />
      </ul>
    </>
  );
}
