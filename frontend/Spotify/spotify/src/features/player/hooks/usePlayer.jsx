import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../app/store/store";
import { pause, play } from "../state/playerSlice";

function usePlayer() {
  let audioRef = useRef(new Audio());
  const dispatch = useDispatch();

  const { currentPlaying, isPlaying } = useSelector((store) => store.player);

  useEffect(() => {
    if (!currentPlaying) return;

    audioRef.current.src = currentPlaying.url;
    audioRef.current.play();
  }, [currentPlaying]);

  useEffect(() => {
    if (!currentPlaying) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  //   call actions play and pause
  let togglePlayAndPause = () => {
    console.log("is playing...", isPlaying);
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  return {
    togglePlayAndPause,
  };
}
export default usePlayer;
