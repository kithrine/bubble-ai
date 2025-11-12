import chatModel from "./chatModel.js"

const chatGetAll = async (req, res) => {
  
  const chats = await chatModel.find()
  console.log("chats", chats)
  res.status(200).json({ success: true, "chats": chats });
};

export default chatGetAll;