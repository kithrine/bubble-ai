import conversationModel from "./conversationModel.js";

const conversationGetOne = async (req, res) => {
    const { id } = req.params;
    const conversation = await conversationModel.findOne({ _id: id })
    
    
    // let conversation = []
    // conversation = await conversationModel.findOne({ _id: id })
    // console.log("server: conversation", conversation)
    // if (conversation.length === 0) {
    //     return res.status(404).send('Training Class not found');
    //   }
  
    res.status(200).json({"success": true, conversation: conversation});

}

export default conversationGetOne