import AddTodoInput from "@/components/todo-components/add-todo-input";
import StatusCard from "@/components/todo-components/status-card";
import TodoList from "@/components/todo-components/todo-list";
import { prisma } from "@/lib/db";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <div className="container mx-auto w-1/3 py-20 flex flex-col gap-10 justify-center items-center">
      <StatusCard />
      <AddTodoInput todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}
