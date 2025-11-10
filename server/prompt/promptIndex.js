import express from "express";
import promptCreate from "./promptCreate.js"
import promptGetAll from "./promptGetAll.js";
import promptDelete from "./promptDelete.js";

const promptIndex = express.Router()

// Get all prompts
promptIndex.get("/", promptGetAll)

// Create prompt
promptIndex.post("/", promptCreate)

// Delete prompt
promptIndex.delete("/:id", promptDelete)

export default promptIndex