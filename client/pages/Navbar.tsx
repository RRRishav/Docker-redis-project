import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-white text-2xl font-bold tracking-wide">
         OJatta  
        </h1>
        <button 
   
          className="text-white border-none bg-cyan-500 px-5 py-2 rounded-none hover:bg-white/20 transition duration-300 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
