import { TodoItem } from "./TodoItem";

export function TodoList({ onToggle, todos = [] }) {
  if (todos.length === 0) {
    return <span>No hay ning&uacute;n pendiente...</span>;
  }
  const incomplete = todos.filter(({ isDone }) => !isDone);

  return (
    <>
      <span> Pendientes: {incomplete.length}. </span>
      <ul className="card">
        {todos?.map(({ id, description, isDone }) => (
          <TodoItem
            key={id}
            id={id}
            description={description}
            isDone={isDone}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  );
}
