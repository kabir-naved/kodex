import React, { useRef, useState } from "react";
import { allSongs } from "../../dashboard/api/songsAPI";

function useSearch() {
    
    let songs = allSongs();
    const [searchValue, setSearchValue] = useState("");
    const [searchedSong, setsearchedSong] = useState([]);
    
    let timer = useRef(null);
    
    const handleSearch = (e) => {
        let value = e.target.value;
        setSearchValue(value);
        
        clearTimeout(timer.current);
        
        timer.current = setTimeout(() => {
            
            const filterSong = songs.filter((elem) => {
                return  elem.title.toLowerCase().includes(value.toLowerCase())
            })
            
            console.log("running...");
            setsearchedSong(filterSong);
            
        }, 500)
};
    

  return {
    searchValue,
    handleSearch,
    searchedSong,
  };
}

export default useSearch;
