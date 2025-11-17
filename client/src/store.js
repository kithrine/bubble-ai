import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./redux/chatSlice"
import conversationReducer from "./redux/conversationSlice"

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    conversation: conversationReducer
  },
});