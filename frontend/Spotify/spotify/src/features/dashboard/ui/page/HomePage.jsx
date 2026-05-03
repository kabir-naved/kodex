import React from "react";
import {allSongs} from '../../api/songsAPI'
import SongCard from "../components/SongCard";

function HomePage() {

const songs = allSongs()
console.log(songs);


  return (
    <div className=" min-h-screen">
      <h1 className="text-white text-2xl mb-4">Songs</h1>
      <div className="grid gap-4 grid-cols-4">
        {songs.map((item, index) => (
          <SongCard key={index} song={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
