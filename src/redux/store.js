import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from ".reducer";

export const store = configureStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
