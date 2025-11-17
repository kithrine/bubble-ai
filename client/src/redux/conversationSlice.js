import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import conversationService from "./conversationService";

const initialState = {
  loading: false,
  status: "",
  success: false,
  conversation: {
    name: "",
    modelInstructions: "",
    dateCreated: "",
    favorited: false,
    archived: false,
    chats: [
      {
        prompt: "",
        model: "",
        date: "",
        answer: "",
        favorited: false,
        archived: false
      }
    ]
  },
  conversations: [],
};

export const addConversation = createAsyncThunk("conversation/add", async (conversationCreateForm) => {
  const response = await conversationService.addConversation(conversationCreateForm);
  return response.data;
});

export const getAllConversations = createAsyncThunk("conversation/getAll", async () => {
  console.log("redux getAllConversations");
  const response = await conversationService.getAllConversations();
  console.log("redux getAllConversations response", response);
  return response.data;
});

export const deleteConversation = createAsyncThunk("conversation/delete", async (id) => {
  const response = await conversationService.deleteConversation(id);
  return response.data;
});

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    conversationSearched(state, action) {
        console.log("conversationSearched searchText", action.payload)
        state.searchText = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // List of all conversations
      .addCase(getAllConversations.pending, (state, action) => {
        console.log("conversationSlice getAllConversations.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getAllConversations.fulfilled, (state, action) => {
        console.log("conversationSlice getAllConversations.fulfilled", action.payload);
        console.log(action.payload.conversations);
        state.loading = false;
        state.conversations = action.payload.conversations;
        state.success = true;
      })
      .addCase(getAllConversations.rejected, (state, action) => {
        console.log("conversationSlice getAllConversations.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Add Conversation
      .addCase(addConversation.pending, (state, action) => {
        console.log("conversationSlice addConversation.pending", action.payload);
        state.loading = true;
        state.success = false;
        state.status = "loading"
      })
      .addCase(addConversation.fulfilled, (state, action) => {
        console.log("conversationSlice addConversation.fulfilled", action.payload);
        console.log(action.payload.conversation);
        state.loading = false;
        state.success = true;
        state.conversation = action.payload.conversation
        state.conversations = [...state.conversations, action.payload.conversation]
        state.status = "success"
      })
      .addCase(addConversation.rejected, (state, action) => {
        console.log("conversationSlice addConversation.rejected", action.payload);
        state.loading = false;
        state.success = false;
        state.status = "failed"
      })

      // Delete conversation
      .addCase(deleteConversation.pending, (state, action) => {
        console.log("conversationSlice deleteConversation.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(deleteConversation.fulfilled, (state, action) => {
        console.log("conversationSlice deleteConversation.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.conversations = action.payload.conversations;
        state.success = true;
      })
      .addCase(deleteConversation.rejected, (state, action) => {
        console.log("conversationSlice deleteConversation.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

  },
});

export const { conversationSearched } = conversationSlice.actions;

export default conversationSlice.reducer;