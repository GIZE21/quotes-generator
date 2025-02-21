import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
