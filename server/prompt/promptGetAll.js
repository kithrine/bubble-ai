import promptModel from "./promptModel.js"

const promptGetAll = async (req, res) => {
  
  const prompts = await promptModel.find()
  console.log("prompts", prompts)
  res.status(200).json({ success: true, "prompts": prompts });
};

export default promptGetAll;