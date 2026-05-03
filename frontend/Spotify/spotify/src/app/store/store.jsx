import { configureStore } from "@reduxjs/toolkit";
import  playerReducer  from "../../features/player/state/playerSlice";
import errorReducer from    "../shared/state/errorSlice"
export const store = configureStore({
  reducer: {
    player: playerReducer,
    error:  errorReducer,
  },
});
