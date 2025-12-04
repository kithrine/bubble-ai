import { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getOneConversation } from '../redux/conversationSlice'
import Chats from '../components/chat/Chats'
import ChatTextarea from '../components/chat/ChatTextarea'
import ConvoTitleBanner from '../components/chat/ConvoTitleBanner'

const ConversationDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("ConversationDetail useEffect")
    dispatch(getOneConversation(id))
  }, [])
  
  // console.log("conversation", conversation)

  return (
    <>
      <ConvoTitleBanner />
      <div class="relative h-full bg-base-100 pt-28">
        {/* <div className="bg-amber-400 min-h-[20vh] pt-16 text-black">
          <div className="text-5xl">Bubble BUBBLE</div>
            title: {conversation.title}<br />
            modelInstructions: {conversation.modelInstructions}
        </div> */}
        <Chats />
        <ChatTextarea />
      </div>
    </>
  )
}

export default ConversationDetail