import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GPTIcon from '../../icons/GPTIcon'

const ChatTextarea = () => {
  const chatStatus = useSelector((state) => state.conversation.status)
  const [chatForm, setChatForm] = useState({
    prompt: "",
    model: "gemma2",
    date: new Date(),
    favorited: false,
    archived: false
  })

  const dispatch = useDispatch()

  const handleAIQuestion = async (e) => {
    //! OLD
    e.preventDefault()
    console.log("chatForm", chatForm)
    dispatch(createChat({ id, chatForm }))
    setChatForm({ ...chatForm, prompt: ""})
    console.log("conversation", conversation)
    // setFinalResponse(conversation.chat.answer)

    //! NEW
    // const response = await chatService.addChat(chatForm)
  
    // const stream = response.data;

    // for await (const chunk of stream) {
    //   console.log(chunk);
    //   setFinalResponse(fr => `${fr}${chunk}`)
    // }

    //! AI SLOP??
    // e.preventDefault(); // Prevent form submission if needed
    // const response = await chatService.addChat(chatForm);
    // console.log("response", response)
    // const reader = response.data.getReader();
    // const decoder = new TextDecoder('utf-8');
    // let buffer = '';

    // while (true) {
    //   const { value, done } = await reader.read();
    //   if (done) break;
    //   buffer += decoder.decode(value, { stream: true });
    //   setFinalResponse((prev) => prev + decoder.decode(value)); // Update state in real-time
    // }
  }

  return (
    <>
      <div class="max-w-full mx-auto sticky bottom-0 z-10 bg-base-100 border-t border-gray-200 pt-2 sm:pt-4 px-2 sm:px-3 lg:px-4 pb-4 dark:bg-neutral-900 dark:border-neutral-700">
        {/* <!-- Textarea --> */}
        <form onSubmit={handleAIQuestion}>
          <div class="bg-base-100 border border-base-300 rounded-2xl shadow-xs shadow-base-300">
            <label for="prompt" class="sr-only">Ask anything...</label>

            <div class="pb-2 px-2">
              <textarea 
                value={chatForm.prompt}
                onChange={(e) =>
                  setChatForm({ ...chatForm, prompt: e.target.value })
                } 
                id="prompt" 
                // max-h-36 was old class and the textarea grew as user typed long prompt. I liked it. But it kept growing to the bottom, not the top like I would prefer
                class="max-h-36 mt-2 pt-4 pb-2 ps-2 pe-4 block w-full bg-transparent border-transparent resize-none placeholder-base-content/50 focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:text-neutral-200 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" 
                placeholder="Ask anything..." 
                data-hs-textarea-auto-height
              />

              <div class="pt-2 flex justify-between items-center gap-x-1">
                {/* <!-- Button Group --> */}
                <div class="flex items-center gap-x-1">
                  {/* <!-- Add Media Dropdown --> */}
                  <div class="hs-dropdown [--scope:window] relative inline-flex">
                    <button id="hs-pro-aimtaf" type="button" class="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                      <svg class="shrink-0 size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                      <span class="sr-only">Add Media</span>
                    </button>

                    {/* <!-- Add Media Dropdown --> */}
                    <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-50 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white border border-gray-200 rounded-xl shadow-lg before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-950 dark:border-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-aimtaf">
                      <div class="p-1 space-y-0.5">
                        <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
                          Upload a file
                        </button>
                        <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                          Add a screenshot
                        </button>
                      </div>
                    </div>
                    {/* <!-- End Add Media Dropdown --> */}
                  </div>
                  {/* <!-- End Add Media Dropdown --> */}

                  {/* <!-- Tools Dropdown --> */}
                  <div class="hs-dropdown [--scope:window] relative inline-flex">
                    <button id="hs-pro-aimttl" type="button" class="flex justify-center items-center gap-x-1 py-1.5 px-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                      <svg class="shrink-0 size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
                      Tools
                    </button>

                    {/* <!-- Tools Dropdown --> */}
                    <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-50 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white border border-gray-200 rounded-xl shadow-lg before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-950 dark:border-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-aimttl">
                      <div class="p-1 space-y-0.5">
                        <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>
                          Create an image
                        </button>
                        <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                          Search the web
                        </button>
                        <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                          Write or code
                        </button>
                        <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/><path d="m13.56 11.747 4.332-.924"/><path d="m16 21-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"/><path d="m6.158 8.633 1.114 4.456"/><path d="m8 21 3.105-6.21"/><circle cx="12" cy="13" r="2"/></svg>
                          Run deep research
                        </button>
                        <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                          Think for longer
                        </button>
                      </div>
                    </div>
                    {/* <!-- End Tools Dropdown --> */}
                  </div>
                  {/* <!-- End Tools Dropdown --> */}
                </div>
                {/* <!-- End Button Group --> */}

                {/* <!-- Button Group --> */}
                <div class="flex items-center gap-x-1">
                  {/* <!-- Select --> */}
                  <div class="relative inline-block md:-ms-2.5">
                    <select 
                      value={chatForm.model}
                      onChange={(e) =>
                        setChatForm({ ...chatForm, model: e.target.value })
                      }
                      defaultValue="Select Model" 
                      className="select select-secondary min-w-50"
                    >
                      <option disabled={true}>Select Model</option>
                      <option value="deepseek-r1" className="flex items-center gap-1">
                        {/* <span className="flex items-center gap-1"> */}
                          <img src={new URL("./icons/DeepseekPng.png", import.meta.url).href} className="size-6" alt="..." />
                          DeepSeek R1
                        {/* </span> */}
                      </option>
                      <option value="deepseek-coder-v2">
                        <span className="flex items-center gap-1">
                          <img src={new URL("./icons/DeepseekPng.png", import.meta.url).href} className="size-6" alt="..." />
                          <span>deepseek-coder-v2</span>
                        </span>
                      </option>
                      <option value="gemma2">
                        <span className="flex items-center gap-1">
                          <img src={new URL("./icons/Gemma.png", import.meta.url).href} className="size-6" alt="..." />
                          <span>Gemma 2</span>
                        </span>
                      </option>
                      <option value="gpt-oss">
                        <span className="flex items-center gap-1">
                          <GPTIcon size={6} />
                          <span>GPT-OSS</span>
                        </span>
                      </option>
                      <option value="mistral">
                        <span className="flex items-center gap-1">
                          <img src={new URL("./icons/Mistral.png", import.meta.url).href} className="size-6" alt="..." />
                          <span>Mistral</span>
                        </span>
                      </option>
                    </select>
                  </div>
                  {/* <!-- End Select --> */}

                  {/* <!-- Button --> */}
                  <button type="button" class="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                    <span class="sr-only">Send voice message</span>
                  </button>
                  {/* <!-- End Button --> */}

                  {/* <!-- Send Button --> */}
                  {chatStatus !== "loading" ? (
                  <button type="submit" class="btn btn-square btn-primary" disabled={!chatForm.prompt.trim()}>
                    <span class="sr-only">Send</span>
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                  </button>
                  )
                  :
                  (
                    <button className="btn btn-square btn-primary" disabled={true}>
                      <span className="loading loading-spinner"></span>
                    </button>
                  )
                  }
                  {/* <!-- End Send Button --> */}
                </div>
                {/* <!-- End Button Group --> */}
              </div>
            </div>
          </div>
        </form>
        {/* <!-- End Textarea --> */}
      </div>

    </>
  )
}

export default ChatTextarea