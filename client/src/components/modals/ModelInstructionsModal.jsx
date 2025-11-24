import { useSelector } from "react-redux"

const ModelInstructionsModal = () => {
  const { conversation } = useSelector((state) => state.conversation)

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="model-instructions-modal" className="modal">
        <div className="modal-box p-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg bg-secondary px-6 pt-6 pb-2">Model Instructions</h3>
          <p className="py-4 pb-6 px-6 max-h-100 overflow-y-auto text-base-content">{conversation.modelInstructions}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default ModelInstructionsModal