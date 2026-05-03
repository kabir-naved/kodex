import React, { useState } from "react";
import { Home } from "lucide-react";
import SearchInput from "../../../search/ui/components/SearchInput";



function Navbar() {


   const runClick = () => {
    
   }
  return (
    <div className="w-full bg-black text-white px-4 py-2 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-2">
        {/* Logo */}
        <img src="/spotify-logo.png" alt="logo" className="h-8 w-8" />
      </div>

      <div className="flex items-center gap-4">
        {/* Home Button */}
        <button className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#2a2a2a] hidden sm:flex">
          <Home size={26} />
        </button>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-[#1f1f1f] rounded-full w-[250px] md:w-[450px] hover:bg-[#2a2a2a]">
          <div className="relative w-full max-w-[450px]">
            <SearchInput placeholder="Search songs..." type="text" />
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Install Button */}
        <button className="hidden sm:block text-sm font-semibold text-gray-300 hover:text-white">
          Install App
        </button>

        {/* User */}
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-black">
          S
        </div>
      </div>
    </div>
  );
}

export default Navbar;
