import chatModel from "./chatModel.js";

const chatDelete = async (req, res) => {
  const { id } = req.params;
  const chat = await chatModel.findOneAndDelete({ _id: id });
  const updatedChats = await chatModel.find({})
  res.status(200).json({ "success": true, chats: updatedChats })
};

export default chatDelete;
