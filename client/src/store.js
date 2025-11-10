import { configureStore } from "@reduxjs/toolkit";
import promptReducer from "./redux/promptSlice"

export const store = configureStore({
  reducer: {
    prompt: promptReducer
  },
});