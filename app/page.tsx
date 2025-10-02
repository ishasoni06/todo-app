"use client";
import { useState } from "react";
import AddTodoInput from "@/components/todo-components/add-todo-input";
import StatusCard from "@/components/todo-components/status-card";
import TodoList from "@/components/todo-components/todo-list";

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

const placeholderTodos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: true,
  },

  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
];

export default function Home() {
  const [todos, setTodos] = useState<Todos[]>(placeholderTodos);
  const [selectId, setSelectId] = useState<number>(0);
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(false);

  const handleEditId = (id: number, title: string) => {
    setInput(title);
    setEditing(true);
    setSelectId(id);
  };

  return (
    <div className="container mx-auto w-1/3 py-20 flex flex-col gap-10 justify-center items-center">
      <StatusCard todos={todos} />
      <AddTodoInput
        todos={todos}
        setTodos={setTodos}
        selectId={selectId}
        setSelectId={setSelectId}
        input={input}
        setInput={setInput}
        editing={editing}
        setEditing={setEditing}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        //selectId={selectId}
        //setSelectId={setSelectId}
        onEdit={handleEditId}
      />
    </div>
  );
}
