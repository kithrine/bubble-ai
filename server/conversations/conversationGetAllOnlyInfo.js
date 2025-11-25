import conversationModel from "./conversationModel.js"

const conversationGetAllOnlyInfo =  async (req, res) => {

  // const getAllConversationsInfo = await conversationModel.find().project({ chats: 0 })
  const getAllConversationsInfo = await conversationModel.find({}, { chats: 0 })
  // const getAllConversationsInfo = await conversationModel.findOneById("691cc97378ab1fc24d335231")

  // console.log("getAllConversationsInfo", getAllConversationsInfo)
  res.status(200).json({ "success": true, conversations: getAllConversationsInfo })
}

export default conversationGetAllOnlyInfo
