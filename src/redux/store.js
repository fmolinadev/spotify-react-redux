import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./slice.user";
import { userToken } from "./slice.token";
import thunk from "redux-thunk";
import { userPlaylist } from "./slice.playlist";

export default configureStore(
  {
    reducer: {
      user: userReducer.reducer,
      token: userToken.reducer,
      playlist: userPlaylist.reducer,
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
);
