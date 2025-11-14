import mongoose from "mongoose";

const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  name: String,
  modelInstructions: String,
  dateCreated: { type: Date, default: Date.now },
  pinned: Boolean,
  archived: Boolean,
  chats: [
    {
      prompt: String,
      model: String,
      date: { type: Date, default: Date.now },
      answer: String,
      archived: Boolean,
      favorited: Boolean
    }
  ]
});

export default conversationSchema;

//* STRUCTURE OF THE CONVERSATION SCHEMA
// name: String,
// modelInstructions: String,
// chats: [
//   {
//     prompt: String,
//     model: String,
//     date: { type: Date, default: Date.now },
//     answer: String,
//     archived: Boolean,
//     favorited: Boolean
//   }
// ]

//* OVERALL STRUCTURE??
// conversations: [
//   {
//     name: String,
//     modelInstructions: String,
//     chats: [
//       chat: {
//         prompt: String,
//         model: String,
//         date: { type: Date, default: Date.now },
//         answer: String,
//         archived: Boolean,
//         favorited: Boolean
//       }
//     ]
//   }
// ]