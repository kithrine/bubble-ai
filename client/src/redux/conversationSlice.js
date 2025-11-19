import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import conversationService from "./conversationService";

const initialState = {
  loading: false,
  status: "",
  success: false,
  conversation: {
    title: "",
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

export const getConversationInfo = createAsyncThunk("conversation/getConvoInfo", async () => {
  // console.log("redux getConversationInfo");
  const response = await conversationService.getConvoInfo();
  // console.log("redux getConversationInfo response", response);
  return response.data;
});

export const getOneConversation = createAsyncThunk("conversation/getOne", async (id) => {
  console.log("redux getOneConversation id", id)
  const response = await conversationService.getOneConvo(id)
  return response.data
})

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
      // Add Conversation
      .addCase(addConversation.pending, (state, action) => {
        // console.log("conversationSlice addConversation.pending", action.payload);
        state.loading = true;
        state.success = false;
        state.status = "loading"
      })
      .addCase(addConversation.fulfilled, (state, action) => {
        // console.log("conversationSlice addConversation.fulfilled", action.payload);
        // console.log(action.payload.conversation);
        state.loading = false;
        state.success = true;
        state.conversation = action.payload.conversation
        // state.conversations = [...state.conversations, action.payload.conversation]
        state.status = "success"
      })
      .addCase(addConversation.rejected, (state, action) => {
        // console.log("conversationSlice addConversation.rejected", action.payload);
        state.loading = false;
        state.success = false;
        state.status = "failed"
      })

      // Get All Conversations
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

      // Get Only Info for Conversations
      .addCase(getConversationInfo.pending, (state, action) => {
        // console.log("conversationSlice getConversationInfo.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getConversationInfo.fulfilled, (state, action) => {
        // console.log("conversationSlice getConversationInfo.fulfilled", action.payload);
        // console.log(action.payload.conversations);
        state.loading = false;
        state.conversations = action.payload.conversations;
        state.success = true;
      })
      .addCase(getConversationInfo.rejected, (state, action) => {
        // console.log("conversationSlice getConversationInfo.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Get One Conversation
      .addCase(getOneConversation.pending, (state, action) => {
        console.log("conversationSlice getOneConversation.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getOneConversation.fulfilled, (state, action) => {
        console.log("conversationSlice getOneConversation.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.conversation = action.payload.conversation;
        state.success = true;
      })
      .addCase(getOneConversation.rejected, (state, action) => {
        console.log("conversationSlice getOneConversation.rejected", action.payload);
        state.loading = false;
        state.success = false;
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