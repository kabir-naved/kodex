import React, { useState } from "react";
import handelSearch from '../../hooks/useSearch';
import useSearch from "../../hooks/useSearch";
import { Search } from "lucide-react";
import SearchDropdown from "./SearchDropdown";



function SearchInput({handelSearch, ...props}) {
   const { searchValue, handleSearch, searchedSong} = useSearch();

  return (
    <div className="flex items-center bg-[#1f1f1f] px-4 h-12 rounded-full w-full hover:bg-[#2a2a2a] transition focus-within:ring-2 focus-within:ring-green-500">
      <Search size={20} className="text-gray-400 mr-3 shrink-0" />
      <input
        onChange={handleSearch}
        className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 outline-none cursor-pointer"
        {...props}
      />
    {
        searchValue ?   <SearchDropdown searchedSong={searchedSong} /> : null
    }
    </div>
  );
}

export default SearchInput;
