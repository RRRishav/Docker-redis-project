import { Button } from "@/components/ui/button";
import Navbar from "../pages/Navbar.tsx";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
function App() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const addTodoHandeler = async ()=>{
    try{
      const res = await axios.post(
        "http://localhost:8000/api/v1/todo/create",
        { title }, // request body
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true
        }
      );

      if (res.data.success) {
        alert("✅ Todo created successfully!");
      } else {
        alert(`⚠️ Failed: ${res.data.message || "Could not create todo"}`);
      }
      
    }catch(err){
        console.log(err)
    }
    
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Todo Input Area */}
      <div className="flex flex-col gap-4 mt-6 w-80">
        <Input
          type="text"
          placeholder="Add new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-white border border-gray-300 rounded-none focus:border-black focus:ring-1 focus:ring-black"
        />

        <Textarea
          placeholder="Add description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
          className="bg-white border border-gray-300 rounded-none focus:border-black focus:ring-1 focus:ring-black"
        />

        <Button
        onClick={addTodoHandeler}
         className="bg-black text-white border-none rounded-none hover:bg-gray-800 transition">
          Add Todo
        </Button>
      </div>
    </div>
  );
}

export default App;
