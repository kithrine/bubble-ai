import mongoose from "mongoose";
import conversationSchema from "./conversationSchema.js";

conversationSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  }
})

const conversationModel = mongoose.model("conversations", conversationSchema)

export default conversationModel
