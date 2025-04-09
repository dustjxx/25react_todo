import React from "react";

function TodoItem({ item, toggleTodo1, deleteTodo }) {
  //   const item = props.item;
  //   const test = props.test;

  //   const { item } = props;
  return (
    <li className="flex justify-between items-center py-4 border-b">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={item.completed}
          className="accent-blue-500 w-5 h-5"
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
            color: item.completed ? "red" : "black",
          }}
        >
          {item.text}
        </span>
      </div>
      <button
        className="text-red-500 text-sm hover:underline"
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
