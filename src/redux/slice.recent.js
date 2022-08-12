import { createSlice } from "@reduxjs/toolkit";

export const userRecent = createSlice({
  name: "recent",
  initialState: {
    recent: null,
  },
  reducers: {
    GET_RECENT: (state, action) => {
      state.recent = action.payload;
    },
  },
});

export const { GET_RECENT } = userRecent.actions;
export default userRecent.reducer;
