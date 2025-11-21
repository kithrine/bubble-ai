import express from "express";
import conversationCreate from "./conversationCreate.js";
import conversationGetAllOnlyInfo from "./conversationGetAllOnlyInfo.js";
import conversationGetAll from "./conversationGetAll.js";
import conversationGetOne from "./conversationGetOne.js";
import chatCreate from "./chatCreate.js";

const conversationIndex = express.Router()

conversationIndex.post("/", conversationCreate)
conversationIndex.get("/", conversationGetAll)
conversationIndex.get("/info", conversationGetAllOnlyInfo)
conversationIndex.get("/id/:id", conversationGetOne)
conversationIndex.put("/:id/chat", chatCreate)

export default conversationIndex