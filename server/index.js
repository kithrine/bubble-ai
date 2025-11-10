import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import promptIndex from "./prompt/promptIndex.js"

const app = express()
app.use(express.json())
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

app.use("/prompt", promptIndex)

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