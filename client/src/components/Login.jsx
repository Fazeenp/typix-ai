import React, { useContext, useState } from 'react'
import { X, Mail, Lock, User } from 'lucide-react'
import { AppContext } from '../context/AppContext'
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios'
import { toast } from 'react-toastify';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const modal = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, y: 40, transition: { duration: 0.2 } }
}

const Login = () => {
  const [isSignup, setIsSignup] = useState(false)
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })


  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      if (isSignup) {
         const {data} = await axios.post(backendUrl+'/api/user/register',{name,email,password})
        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token',data.token)
          setShowLogin(false)
        }else{
          toast.error(data.message)
        }
      } else {
        const {data} = await axios.post(backendUrl+'/api/user/login',{email,password})
        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token',data.token)
          setShowLogin(false)
        }else{
          toast.error(data.message)
        }
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="relative bg-[#1A1A1A] border border-white/10 rounded-xl p-8 w-full max-w-md shadow-xl text-white"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close Button */}
          <button
            onClick={() => setShowLogin(false)}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition"
          >
            <X size={20} />
          </button>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {isSignup ? 'Sign Up' : 'Log In'}
          </h2>
          <p className="text-sm text-neutral-400 text-center mb-6">
            {isSignup
              ? 'Start your journey with Typix'
              : 'Welcome back! Log in to continue'}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={e=>setName(e.target.value)}
                  className="w-full py-2.5 pl-10 pr-4 bg-white/5 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                 value={email}
                  onChange={e=>setEmail(e.target.value)}
                className="w-full py-2.5 pl-10 pr-4 bg-white/5 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={e=>setPassword(e.target.value)}
                className="w-full py-2.5 pl-10 pr-4 bg-white/5 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-2.5 rounded-md font-semibold hover:opacity-90 transition"
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
          </form>

          {/* Switch Auth Type */}
          <p className="text-sm text-center text-neutral-400 mt-6">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-400 hover:underline font-medium"
            >
              {isSignup ? 'Log in' : 'Sign up'}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Login
