import express from "express";
import conversationCreate from "./conversationCreate";

const conversationIndex = express.Router()

conversationIndex.post("/", conversationCreate)
conversationIndex.get("/info", conversationGetInfo)

export default conversationIndex