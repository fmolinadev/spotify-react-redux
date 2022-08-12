import { createSlice } from "@reduxjs/toolkit";

export const getTracksPlaylist = createSlice({
  name: "tracklist",
  initialState: {
    tracklist: null,
  },
  reducers: {
    GET_TRACKS: (state, action) => {
      state.tracklist = action.payload;
    },
  },
});

export const { GET_TRACKS } = getTracksPlaylist.actions;
export default getTracksPlaylist.reducer;
