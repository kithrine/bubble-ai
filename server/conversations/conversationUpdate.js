import conversationModel from "./conversationModel.js";

const conversationUpdate = async (req, res) => {
  const { id } = req.params
  const { title, modelInstructions, dateCreated, favorited, archived, chats } = req.body

  console.log("conversationUpdate req.body", req.body)

  if (!title || title == "") {
    res.status(500).json({ message: "Conversation information not valid."})
  } else {
    const conversation = await conversationModel.findOneAndUpdate({ _id: id }, { title, modelInstructions, dateCreated, favorited, archived, chats }, { new: true })
    console.log("updated conversation", conversation)
    res.status(200).json({ success: true, message: "Conversation updated successfully.", conversation: conversation})
  }
}

export default conversationUpdate