import React from "react";
import { Play } from "lucide-react";
import useDashboard from "../../hooks/useDashboard";
import { playNewSong } from "../../../player/state/playerSlice";

function SongCard({ song }) {
    const {dispatch} = useDashboard();
  return (
    <div className="bg-[#181818] p-3 rounded-lg hover:bg-[#282828] transition duration-300 cursor-pointer w-[180px]">
      {/* Image + Play Button */}
      <div className="relative group">
        <img
          src={song.thumbnail}
          alt={song.title}
          className="w-full h-[160px] object-cover rounded-md"
        />

        {/* Play Button */}
        <button
        onClick={() => dispatch(playNewSong(song))}
        className="absolute bottom-2 right-2 bg-green-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg cursor-pointer hover:scale-120">
          <Play className="text-black" size={20} />
        </button>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3 className="text-white text-sm font-semibold truncate">
          {song.title}
        </h3>
        <p className="text-gray-400 text-xs mt-1 truncate">{song.artist}</p>
      </div>
    </div>
  );
}

export default SongCard;
