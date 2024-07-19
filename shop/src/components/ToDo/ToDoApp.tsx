import React, { useState } from "react";
import TodoList from "./ToDoList.tsx";

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoApp: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addToDo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeToDo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">ToDo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200"
        />
        <button
          onClick={addToDo}
          className="ml-2 p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Add
        </button>
      </div>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeToDo}
      />
    </div>
  );
};

export default ToDoApp;
