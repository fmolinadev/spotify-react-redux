import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    ADD_USER: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { ADD_USER } = userReducer.actions;
export default userReducer.reducer;
