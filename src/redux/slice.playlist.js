import { createSlice } from "@reduxjs/toolkit";

export const userPlaylist = createSlice({
  name: "playlist",
  initialState: {
    playlist: null,
  },
  reducers: {
    GET_PLAYLIST: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

export const { GET_PLAYLIST } = userPlaylist.actions;
export default userPlaylist.reducer;
