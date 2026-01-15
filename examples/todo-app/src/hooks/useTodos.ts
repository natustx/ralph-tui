/**
 * ABOUTME: Custom hook for managing todo state with add, toggle, and delete operations
 */

import { useState, useCallback } from "react";
import type { Todo } from "../types/todo";

export function useTodos(initialTodos: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = useCallback((text: string) => {
    if (!text.trim()) return;
    
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
    };
    
    setTodos((prev) => [newTodo, ...prev]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return { todos, addTodo, toggleTodo, deleteTodo };
}
