import mongoose from "mongoose";

const { Schema } = mongoose

const promptSchema = new Schema({
  prompt: String,
  model: String,
  date: { type: Date, default: Date.now },
  answer: String
});

export default promptSchema;

