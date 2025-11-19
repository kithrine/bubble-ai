import conversationModel from "./conversationModel.js"

const conversationCreate =  async (req, res) => {
  const { title, modelInstructions } = req.body
 
  // Validation
  if ((!title || title == "")) {
    res.status(500).json({ "message": "Conversation information not valid."})
  } 
  else {
    const conversation = await conversationModel.create({ title, modelInstructions })
    console.log("conversation", conversation)

    res.status(200).json({ success: true, "message": "Conversation created.", conversation: conversation })
  }
}

export default conversationCreate
