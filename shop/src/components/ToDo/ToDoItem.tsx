import React from "react";

interface ToDoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  todo,
  toggleComplete,
  removeTodo,
}) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow mb-2 transition transform hover:scale-105">
      <div
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>
      <button
        className="text-red-500 ml-4 hover:text-red-600 transition"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
