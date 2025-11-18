import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import InterfaceLayout from './layouts/InterfaceLayout'
import UserHistory from './UserHistory'
import './App.css'
import SideNav from './components/navigation/SideNav'
import NavbarHeader from './components/navigation/NavbarHeader'
import HomeScreen from './pages/HomeScreen'
import CreateConversationForm from './pages/CreateConversationForm'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [ theme, setTheme ] = useState(localStorage.getItem("theme") || "dark")

  const handleTheme = (t) => {
    document.body.setAttribute("data-theme", t)
    setTheme(t)
    localStorage.setItem("theme", t)
  }

  useEffect(() => {
    // Set theme on refresh
    if (localStorage.getItem("theme")) {
      handleTheme(localStorage.getItem("theme"))
    }
  }, [])

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  //   localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  // };


  return (
    <>
      <main class="md:ps-65 md:hs-overlay-minified:ps-13 transition-all duration-300 min-h-full bg-base-100 font-rubik">

        <NavbarHeader handleTheme={handleTheme} theme={theme} />
        <SideNav />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create-conversation" element={<CreateConversationForm />} />
          <Route path="/chat" element={<InterfaceLayout handleTheme={handleTheme} theme={theme} />} />
          <Route path="/history" element={<UserHistory  />} />
        </Routes>
      </main>
    </>
  )
}

export default App

