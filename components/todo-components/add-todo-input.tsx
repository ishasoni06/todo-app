"use client";
import { Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { Form } from "../ui/form";
import { createTodo, UpdateTodo } from "@/action/action";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos?: Todos | null;

  setUpdateTodo: (todo: Todos | null) => void;
}

export default function AddTodoInput({
  todos,

  setUpdateTodo,
}: TodoListProps) {
  const form = useForm({
    defaultValues: {
      //  id: todos?.id,
      title: todos?.title || "",
      completed: todos?.completed || false,
    },
  });

  const onSubmit = async (data: any) => {
    {
      if (!todos?.id) {
        const response = await createTodo(data);
        setUpdateTodo(null);
      } else {
        const response = await UpdateTodo(todos.id, data);
        setUpdateTodo(null);
      }
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 max-w-lg w-full px-5">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-2 max-w-lg w-full px-5"
        >
          <Input
            className="border-2 border-black h-10 py-6 rounded-3xl"
            placeholder="Write your todo here"
            {...form.register("title")}
            value={todos?.title || ""}
            onChange={(e) => {
              if (!todos) {
                setUpdateTodo({
                  title: e.target.value,
                  completed: false,
                  id: 0,
                });
              } else {
                setUpdateTodo({
                  ...todos,

                  title: e.target.value,
                });
              }
            }}
          />
          {todos?.id != null && todos?.id !== 0 && (
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 p-3 rounded-full bg-destructive border-none text-white hover:border-2 hover:border-black cursor-pointer"
              onClick={() => setUpdateTodo(null)}
              type="button"
            >
              <X size={20} />
            </Button>
          )}
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
