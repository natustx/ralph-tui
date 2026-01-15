/**
 * ABOUTME: Main App component that composes the todo list functionality
 */

import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { useTodos } from "../hooks/useTodos";

export function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo List
        </h1>
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}
