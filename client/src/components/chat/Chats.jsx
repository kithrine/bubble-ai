import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { addChat, getAllChats } from "../../redux/chatSlice"
import { createChat, getOneConversation } from "../../redux/conversationSlice"
import { motion } from "motion/react"
import Markdown from "react-markdown"
import GPTIcon from "../../icons/GPTIcon"

const Chats = () => {
  const { conversation } = useSelector((state) => state.conversation)
  const chatStatus = useSelector((state) => state.conversation.status)
  
  const [finalResponse, setFinalResponse] = useState("")

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneConversation(id))
  }, [finalResponse])

  useEffect(() => {
    const historyEnd = document.getElementById("historyEnd")
    if (historyEnd) {
      historyEnd.scrollIntoView({ behavior: "smooth" })
    }
  }, [conversation.chats])

  return (
    <>
      
        <div class="max-w-full pb-7 lg:pb-10 mx-auto min-h-[74vh] bg-base-300">
          
          {conversation.chats.map((chat, index) => (
            <div className="flex flex-col">
              <div className="flex gap-5.5 py-4 min-w-full bg-base-100 px-8">
                {chat.prompt !== "" && (
                  <>
                      <svg
                        className="size-8"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                    <div className="flex flex-col gap-1 w-[75vw]">
                      <div className="flex items-center gap-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold">
                          You
                        </span>
                        <span className="text-xs opacity-50">
                          {new Date(chat.date).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                          })}
                        </span>
                      </div>
                    
                        <p className="text-sm font-normal">
                          {" "}
                          {chat.prompt}
                        </p>
                  
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-start py-4 px-8 gap-5.5 min-w-full bg-base-300">
                {chat.answer !== "" && (
                  <>
                  {/* Chat Model Icons */}
                    {chat.model === "deepseek-r1" || chat.model === "deepseek-coder-v2" ? <img src={new URL("../../icons/DeepseekPng.png", import.meta.url).href} className="size-8" alt="..." /> : chat.model === "gemma2" ? <img src={new URL("../../icons/Gemma.png", import.meta.url).href} className="size-8" alt="..." /> : chat.model === "gpt-oss" ? <GPTIcon size={8} /> : chat.model === "mistral" ? <img src={new URL("../../icons/Mistral.png", import.meta.url).href} className="size-8" alt="..." /> : <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-robot w-8 h-8 text-neutral-600 dark:text-neutral-200"
                    viewBox="0 0 16 16">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                    </svg>}
                    <div className="flex flex-col gap-1 w-[75vw]">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold">
                          {chat.model}
                        </span>
                        <span className="text-xs opacity-50">
                          {new Date(chat.date).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                          })}
                        </span>
                      </div>
                        <div className="text-sm font-normal">
                          {" "}
                          {chat.answer.length > 0 && (
                            <Markdown>{chat.answer}</Markdown>
                          )}
                        </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          <div id="historyEnd" />

        </div>

        {/* <ChatTextarea /> was here basically */}
    </>
  )
}

export default Chats