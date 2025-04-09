import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  // const todos = [
  //   {
  //     id: 1,
  //     text: "react 공부하기",
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     text: "spring 공부하기",
  //     completed: false,
  //   },
  //   {
  //     id: "3",
  //     text: "운동하기",
  //     completed: "false",
  //   },
  // ];

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const store = localStorage.getItem("todo");
    if (store) {
      setTodoList(JSON.parse(store));
    }
    console.log("useEffect1");
  }, []);

  // useEffect(함수, 배열)
  // 함수 :프로그램실행, 배열없으면 상태들변화에 실행
  // 배열 [] 있으면 1번실행
  // [test1, test2, test3] state의 변화에 따라 useEffect실행

  useEffect(() => {
    console.log("todoList변화");
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  function deleteTodo(id) {
    // alert("todo : " + id);

    // setTodoList(
    //   todoList.filter((item) => {
    //     return item.id !== id;
    //   })
    // );

    setTodoList(
      todoList.filter((item) => {
        return item.id !== id;
      })
    );
  }
  function addTodo() {
    // alert("addTodo");
    if (input.trim() === "") {
      alert("자료를 입력하세요");
      return;
    }

    const newTodo = {
      id: Date.now(),
      // id:crypto.randomUUID()
      text: input,
      completed: false,
    };

    console.log(newTodo);
    setTodoList([newTodo, ...todoList]);
    setInput("");
  }

  function toggleTodo(id) {
    // alert("toggle : " + id);
    setTodoList(
      todoList.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  }

  return (
    <>
      <div className="p-4 border w-[500px] m-auto mt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">TODO app</h1>
        <div className="flex gap-2">
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            placeholder="할일을 입력하세요"
            className="flex-1 border p-2 rounded border-gray-300 focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            추가
          </button>
        </div>
        <ul className="py-2">
          {/* todo list  */}
          {/* <li className="flex justify-between items-center py-4 border-b">
            <span>test</span>
            <button className="text-red-500 text-sm hover:underline">
              삭제
            </button>
          </li>
          <li className="flex justify-between items-center py-4 border-b">
            <span className="line-through text-gray-400">test</span>
            <button className="text-red-500 text-sm hover:underline">
              삭제
            </button>
          </li> */}
          {
            // todos.map(()=>{})
            todoList.map((item, i) => {
              return (
                <TodoItem
                  key={i}
                  item={
                    todoList[i]
                    // item
                  }
                  toggleTodo1={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              );
            })
          }
        </ul>
      </div>
    </>
  );
}

export default App;
