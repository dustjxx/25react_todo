import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem.jsx";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const store = localStorage.getItem("todo");
    if (store) {
      setTodoList(JSON.parse(store));
    }
    console.log("useEffect1");
  }, []);

  useEffect(() => {
    console.log("todoList 갱신");
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  function deleteTodo(id) {
    setTodoList(
      todoList.filter((item) => {
        return item.id !== id;
      })
    );
  }
  function addTodo() {
    if (input.trim() === "") {
      alert("할일을 입력해 주세요!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    console.log(newTodo);
    setTodoList([newTodo, ...todoList]);
    setInput("");
  }

  function toggleTodo(id) {
    setTodoList(
      todoList.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <a href="#">
          <img src="/humming.gif" alt="humming" className="w-20 h-auto" />
        </a>
      </div>
      <div className="p-5 border w-[500px] m-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">TODO app</h1>
        <div className="flex gap-2">
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
            value={input}
            placeholder="오늘의 to-do는 무엇인가요?"
            className="flex-1 border p-2 pl-4 rounded-3xl border-gray-300 focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-pink-500 text-white hover:bg-pink-600 rounded-3xl text-bold"
          >
            추가
          </button>
        </div>
        <ul className="py-2">
          {todoList.map((item, i) => {
            return (
              <TodoItem
                key={i}
                item={todoList[i]}
                toggleTodo1={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
