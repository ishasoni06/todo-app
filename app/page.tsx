import StatusCard from "@/components/todo-components/status-card";
import TodoFrom from "@/components/todo-components/todo-form-component";

import { prisma } from "@/lib/db";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    // orderBy: { id: "asc" },
    orderBy: { id: "desc" },
  });

  return (
    <div className="container mx-auto w-1/3 py-20 flex flex-col gap-10 justify-center items-center">
      <StatusCard />
      <TodoFrom todos={todos} />
    </div>
  );
}
