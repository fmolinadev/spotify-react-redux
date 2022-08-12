import { createSlice } from "@reduxjs/toolkit";

export const userTopArtist = createSlice({
  name: "top",
  initialState: {
    top: null,
  },
  reducers: {
    GET_TOP: (state, action) => {
      state.top = action.payload;
    },
  },
});

export const { GET_TOP } = userTopArtist.actions;
export default userTopArtist.reducer;
