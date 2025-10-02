import { Edit2Icon, TrashIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { todo } from "node:test";

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

interface onEdit {
  id: number;
  title: string;
}
interface TodoListProps {
  todos: Todos[];
  setTodos: (
    todos: { id: number; title: string; completed: boolean }[]
  ) => void;

  onEdit: any;
}

export default function TodoList({
  todos,
  setTodos,

  onEdit,
}: TodoListProps) {
  const handleCheckedChange = (id: number) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const handleDeleteTodo = (id: number) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <>
      <div className="flex flex-col gap-2 max-w-lg w-full">
        {todos.map(
          (todo: { id: number; title: string; completed: boolean }) => (
            <div
              key={todo.id}
              className="flex items-center gap-2 w-full justify-between border-2 border-black py-3 px-5 pb-2 rounded-3xl"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => handleCheckedChange(todo.id)}
                />
                <h1
                  className={cn(
                    "text-lg font-bold",
                    todo.completed && "line-through"
                  )}
                >
                  {todo.title}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Edit2Icon onClick={() => onEdit(todo.id, todo.title)} />

                <TrashIcon onClick={() => handleDeleteTodo(todo.id)} />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
