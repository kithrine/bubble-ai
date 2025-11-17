import conversationModel from "./conversationModel.js"

const conversationGetAll =  async (req, res) => {
    const getAllConversations = await conversationModel.find()
    console.log("getAllConversations", getAllConversations)
    res.status(200).json({ "success": true, conversations: getAllConversations })
}

export default conversationGetAll