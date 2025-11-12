import express from "express";
import chatCreate from "./chatCreate.js"
import chatGetAll from "./chatGetAll.js";
import chatDelete from "./chatDelete.js";

const chatIndex = express.Router()

// Get all chats
chatIndex.get("/", chatGetAll)

// Create chat
chatIndex.post("/", chatCreate)

// Delete chat
chatIndex.delete("/:id", chatDelete)

export default chatIndex