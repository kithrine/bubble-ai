import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import UserInterface from './UserInterface'
import UserHistory from './UserHistory'
import './App.css'
import SideNav from './components/SideNav'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };


  return (
    <>
    <SideNav toggleTheme={toggleTheme} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<UserInterface darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/history" element={<UserHistory darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </>
  )
}

export default App

