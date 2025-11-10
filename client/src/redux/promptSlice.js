import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import promptService from "./promptService";

const initialState = {
  loading: false,
  success: false,
  prompt: {
    prompt: "",
    model: "",
    date: "",
    answer: ""
  },
  prompts: [
    {
      prompt: "",
      model: "",
      date: "",
      answer: ""
    },
  ],
};

export const addPrompt = createAsyncThunk("prompt/add", async (promptForm) => {
  const response = await promptService.addPrompt(promptForm);
  return response.data;
});

export const getAllPrompts = createAsyncThunk("prompt/getAll", async () => {
  console.log("redux getAllPrompts");
  const response = await promptService.getAllPrompts();
  console.log("redux getAllPrompts response", response);
  return response.data;
});

export const deletePrompt = createAsyncThunk("prompt/delete", async (id) => {
  const response = await promptService.deletePrompt(id);
  return response.data;
});

export const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    promptSearched(state, action) {
        console.log("promptSearched searchText", action.payload)
        state.searchText = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // // List of all prompts and answers
      .addCase(getAllPrompts.pending, (state, action) => {
        // console.log("promptSlice getAllPrompts.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getAllPrompts.fulfilled, (state, action) => {
        // console.log("promptSlice getAllPrompts.fulfilled", action.payload);
        // console.log(action.payload.prompts);
        state.loading = false;
        state.prompts = action.payload.prompts;
        state.success = true;
      })
      .addCase(getAllPrompts.rejected, (state, action) => {
        // console.log("promptSlice getAllPrompts.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Add Prompt
      .addCase(addPrompt.pending, (state, action) => {
        console.log("promptSlice addPrompt.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addPrompt.fulfilled, (state, action) => {
        console.log("promptSlice addPrompt.fulfilled", action.payload);
        console.log(action.payload.prompt);
        state.loading = false;
        state.success = true;
        state.prompt = action.payload.prompt
      })
      .addCase(addPrompt.rejected, (state, action) => {
        console.log("promptSlice addPrompt.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Delete prompt
      .addCase(deletePrompt.pending, (state, action) => {
        console.log("promptSlice deletePrompt.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(deletePrompt.fulfilled, (state, action) => {
        console.log("promptSlice deletePrompt.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.prompts = action.payload.prompts;
        state.success = true;
      })
      .addCase(deletePrompt.rejected, (state, action) => {
        console.log("promptSlice deletePrompt.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

  },
});

export const { promptSearched } = promptSlice.actions;

export default promptSlice.reducer;