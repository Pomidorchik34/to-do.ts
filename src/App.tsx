import { useState, useRef, useEffect } from "react";
import "./App.css";
import ToDoItem from "./assets/Components/task"; // <=why?
function App() {
  const [toDoList, setToDoList] = useState([]);

  const inputRef: any = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }

    const newTodo: object = {
      id: Date.now(),
      text: inputText,
    };
    let copied = [...toDoList];
    copied.push(newTodo); //????????????
    setToDoList(copied);
    inputRef.current.value = "";
  };

  const deleteToDo: object = (id: object) => {
    setToDoList((prvTodos) => {
      return prvTodos.filter((todo: any) => todo.id !== id);
    });
  };

  return (
    <div className="container relative">
      <h1 className="heading">To Do App</h1>
      <div className="creating">
        <input
          ref={inputRef}
          className="create-input"
          type="text"
          placeholder="Tasks name"
          name=""
          id=""
        />
        <button onClick={add} className="add-task text-black">
          +
        </button>
      </div>
      <div className="tasks">
        {toDoList.map((item: any, index) => {
          return (
            <ToDoItem
              key={index}
              text={item.text}
              id={item.id}
              deleteToDo={deleteToDo}
            />
          );
        })}
      </div>
      <p className="absolute pt-[202px]">You have {toDoList.length} tasks</p>
    </div>
  );
}

export default App;
