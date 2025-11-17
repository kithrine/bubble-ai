import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "motion/react"
import { addChat, getAllChats } from "./redux/chatSlice"
import Markdown from "react-markdown"
import LoadingThreeDotsJumping from "./components/LoadingDots"
import "./App.css"
import SideNav from "./components/navigation/SideNav"
import NavbarHeader from "./components/navigation/NavbarHeader"
import chatService from "./redux/chatService"
import GPTIcon from "./icons/GPTIcon"
import ModelSelectBox from "./components/inputs/ModelSelectBox"
import Chats from "./layout/Chats"

const UserInterface = ({ handleTheme, theme }) => {
  const dispatch = useDispatch()
  const { chats, chat, loading } = useSelector((state) => state.chat)
  const chatStatus = useSelector((state) => state.chat.status)
  const [chatForm, setChatForm] = useState({
    prompt: "",
    model: "gemma2",
    date: new Date()
  })
  const [finalResponse, setFinalResponse] = useState("")

  useEffect(() => {
    dispatch(getAllChats())
    // console.log("getAllChats", getAllChats)
  }, [finalResponse])

  useEffect(() => {
    const historyEnd = document.getElementById("historyEnd")
    if (historyEnd) {
      historyEnd.scrollIntoView({ behavior: "smooth" })
    }
  }, [chats])

  const handleAIQuestion = async (e) => {
    console.log("something")
    //! OLD
    e.preventDefault()
    console.log("chatForm", chatForm)
    dispatch(addChat(chatForm))
    setChatForm({ ...chatForm, prompt: ""})
    setFinalResponse(chat.answer)

    //! NEW
    // const response = await chatService.addChat(chatForm)
  
    // const stream = response.data;

    // for await (const chunk of stream) {
    //   console.log(chunk);
    //   setFinalResponse(fr => `${fr}${chunk}`)
    // }

    //! AI SLOP??
    // e.preventDefault(); // Prevent form submission if needed
    // const response = await chatService.addChat(chatForm);
    // console.log("response", response)
    // const reader = response.data.getReader();
    // const decoder = new TextDecoder('utf-8');
    // let buffer = '';

    // while (true) {
    //   const { value, done } = await reader.read();
    //   if (done) break;
    //   buffer += decoder.decode(value, { stream: true });
    //   setFinalResponse((prev) => prev + decoder.decode(value)); // Update state in real-time
    // }
  }

  return (
    <>
      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main class="md:ps-65 md:hs-overlay-minified:ps-13 transition-all duration-300 min-h-full flex flex-col bg-base-100">

        <NavbarHeader handleTheme={handleTheme} theme={theme} />

        <div class="min-h-full flex flex-col justify-between w-full mx-auto pt-16 bg-base-100">




        <Chats />






          

        </div>
      </main>
      {/* <!-- ========== END MAIN CONTENT ========== --> */}
    </>
  )
}

export default UserInterface
