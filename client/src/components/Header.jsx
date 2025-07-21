import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {user,setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler=()=>{
    user?navigate('/result'):setShowLogin(true);
  }

  return (
    <header className="w-full max-w-screen-xl mx-auto px-4 flex flex-col items-center text-center py-24 text-white">

      {/* Tagline Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="flex items-center gap-2 px-5 py-1 border border-neutral-700 rounded-full bg-white/10 text-sm text-neutral-300"
      >
        <img src={assets.star_icon} alt="star" className="w-4 h-4" />
        <span>Next-gen AI Visuals</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold max-w-4xl mt-8 leading-tight"
      >
        Transform words into{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          beautiful images
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg sm:text-xl text-neutral-400 mt-6 max-w-2xl"
      >
        Simply describe what you imagine — and our AI instantly creates stunning visuals tailored to your prompt.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 px-6 py-3 text-black bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90 transition rounded-full shadow-lg flex items-center gap-3 text-lg cursor-pointer"
        onClick={onClickHandler}
      >
        Generate Images
        <img src={assets.star_group} alt="generate" className="h-5" />
      </motion.button>

      {/* Sample Images Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-16"
      >
        {Array(6).fill('').map((_, index) => (
          <motion.img
            key={index}
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
            alt={`sample-${index}`}
            className="rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-20 sm:w-24"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-sm text-neutral-500"
      >
        Generated with Typix AI
      </motion.p>
    </header>
  )
}

export default Header
