import React, { useContext } from 'react'
import './index.css'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer' // <- Make sure it's imported
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#222222] text-white overflow-hidden">
      
      <div className="absolute top-[-100px] left-1/3 w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-[-100px] right-1/4 w-[250px] h-[250px] bg-blue-500 opacity-10 blur-2xl rounded-full z-0"></div>

      <div className="relative z-10 px-4 sm:px-10 md:px-14 lg:px-28">
        <Navbar />
      </div>
      {showLogin && <Login/>}
      {/* Routes content */}
      <div className="relative z-10 px-4 sm:px-10 md:px-14 lg:px-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
          <Route path="*" element={<h1 className="text-center mt-20 text-neutral-400 text-2xl">404 – Page not found</h1>} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
