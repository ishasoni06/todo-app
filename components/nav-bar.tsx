import { LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";


export default function NavBar() {
  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <h1 className=" text-2xl font-bold">Xero Todo</h1>

    <div >
      <ul className="flex items-center gap-8 font-bold ">  
        <li><Link href="/">Todo</Link></li>
        <li><Link href="/timer">Timer</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </div>

        <Button variant="ghost">    
            <LogOutIcon className="w-4 h-4" />
        </Button>
    </div>
  );
}