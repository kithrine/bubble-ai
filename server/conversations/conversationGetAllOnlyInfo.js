import conversationModel from "./conversationModel.js"

const conversationGetAllOnlyInfo =  async (req, res) => {

  const getAllConversationsInfo = await conversationModel.find()

  console.log("getAllConversationsInfo", getAllConversationsInfo)
  res.status(200).json({ "success": true, conversations: getConversationsByType })
}

export default conversationGetAllOnlyInfo
