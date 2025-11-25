import { useState } from "react";
import { useSelector } from "react-redux"
import { PiWarningFill } from "react-icons/pi";

const ModelInstructionsModal = () => {
  const { conversation } = useSelector((state) => state.conversation)

  // const modelInstructionsEdit = useState()

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="model-instructions-modal" className="modal">
        <div className="modal-box p-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg bg-secondary px-6 pt-6 pb-2">Model Instructions</h3>
          {/* {conversation.modelInstructions === "" ? 
          <div className="py-4 pb-6 px-6">
            <div role="alert" className="alert alert-warning">
                <PiWarningFill size={25} />
              <span>You currently do not have any model instructions. Click the button below to edit model instructions for this conversation.</span>
            </div>
          </div>
          :
          <p className="py-4 pb-6 px-6 max-h-100 overflow-y-auto text-base-content">{conversation.modelInstructions}</p>
          } */}
          <div className="py-4 pb-6 px-6">
            <textarea className="textarea w-full text-base-content" rows="8" placeholder="Specify model instructions..." />
            <div className="flex justify-end pt-2 gap-x-3">
            <button className="btn btn-success">Save</button>
            <button className="btn btn-outline border-base-content text-base-content hover:border-base-300">Clear</button>
            <button className="btn btn-outline btn-warning">Cancel</button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default ModelInstructionsModal