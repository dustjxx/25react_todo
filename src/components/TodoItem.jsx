import React from "react";

function TodoItem({ item, toggleTodo1, deleteTodo }) {
  return (
    <li className="flex justify-between items-center py-4 border-b">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={item.completed}
          className="accent-pink-500 w-5 h-5"
          onChange={() => {
            toggleTodo1(item.id);
          }}
        />
        <span
          onClick={() => {
            toggleTodo1(item.id);
          }}
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            color: item.completed ? "gray" : "black",
          }}
        >
          {item.text}
        </span>
      </div>
      <button
        className="text-white text-sm hover:underline bg-pink-600 px-2 py-1 rounded-3xl"
        onClick={() => {
          deleteTodo(item.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
