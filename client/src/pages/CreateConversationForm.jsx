import { useState } from "react"
import { useDispatch } from "react-redux"
import { addConversation, getConversationInfo } from "../redux/conversationSlice"

const CreateConversationForm = () => {
  const [ conversationCreateForm, setConversationCreateForm ] = useState({
    title: "",
    modelInstructions: "",
    dateCreated: new Date(),
    favorited: false,
    archived: false,
  })

  const dispatch = useDispatch()

  const handleConversationCreate = (e) => {
    e.preventDefault()
    if (conversationCreateForm.title === "") {
      setConversationCreateForm.title("Untitled")
    }
    // Validation? 
    dispatch(addConversation(conversationCreateForm))
    dispatch(getConversationInfo());
  }
  return (
    <>
      <div className="pt-16 min-h-screen">
        {/* <!-- Hire Us --> */}
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="max-w-xl mx-auto">
            <div class="text-center">
              <h1 class="text-3xl font-bold sm:text-4xl">
                New Conversation
              </h1>
              <p class="mt-1 opacity-80">
                Please do something? Idk.
              </p>
            </div>

            <div class="mt-12">
              {/* <!-- Form --> */}
              <form onSubmit={handleConversationCreate}>
                <div class="grid gap-4 lg:gap-6">
                  <div>
                    <label for="convo-title" class="block mb-2 text-sm font-medium">Title</label>
                    <input value={conversationCreateForm.title} onChange={(e) => setConversationCreateForm({ ...conversationCreateForm, title: e.target.value })} type="text" name="convo-title" autocomplete="title" class="input py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none" />
                  </div>

                  {/* <!-- 2 Smaller Inputs --> */}
                  {/* <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label for="hs-company-hire-us-2" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Company</label>
                      <input type="text" name="hs-company-hire-us-2" id="hs-company-hire-us-2" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                    </div>

                    <div>
                      <label for="hs-company-website-hire-us-2" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Company Website</label>
                      <input type="text" name="hs-company-website-hire-us-2" id="hs-company-website-hire-us-2" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                    </div>
                  </div> */}
                  {/* <!-- End 2 Smaller Inputs --> */}

                  <div>
                    <label for="model-instructions" class="block mb-2 text-sm font-medium">Model Instructions</label>
                    <textarea value={conversationCreateForm.modelInstructions} onChange={(e) => setConversationCreateForm({ ...conversationCreateForm, modelInstructions: e.target.value })} id="model-instructions" name="model-instructions" rows="12" class="textarea py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none" />
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div class="mt-6 grid">
                  <button type="submit" class="btn btn-primary w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">Create Conversation</button>
                </div>

                {/* <div class="mt-3 text-center">
                  <p class="text-sm text-gray-500 dark:text-neutral-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div> */}
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
        {/* <!-- End Hire Us --> */}
      </div>
    </>
  )
}

export default CreateConversationForm