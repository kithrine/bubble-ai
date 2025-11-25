import conversationModel from "./conversationModel.js"
import axios from "axios"

const chatCreate =  async (req, res) => {
  const { id } = req.params
  const { prompt, model, date, favorited, archived, modelInstructions } = req.body;
  console.log("REQ.BODY", req.body)
  console.log("REQ.BODY.PROMPT", req.body.prompt)
  console.log("REQ.BODY.MODEL", req.body.model)
  console.log("prompt, model", prompt, model)
  console.log("modelInstructions BACKEND CHATCREATE", modelInstructions)


  // Validation
  if (!prompt || prompt == "") {
    res.status(500).json({ "message": "Chat input not valid."})
  } 
  else {
    // new
    const conversation = await conversationModel.findOne({ _id: id })
    console.log("conversation", conversation)
    console.log("conversation.chats", conversation.chats)

    //old
    const response = await axios.post(`${process.env.OLLAMA_API_URL}`, { prompt: modelInstructions + prompt, model })
    console.log("response", response)

    let responseText = ""
    const responseLines = response.data.split("\n")
    for (const d of responseLines) {
      try {
        const obj = JSON.parse(d)
        responseText += obj.response
        // console.log(obj)
      } catch (err) {
        console.log("This llama won't hunt!")
      }
    }
    console.log("responseText", responseText)

    // const chatResponse = await conversationModel.create({ prompt, model, answer: responseText })

    // OPTION 1

    // new
    // let newChat = conversation.chats.push({ prompt, model, answer: responseText, date, favorited, archived })
    // conversation.save()

    // OPTION 2
    const newChat = await conversationModel.findOneAndUpdate({ _id: id }, { $push: { "chats": { prompt, model, answer: responseText, date, favorited, archived } } }, { new: true })
    console.log("newChat", newChat)

    res.status(200).json({ "success": true, "message": "Chat created.", conversation: newChat })
  }
}

export default chatCreate