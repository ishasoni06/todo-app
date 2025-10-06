"use client";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { Form } from "../ui/form";
import { createTodo, UpdateTodo } from "@/action/action";
import { useState } from "react";

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todos[];
  // id: number;
}

export default function AddTodoInput({ todos }: TodoListProps) {
  return (
    <>
      <div className="flex items-center gap-2 max-w-lg w-full px-5">
        <form
          action={createTodo}
          className="flex items-center gap-2 max-w-lg w-full px-5"
        >
          <Input
            className="border-2 border-black h-10 py-6 rounded-3xl"
            placeholder="Write your todo here"
            name="title"
            // value={input}
            //onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 p-3 rounded-full bg-black border-none text-white hover:border-2 hover:border-black cursor-pointer"
            // onClick={editing ? handleUpdateTodo : handleAddTodo}
            type="submit"
          >
            <Plus size={20} />
          </Button>
        </form>
      </div>
    </>
  );
}
