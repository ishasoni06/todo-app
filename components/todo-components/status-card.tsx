import { prisma } from "@/lib/db";

export default async function StatusCard() {
  const todos = await prisma.todo.findMany();

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className="p-4 rounded-xl border-2 border-black max-w-lg w-full flex gap-8 items-center justify-between px-8">
      <div>
        <h1 className="text-3xl font-bold">Todo Done</h1>
        <h3 className="text-lg ">Keep it up</h3>
      </div>
      <div className="bg-black text-white rounded-full p-8 h-40 w-40 flex items-center justify-center font-bold text-4xl">
        {completedTodos}/{totalTodos}
      </div>
    </div>
  );
}
