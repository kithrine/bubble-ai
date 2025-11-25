import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import chatIndex from "./chat/chatIndex.js"
import conversationIndex from "./conversations/conversationIndex.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const port = process.env.EXPRESS_PORT || 8020

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all("/", (req, res) => {
  res.status(404).json({
    success: false,
    data: "404"
  })
})

app.use("/chat", chatIndex)
app.use("/conversation", conversationIndex)

try {
  const mongoURL = process.env.MONGODB_URL || ""
  await mongoose.connect(mongoURL)
  console.log(`Bubble AI connected to database ${mongoURL}`)

  app.listen(port, () => {
    console.log(`Bubble AI app listening on port ${port}`)
    })
}
catch(err) {
  console.log(err)
}