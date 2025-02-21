import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li style={{ display: "flex", justifyContent: "space-between", 
    padding: "8px", border: "1px solid #ddd", marginBottom: "5px" }}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ color: "red" }}>❌</button>
    </li>
  );
}

export default TodoItem;
