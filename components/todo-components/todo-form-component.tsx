"use client";
import React, { useState } from "react";
import AddTodoInput from "./add-todo-input";
import TodoList from "./todo-list";
interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todos[];
}
export default function TodoFrom({ todos }: TodoListProps) {
  const [updateTodo, setUpdateTodo] = useState<Todos | null>(null);

  return (
    <>
      <AddTodoInput todos={updateTodo} setUpdateTodo={setUpdateTodo} />
      <TodoList todos={todos} setUpdateTodo={setUpdateTodo} />
    </>
  );
}
