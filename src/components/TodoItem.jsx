import React from "react";

export const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => handleToggleTodo(todo.id)}
      >
        {todo.description}
      </span>

      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="btn btn-danger float-rigth"
      >
        Borrar
      </button>
    </li>
  );
};
