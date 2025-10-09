"use server";

import {prisma, PrismaClient} from "@/lib/db";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";
import { title } from "process";


export  async function createTodo({title,completed}:{title:string,completed:boolean}) {
    
 
  
    const newTask=await prisma.todo.create({
        data:{
            title,
            completed,
        },
    })
    revalidatePath("/");
    return newTask;
    
}
export  async function deleteTodo(id:number) {
 
   const response=await prisma.todo.delete({
        where:{
            id
        },
    })
    revalidatePath("/");
     return response;
   
}
export  async function UpdateTodo(id: number, { title }: { title: string; }) {
    
    const response=await prisma.todo.update({
        where:{
            id
        },
        data:{
            title,
        }
    })
    revalidatePath("/");
    return response;
}
export  async function checkTodo(id:number) {
    const todo=await prisma.todo.findUnique({where:{id}})
    const response=await prisma.todo.update({
        where:{
            id
        },
        data:{
           completed:!todo?.completed
        }
    })
    revalidatePath("/");
    return response;
  
}

