import { Link } from "react-router"

const SideNav = () => {

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div id="hs-pro-sidebar" class="hs-overlay [--auto-close:md] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-65 hs-overlay-minified:w-13 overflow-hidden hidden fixed inset-y-0 z-60 start-0 bg-base-200 border-e border-neutral md:block md:translate-x-0 md:end-auto md:bottom-0" role="dialog" tabindex="-1" aria-label="Sidebar">
        <div class="relative flex flex-col h-full max-h-full">
          {/* <!-- Header --> */}
          <header class="py-2.5 px-4 flex justify-between items-center gap-x-2">
            <div class="-ms-2 flex items-center gap-x-1">
              <div class="md:hs-overlay-minified:hidden">
                <a class="shrink-0 inline-flex justify-center items-center size-9 rounded-lg text-xl inline-block font-semibold hover:bg-base-100 focus:outline-hidden focus:bg-base-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="@@href" aria-label="Preline">
                  <h1 className="font-chango text-2xl text-primary font-light">B</h1>
                  {/* <svg class="shrink-0 size-5 text-cyan-700 dark:text-cyan-400" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0835 3.23358C9.88316 3.23358 3.23548 9.8771 3.23548 18.0723V35.5832H0.583496V18.0723C0.583496 8.41337 8.41851 0.583252 18.0835 0.583252C27.7485 0.583252 35.5835 8.41337 35.5835 18.0723C35.5835 27.7312 27.7485 35.5614 18.0835 35.5614H16.7357V32.911H18.0835C26.2838 32.911 32.9315 26.2675 32.9315 18.0723C32.9315 9.8771 26.2838 3.23358 18.0835 3.23358Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0833 8.62162C12.8852 8.62162 8.62666 12.9245 8.62666 18.2879V35.5833H5.97468V18.2879C5.97468 11.5105 11.3713 5.97129 18.0833 5.97129C24.7954 5.97129 30.192 11.5105 30.192 18.2879C30.192 25.0653 24.7954 30.6045 18.0833 30.6045H16.7355V27.9542H18.0833C23.2815 27.9542 27.54 23.6513 27.54 18.2879C27.54 12.9245 23.2815 8.62162 18.0833 8.62162Z" fill="currentColor"/>
                    <path d="M24.8225 18.1012C24.8225 21.8208 21.8053 24.8361 18.0833 24.8361C14.3614 24.8361 11.3442 21.8208 11.3442 18.1012C11.3442 14.3815 14.3614 11.3662 18.0833 11.3662C21.8053 11.3662 24.8225 14.3815 24.8225 18.1012Z" fill="currentColor"/>
                  </svg> */}
                </a>
              </div>

              {/* <!-- Sidebar Toggle --> */}
              <button type="button" class="hidden md:hs-overlay-minified:flex justify-center items-center flex-none gap-x-3 size-9 text-sm text-gray-500 rounded-lg hover:bg-base-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-base-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="dialog" aria-expanded="true" aria-controls="hs-pro-sidebar" aria-label="Minify navigation" data-hs-overlay-minifier="#hs-pro-sidebar">
                <svg class="hidden hs-overlay-minified:block shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 3v18"></path><path d="m8 9 3 3-3 3"></path></svg>
                <svg class="hs-overlay-minified:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 3v18"></path><path d="m10 15-3-3 3-3"></path></svg>
                <span class="sr-only">Sidebar Toggle</span>
              </button>
              {/* <!-- End Sidebar Toggle --> */}

              <div class="hidden sm:block md:hs-overlay-minified:hidden">

              </div>
            </div>

            {/* <!-- Sidebar Toggle --> */}
            <button type="button" class="hidden md:hs-overlay-minified:hidden md:flex justify-center items-center flex-none gap-x-3 size-9 text-sm text-gray-500 rounded-lg hover:bg-base-100 disabled:opacity-50 cursor-pointer focus:outline-hidden focus:bg-base-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="dialog" aria-expanded="true" aria-controls="hs-pro-sidebar" aria-label="Minify navigation" data-hs-overlay-minifier="#hs-pro-sidebar">
              <svg class="hidden hs-overlay-minified:block shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 3v18"></path><path d="m8 9 3 3-3 3"></path></svg>
              <svg class="hs-overlay-minified:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 3v18"></path><path d="m10 15-3-3 3-3"></path></svg>
              <span class="sr-only">Sidebar Toggle</span>
            </button>
            {/* <!-- End Sidebar Toggle --> */}

            {/* <!-- Sidebar Toggle --> */}
            <button type="button" class="flex md:hidden justify-center items-center gap-x-3 size-6 bg-base-200 border border-gray-200 text-sm text-gray-600 hover:bg-base-100 rounded-full disabled:opacity-50 cursor-pointer focus:outline-hidden focus:bg-base-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-sidebar" aria-expanded="true">
              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              <span class="sr-only">Close</span>
            </button>
            {/* <!-- End Sidebar Toggle --> */}
          </header>
          {/* <!-- End Header --> */}

          <div class="mb-5 px-2 flex flex-col gap-y-5">
            {/* <!-- List --> */}
            <ul class="flex flex-col gap-y-0.5">
              <li>
                <a class="group relative w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm hover:text-secondary-content hover:bg-secondary rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full focus:outline-hidden focus:bg-gray-100/70" href="index.html">
                  <span class="-ms-[5px] flex shrink-0 justify-center items-center size-6">
                    <svg class="shrink-0 size-4 group-hover:scale-115 group-focus:scale-115 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  </span>
                  <span class="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">New chat</span>
                </a>
              </li>
              <li>
                <button type="button" class="group w-full flex items-center gap-1 py-1.5 px-2.5 text-sm truncate rounded-lg focus:outline-hidden hover:text-secondary-content hover:bg-secondary cursor-pointer" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-pro-dnsm" data-hs-overlay="#hs-pro-dnsm">
                  <span class="-ms-[5px] flex shrink-0 justify-center items-center size-6">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="group-hover:scale-100 group-focus:scale-100 scale-115 scale-115 transition-transform duration-300" d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                  </span>
                  <span class="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">Search chats</span>
                </button>
              </li>
              <li>
                <a class="group relative w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full focus:outline-hidden hover:text-secondary-content hover:bg-secondary cursor-pointer" href="explore.html">
                  <span class="-ms-[5px] flex shrink-0 justify-center items-center size-6">
                    <svg class="shrink-0 size-4 group-hover:rotate-180 group-focus:rotate-180 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </span>
                  <span class="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">Explore</span>
                </a>
              </li>
              <li>
                <a class="group relative w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full focus:outline-hidden hover:text-secondary-content hover:bg-secondary cursor-pointer" href="chat-details.html">
                  <span class="-ms-[5px] flex shrink-0 justify-center items-center size-6">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path class="group-hover:scale-95 group-focus:scale-95 transition-transform duration-300" d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                  </span>
                  <span class="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">Chat details</span>
                </a>
              </li>
            </ul>
            {/* <!-- End List --> */}
          </div>

          {/* <!-- Body --> */}
          <div class="hs-overlay-minified:opacity-0 transition-opacity duration-300 pb-4 px-2 size-full flex flex-col gap-y-5 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div class="flex flex-col">
              <span class="block ps-2.5 mb-2 text-sm text-accent font-arsenal uppercase">
                Recent chats
              </span>

              {/* <!-- List of Conversations --> */}
              <ul class="flex flex-col gap-y-0.5">
                <li>
                  <div class="relative group">
                    <a class="w-full flex items-center gap-x-2 py-2 ps-2.5 pe-8 text-sm truncate rounded-lg focus:outline-hidden hover:text-secondary-content group-hover:text-secondary-content hover:bg-secondary cursor-pointer group-hover:bg-secondary" href="chat-details.html">
                      <span class="truncate">Kit's Main Chat</span>
                    </a>

                    <div class="absolute top-1/2 end-0 z-1 -translate-y-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                      {/* <!-- More Dropdown --> */}
                      <div class="hs-dropdown [--scope:window] relative inline-flex">
                        <button id="hs-pro-chthmdid1" type="button" class="flex justify-center items-center gap-x-3 size-8 text-sm text-secondary-content rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden cursor-pointer">
                          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                        </button>

                        {/* <!-- More Dropdown --> */}
                        <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-60 bg-white border border-gray-200 rounded-xl shadow-lg before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-950 dark:border-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-chthmdid1">
                          <div class="p-1 space-y-0.5">
                            <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                              Share
                            </button>
                            <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                              Rename
                            </button>
                            <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>
                              Archive
                            </button>
                            <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-red-600 hover:bg-red-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-red-50 dark:text-red-500 dark:hover:bg-red-500/20 dark:focus:bg-red-500/20">
                              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                              Delete
                            </button>
                          </div>
                        </div>
                        {/* <!-- End More Dropdown --> */}
                      </div>
                      {/* <!-- End More Dropdown --> */}
                    </div>
                  </div>
                </li>
              </ul>
              {/* <!-- End List --> */}
            </div>
          </div>
          {/* <!-- End Body --> */}
        </div>
      </div>
      {/* <!-- End Sidebar --> */}

      {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class={`${darkMode ? "bg-gray-900 text-white scroll-bar" : "bg-white text-gray-900"} fixed items-center z-40 w-28 transition-transform -translate-x-full sm:translate-x-0 my-auto py-[38.5vh] mx-auto`}
        aria-label="Sidebar">
        <div class={`h-full px-3 rounded-xl drop-shadow-lg py-4 overflow-y-auto my-auto ${darkMode ? "bg-gray-800" : "bg-gray-50"} `}>
          <ul class="space-y-2 font-medium">
           
            <li>
              <Link
                to="/"
                class={`flex items-center p-2 text-gray-900 rounded-lg ${darkMode ? "text-white hover:bg-gray-700" : "hover:bg-gray-100"} group justify-self-center transition duration-300 ease-in-out hover:scale-120`}>
                <svg class={`shrink-0 w-10 h-10 ${darkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-gray-900"} transition duration-75`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                
               
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                class={`flex items-center p-2 text-gray-900 rounded-lg ${darkMode ? "text-white hover:bg-gray-700" : "hover:bg-gray-100"} group justify-self-center transition duration-300 ease-in-out hover:scale-120`}>
                <svg class={`shrink-0 w-10 h-10 ${darkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-gray-900"} transition duration-75`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"/></svg>
              
              </Link>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                class={`flex items-center p-2 text-gray-900 rounded-lg ${darkMode ? "text-white hover:bg-gray-700" : "hover:bg-gray-100"} group justify-self-center cursor-pointer transition duration-300 ease-in-out hover:scale-120`}>
                  {darkMode ? (
                    <svg class={`shrink-0 w-10 h-10 ${darkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-gray-900"} transition duration-75`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                  ) : (
                    <svg class={`shrink-0 w-10 h-10 ${darkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-gray-900"} transition duration-75`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
                  )}
                
              </button>
            </li>
           
          </ul>
        </div>
      </aside> */}
    </>
  )
}

export default SideNav
