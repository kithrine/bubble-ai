import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getOneConversation } from '../redux/conversationSlice'
import Chats from '../layouts/Chats'

const ConversationDetail = () => {
  const { id } = useParams()
  const { conversation } = useSelector((state) => state.conversation)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneConversation(id))
  }, [])
  
  console.log("conversation", conversation)

  return (
    <>
      <div class="relative h-full bg-base-100 pt-16">
        <div className="bg-amber-400 min-h-[20vh] pt-16 text-black">
          <div className="text-5xl">Bubble BUBBLE</div>
        title: {conversation.title}<br />
        modelInstructions: {conversation.modelInstructions}

        </div>
        {/* <Chats /> */}
      </div>
    </>
  )
}

export default ConversationDetail