import { Link } from "react-router"

const SideNav = ({darkMode, setDarkMode, toggleTheme}) => {

  return (
    <>
    
      <button
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
      </aside>

      {/* <aside className="fixed my-auto py-auto">
        <div className="w-24 bg-teal-500 h-[30vh]">

        </div>
      </aside> */}

    </>
  )
}

export default SideNav
