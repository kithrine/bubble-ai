import conversationModel from "./conversationModel.js"

const conversationGetAllOnlyInfo =  async (req, res) => {

  const getAllConversationsInfo = await conversationModel.find().project({ chats: 0 })

  console.log("getAllConversationsInfo", getAllConversationsInfo)
  res.status(200).json({ "success": true, conversations: getAllConversationsInfo })
}

export default conversationGetAllOnlyInfo
