import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./storeUser.jsx";

let state = {};

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    user: userReducer,
  }),
});
