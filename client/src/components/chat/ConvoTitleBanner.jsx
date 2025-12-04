import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GrEdit } from "react-icons/gr";
import ModelInstructionsModal from '../modals/ModelInstructionsModal'
import { getConversationInfo, getOneConversation } from '../../redux/conversationSlice';
import { useParams } from 'react-router';

const ConvoTitleBanner = () => {
  const { conversation } = useSelector((state) => state.conversation)
  const { id } = useParams()
  const [ editConversation, setEditConversation ] = useState("")
  const [ isEditing, setIsEditing ] = useState(false)
  const [ inputWidth, setInputWidth ] = useState(conversation.title.length * 8 + "px"); // Initial width
  console.log("conversation.title.length", conversation.title.length)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneConversation(id))
  }, [])
  

  const showTitleEditInput = () => {
    console.log("WORKING!", conversation.title)
    // Start editing
    setIsEditing(true)
    setEditConversation(conversation.title)
  }

  const handleTitleUpdate = () => {
    
  }

  const handleInputChange = (e) => {
    const newWidth = e.target.value.length * 8 + 'px'; // Adjust the multiplier as needed to get a good starting point
    if (newWidth <= '500px') { // Maximum width set to 500px in this example
      setInputWidth(newWidth);
    }
    setEditConversation(e.target.value)
  };

  return (
    <>
      <nav class="bg-secondary border-y border-neutral-content/70 fixed top-16 z-50 w-full">
        <div class="px-4 py-2 mx-auto">
            <div class="flex items-center gap-x-3 text-secondary-content">
                <div className="flex gap-x-1 items-center">
                  {!isEditing ? 
                    <span>{conversation.title}</span>
                  :
                  <div className="relative">
                    <input
                      type="text"
                      value={editConversation}
                      onChange={handleInputChange}
                      // onFocus={(e) => {if (!editConversation) inputWidth = conversation.title.length * 8 + "px"}}
                      style={{ width: inputWidth }} // Use inline style to override Tailwind CSS classes
                      className="input focus:outline-none border-primary-content text-base-content min-w-50 h-8"
                    />
                  </div>
                  }
                  <span>
                    <div className="tooltip tooltip-bottom" data-tip="Edit title">
                      <button onClick={() => showTitleEditInput()} className="btn btn-circle btn-secondary size-8">
                      <GrEdit size={15} />
                      </button>
                    </div>
                  </span>
                </div>
                <span className="">•</span>
                <button className="btn btn-secondary mix-blend-hard-light h-8" onClick={() => document.getElementById('model-instructions-modal').showModal()}>Show Model Instructions</button>

                <ModelInstructionsModal modelInstructions={conversation.modelInstructions} />
                {/* mix-blend-screen best so far? **WITH THE bg-base-100 instead of btn-secondary*/}
                {/* best with btn-secondary: mix-blend-darken, mix-blend-hard-light,  */}
                {/* <button className="btn btn-ghost btn-secondary py-1">Show Model Instructions</button> */}
            </div>
        </div>
      </nav>
    </>
  )
}

export default ConvoTitleBanner