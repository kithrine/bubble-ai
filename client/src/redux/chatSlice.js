import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import chatService from "./chatService";

const initialState = {
  loading: false,
  status: "",
  success: false,
  chat: {
    prompt: "",
    model: "",
    date: "",
    answer: ""
  },
  chats: [],
};

export const addChat = createAsyncThunk("chat/add", async (chatForm) => {
  const response = await chatService.addChat(chatForm);
  return response.data;
});

export const getAllChats = createAsyncThunk("chat/getAll", async () => {
  console.log("redux getAllChats");
  const response = await chatService.getAllChats();
  console.log("redux getAllChats response", response);
  return response.data;
});

export const deleteChat = createAsyncThunk("chat/delete", async (id) => {
  const response = await chatService.deleteChat(id);
  return response.data;
});

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatSearched(state, action) {
        console.log("chatSearched searchText", action.payload)
        state.searchText = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // // List of all chats and answers
      .addCase(getAllChats.pending, (state, action) => {
        // console.log("chatSlice getAllChats.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        // console.log("chatSlice getAllChats.fulfilled", action.payload);
        // console.log(action.payload.chats);
        state.loading = false;
        state.chats = action.payload.chats;
        state.success = true;
      })
      .addCase(getAllChats.rejected, (state, action) => {
        // console.log("chatSlice getAllChats.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Add Chat
      .addCase(addChat.pending, (state, action) => {
        console.log("chatSlice addChat.pending", action.payload);
        state.loading = true;
        state.success = false;
        state.status = "loading"
      })
      .addCase(addChat.fulfilled, (state, action) => {
        console.log("chatSlice addChat.fulfilled", action.payload);
        console.log(action.payload.chat);
        state.loading = false;
        state.success = true;
        state.chat = action.payload.chat
        state.chats = [...state.chats, action.payload.chat]
        state.status = "success"
      })
      .addCase(addChat.rejected, (state, action) => {
        console.log("chatSlice addChat.rejected", action.payload);
        state.loading = false;
        state.success = false;
        state.status = "failed"
      })

      // Delete chat
      .addCase(deleteChat.pending, (state, action) => {
        console.log("chatSlice deleteChat.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        console.log("chatSlice deleteChat.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.chats = action.payload.chats;
        state.success = true;
      })
      .addCase(deleteChat.rejected, (state, action) => {
        console.log("chatSlice deleteChat.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

  },
});

export const { chatSearched } = chatSlice.actions;

export default chatSlice.reducer;