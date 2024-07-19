import React from "react";
import TodoItem from "./ToDoItem.tsx";

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const ToDoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,

  removeTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default ToDoList;
