import promptModel from "./promptModel.js";

const promptDelete = async (req, res) => {
  const { id } = req.params;
  const prompt = await promptModel.findOneAndDelete({ _id: id });
  const updatedPrompts = await promptModel.find({})
  res.status(200).json({ "success": true, prompts: updatedPrompts })
};

export default promptDelete;
