import { TiThMenu } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [city, setCity] = useState(null);

  return (
    <header className="flex justify-between items-center px-6 pt-4 pb-2">
      <span className="material-symbols-outlined text-blue-400">
        <TiThMenu />
      </span>

      <h1 className="text-lg font-semibold text-blue-400">San Francisco</h1>

      <div className="flex justify-between items-center gap-5 p-2  border border-gray-300 rounded-lg transition-all duration-300 bg-[#F8FAFC] hover:border-[#E8EAED] hover:ring-2 hover:ring-[#5ea3f8]">
        <input
          onChange={() => setCity(city)}
          type="text"
          placeholder="Enter City"
          className="w-[100%] p-2 border-none rounded-lg outline-none"
        />
        <span className="material-symbols-outlined text-blue-400 pr-1 cursor-pointer">
          <FaSearch size={22} />
        </span>
      </div>
    </header>
  );
}
