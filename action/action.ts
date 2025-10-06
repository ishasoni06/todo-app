"use server";

import {prisma, PrismaClient} from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export  async function createTodo(formData:FormData) {
    
   const title=formData.get("title")?.toString();
   if (!title) {
    throw new Error("Content is required");
  }
    const newTask=await prisma.todo.create({
        data:{
            title,
            completed:false,
        },
    })
    
    redirect("/");
   
    
}
export  async function deleteTodo(id:number) {
  //  const id=formData.get("id");
    await prisma.todo.delete({
        where:{
            id
        },
    })
    // redirect("/");
}
export  async function UpdateTodo(formData:FormData) {
    const id=formData.get("id");
    const title=formData.get("title")?.toString();
    await prisma.todo.update({
        where:{
            id:Number(id)
        },
        data:{
            title,
        }
    })
     redirect("/");
}
export  async function checkTodo(id:number) {
    const todo=await prisma.todo.findUnique({where:{id}})
    await prisma.todo.update({
        where:{
            id
        },
        data:{
           completed:!todo?.completed
        }
    })
    
}

