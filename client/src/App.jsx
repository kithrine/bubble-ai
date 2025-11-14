import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import UserInterface from './UserInterface'
import UserHistory from './UserHistory'
import './App.css'
import SideNav from './components/navigation/SideNav'
import NavbarHeader from './components/navigation/NavbarHeader'

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
      <div className="font-rubik">
        <SideNav />
        <Routes>
          <Route path="/" element={<UserInterface handleTheme={handleTheme} theme={theme} />} />
          <Route path="/history" element={<UserHistory  />} />
        </Routes>
      </div>
    </>
  )
}

export default App

