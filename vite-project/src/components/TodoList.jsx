import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleButton() {
    if (edit == null) {
      const item = {
        id: uuidv4(),
        text: todo,
        isCompleted: false,
      };
      setTodos([...todos, item]);
      setTodo("");
    } else {
      const upadtedTodo = todos.map((elem) => {
        if (elem.id == edit.id) {
          return { ...elem, text: edit.text };
        }
        return elem;
      });
      setTodos(upadtedTodo);
      setEdit(null);
    }
  }
  function deleteTodo(itemId) {
    const updatedTodo = todos.filter((todo) => {
      return todo.id !== itemId;
    });
    setTodos(updatedTodo);
  }
  function checkTodo(itemId) {
    const updatedTodo = todos.map((todo) => {
      if (todo.id == itemId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodo);
  }

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      <div className="w-full max-w-md">
        <div className="flex items-center mb-5">
          <input
            type="text"
            onChange={(e) =>
              edit == null
                ? handleChange(e)
                : setEdit({ ...edit, text: e.target.value })
            }
            value={edit == null ? todo : edit.text}
            placeholder="Enter a todo..."
            className="w-full border-2 border-gray-300 p-3 rounded-lg shadow-sm focus:border-blue-400 outline-none"
          />
          <button
            onClick={handleButton}
            className="ml-4 bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
          >
            {edit == null ? "ADD" : "Edit"}
          </button>
        </div>
        <TodoItem
          todoItems={todos}
          deleteFunc={deleteTodo}
          checkFunc={checkTodo}
          editFunc={setEdit}
        />
      </div>
    </div>
  );
}

export default TodoList;
