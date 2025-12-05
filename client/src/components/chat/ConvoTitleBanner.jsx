import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { getOneConversation, updateConversation} from '../../redux/conversationSlice';
import { GrEdit } from "react-icons/gr";
import { GiCheckMark } from "react-icons/gi";
import ModelInstructionsModal from '../modals/ModelInstructionsModal'

const ConvoTitleBanner = () => {
  const { conversation } = useSelector((state) => state.conversation)
  const { id } = useParams()
  const [ editTitle, setEditTitle ] = useState("")
  const [ isEditing, setIsEditing ] = useState(false)
  const inputRef = useRef(null);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneConversation(id))
  }, [id])
  
  useEffect(() => {
    if (isEditing) {
      // Focus the input element when editing starts
      inputRef.current.focus();
    } else {
      // Reset focus to document body or any other default element when editing stops
      document.activeElement.blur();
    }
  }, [isEditing]);
  
  useEffect(() => {
    if (!conversation?.editing) {
      setIsEditing(false); // Reset editing state if the conversation is no longer being edited
    }
  }, [conversation]);
  
  const maxWidth = 500; // Maximum width of the input
  // Calculate the initial width based on the length of the text
  let finalWidth = Math.min(editTitle.length * 7.6, maxWidth);

  const showTitleEditInput = () => {
    // Start editing
    setIsEditing(true)
    setEditTitle(conversation.title)
  }

  const handleTitleUpdate = () => {
    console.log("somethang")
    if (editTitle === "") {
      setEditTitle("Untitled")
      dispatch(updateConversation({id, editConversation: {...conversation, title: editTitle}}))
    } else {
      dispatch(updateConversation({id, editConversation: {...conversation, title: editTitle}}))
    }
  }

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
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      onFocus={(e) => { if (!editTitle) finalWidth = Math.min(finalWidth, maxWidth) }} // Adjust width when input is focused
                      style={{ width: `${finalWidth}px`}} 
                      ref={inputRef}
                      className="input focus:outline-none border-primary-content text-base-content min-w-50 h-8"
                    />
                  </div>
                  }
                  <span>
                    {!isEditing ?
                      <div className="tooltip tooltip-bottom" data-tip="Edit title">
                        <button onClick={() => showTitleEditInput()} className="btn btn-circle btn-secondary size-8">
                        <GrEdit size={15} />
                        </button>
                      </div>
                    :
                    <div className="tooltip tooltip-bottom" data-tip="Save">
                        <button onClick={() => handleTitleUpdate()} className="btn btn-circle btn-secondary size-8">
                        <GiCheckMark size={15} />
                        </button>
                      </div>
                    }
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