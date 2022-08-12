import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./slice.user";
import { userToken } from "./slice.token";
import thunk from "redux-thunk";
import { userPlaylist } from "./slice.playlist";
import { userTopArtist } from "./slice.top";
import { userRecent } from "./slice.recent";

export default configureStore(
  {
    reducer: {
      user: userReducer.reducer,
      token: userToken.reducer,
      playlist: userPlaylist.reducer,
      top: userTopArtist.reducer,
      recent: userRecent.reducer,
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
);
