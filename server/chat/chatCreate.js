import chatModel from "./chatModel.js"
import ollama from "ollama"
import axios from "axios"

const chatCreate =  async (req, res) => {
  const { prompt, model } = req.body
  console.log("prompt, model", prompt, model)
  // Validation
  if (
    (!prompt || prompt == "")
  ) {
    res.status(500).json({ "message": "Chat input not valid."})
  } 
  else {
    const stream = await ollama.chat({
      model: model,
      // messages: [{ role: "user", content: "What is 17 × 23?" }],
      // messages: [{ role: "user", content: "what is ollama?" }],
      messages: [{ role: "user", content: prompt }],
      stream: true,
    })
  
    let inThinking = false
    let content = ""
    console.log("content #1", content)
    let thinking = ""
  
    for await (const chunk of stream) {
      if (chunk.message.thinking) {
        if (!inThinking) {
          inThinking = true
          res.write("Thinking:\n")
        }
        res.write(chunk.message.thinking)
        // accumulate the partial thinking
        thinking += chunk.message.thinking
      } else if (chunk.message.content) {
        if (inThinking) {
          inThinking = false
          res.write("\n\nAnswer:\n")
        }
        res.write(chunk.message.content)
        // accumulate the partial content
        content += chunk.message.content
        console.log("content #2", content)
      }
    }
  
    const new_messages = [{ role: "assistant", thinking: thinking, content: content }]
  
    // TODO: store in db
    const chatResponse = await chatModel.create({ prompt, model, answer: content })
    console.log("chatResponse", chatResponse)
  
    res.end()
    // res.status(200).json({ "success": true, "message": "Chat created.", chat: chatResponse })
    
    // const response = await axios.post(`${process.env.OLLAMA_API_URL}`, { prompt, model })
    // console.log("response", response)

    // let responseText = ""
    // const responseLines = response.data.split("\n")
    // for (const d of responseLines) {
    //   try {
    //     const obj = JSON.parse(d)
    //     responseText += obj.response
    //     // console.log(obj)
    //   } catch (err) {
    //     console.log("This llama won't hunt!")
    //   }
    // }
    // console.log("responseText", responseText)

    // const chatResponse = await chatModel.create({ prompt, model, answer: responseText })
    // console.log("chatResponse", chatResponse)

    // res.status(200).json({ "success": true, "message": "Chat created.", chat: chatResponse })
  }
}

export default chatCreate
