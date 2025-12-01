import { useSelector } from 'react-redux'
import ModelInstructionsModal from '../modals/ModelInstructionsModal'

const ConvoTitleBanner = () => {
  const { conversation } = useSelector((state) => state.conversation)

  return (
    <>
      <nav class="bg-secondary border-y border-neutral-content/70 fixed top-16 z-50 w-full">
        <div class="px-4 py-2 mx-auto">
            <div class="flex items-center gap-x-3 text-secondary-content">
                <span className="">{conversation.title}</span>
                <span className="">•</span>
                {/* <button className="btn btn-secondary mix-blend-hard-light h-8">Show Model Instructions</button> */}
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