function TodoItem(props) {
  const { todoItems, deleteFunc, checkFunc, editFunc } = props;
  return (
    <div className="mt-5 space-y-3">
      {todoItems.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg border border-gray-200"
        >
          <input
            type="checkbox"
            onChange={() => checkFunc(todo.id)}
            name=""
            id=""
          />
          <h1
            className={`text-lg font-medium text-gray-700 ${
              todo.isCompleted ? "line-through" : ""
            }`}
          >
            {todo.text}
          </h1>
          <div className="space-x-3">
            <button
              onClick={() => editFunc(todo)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-all duration-200"
            >
              Edit
            </button>
            <button
              onClick={() => deleteFunc(todo.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
