import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentPlaying: null,
    isPlaying: false,
  },
  reducers: {
  playNewSong: (state, action) => {
    state.currentPlaying = action.payload;
    state.isPlaying = true;
  },
  play: (state) => {
    state.isPlaying =true;
  },
  pause: (state) => {
    state.isPlaying = false;
  }
  },
});


export const { playNewSong, play, pause } = playerSlice.actions;

export default playerSlice.reducer;
