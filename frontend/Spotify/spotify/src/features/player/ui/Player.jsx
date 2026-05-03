import React from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
} from "lucide-react";
import usePlayer from "../hooks/usePlayer";

export default function Player() {

  const { togglePlayAndPause } = usePlayer();
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex items-center justify-between">
      {/* LEFT - Song Info */}
      <div className="flex items-center gap-3">
        <img
          src="https://via.placeholder.com/50"
          alt="song"
          className="w-12 h-12 rounded"
        />
        <div>
          <h3 className="text-sm font-semibold">Song Name</h3>
          <p className="text-xs text-gray-400">Artist Name</p>
        </div>
      </div>

      {/* CENTER - Controls */}
      <div className="flex flex-col items-center w-1/2">
        <div className="flex items-center gap-4 mb-2">
          <Shuffle size={18} className="cursor-pointer text-gray-400" />
          <SkipBack size={20} className="cursor-pointer" />

          <button 
          onClick={() => togglePlayAndPause()}
          className="bg-white text-black p-2 rounded-full">
            <Play size={20} />
          </button>

          <SkipForward size={20} className="cursor-pointer" />
          <Repeat size={18} className="cursor-pointer text-gray-400" />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center w-full gap-2 text-xs text-gray-400">
          <span>0:00</span>
          <div className="flex-1 h-1 bg-gray-600 rounded">
            <div className="w-1/3 h-1 bg-white rounded"></div>
          </div>
          <span>3:45</span>
        </div>
      </div>

      {/* RIGHT - Volume */}
      <div className="flex items-center gap-3">
        <Volume2 size={18} />
        <div className="w-24 h-1 bg-gray-600 rounded">
          <div className="w-1/2 h-1 bg-white rounded"></div>
        </div>
      </div>
    </div>
  );
}
