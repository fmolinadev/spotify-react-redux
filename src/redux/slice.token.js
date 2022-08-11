import { createSlice } from "@reduxjs/toolkit";

export const userToken = createSlice({
  name: "token",
  initialState: {
    token: null,
  },
  reducers: {
    ADD_TOKEN: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { ADD_TOKEN } = userToken.actions;
export default userToken.reducer;
