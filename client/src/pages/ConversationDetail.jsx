import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getOneConversation } from '../redux/conversationSlice'
import Chats from '../components/chat/Chats'
import ChatTextarea from '../components/chat/ChatTextarea'
import ModelInstructionsModal from '../components/modals/ModelInstructionsModal'

const ConversationDetail = () => {
  const { id } = useParams()
  const { conversation } = useSelector((state) => state.conversation)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneConversation(id))
  }, [])
  
  // console.log("conversation", conversation)

  return (
    <>
      <nav class="bg-secondary border-y border-neutral-content/70 fixed top-16 z-50 w-full">
          <div class="px-4 py-2 mx-auto">
              <div class="flex items-center gap-x-3 text-secondary-content">
                  <span className="">{conversation.title}</span>
                  <span className="">•</span>
                  {/* <button className="btn btn-secondary mix-blend-hard-light h-8">Show Model Instructions</button> */}
                  <button className="btn btn-secondary mix-blend-hard-light h-8" onClick={()=>document.getElementById('model-instructions-modal').showModal()}>Show Model Instructions</button>

                  <ModelInstructionsModal conversation={conversation} />
                  {/* mix-blend-screen best so far? **WITH THE bg-base-100 instead of btn-secondary*/}
                  {/* best with btn-secondary: mix-blend-darken, mix-blend-hard-light,  */}
                  {/* <button className="btn btn-ghost btn-secondary py-1">Show Model Instructions</button> */}
              </div>
          </div>
        </nav>
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