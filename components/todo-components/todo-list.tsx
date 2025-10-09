"use client";
import { Edit2Icon, TrashIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { prisma } from "@/lib/db";
import { checkTodo, deleteTodo } from "@/action/action";

import { Form } from "../ui/form";

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todos[];
  setUpdateTodo: (todo: Todos) => void;
}
export default function TodoList({ todos, setUpdateTodo }: TodoListProps) {
  const handleCheckedBoxChange = async (id: number) => {
    const response = await checkTodo(id);
  };
  const handleDelete = async (id: number) => {
    const response = await deleteTodo(id);
  };

  return (
    <>
      <div className="flex flex-col gap-2 max-w-lg w-full">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-2 w-full justify-between border-2 border-black py-3 px-5 pb-2 rounded-3xl"
          >
            <div className="flex items-center gap-2">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => handleCheckedBoxChange(todo.id)}
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
              <Edit2Icon onClick={() => setUpdateTodo(todo)} />

              <TrashIcon onClick={() => handleDelete(todo.id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
