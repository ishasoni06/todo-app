import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";


export default function AddTodoInput({todos, setTodos }: { todos: { id: number; title: string; completed: boolean }[], setTodos: (todos: { id: number; title: string; completed: boolean }[]) => void }) {

    const [input, setInput] = useState("");

    const handleAddTodo = () => {
        setTodos([...todos, { id: todos.length + 1, title: input, completed: false }]);
        setInput("");
    }

    return (
        <div className="flex items-center gap-2 max-w-lg w-full px-5">
            <Input 
                className="border-2 border-black h-10 py-6 rounded-3xl" 
                placeholder="Write your todo here" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 p-3 rounded-full bg-black border-none text-white hover:border-2 hover:border-black cursor-pointer" 
                onClick={handleAddTodo}
            >
                <Plus size={20} />
            </Button>
        </div>
    )
}