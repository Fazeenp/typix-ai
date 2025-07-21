import React, { useContext } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const BuyCredit = () => {
  const { user } = useContext(AppContext)

  return (
    <motion.section
      className="w-full max-w-screen-xl mx-auto px-4 py-24 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Buy More Credits
        </h1>
        <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-base sm:text-lg">
          Select a plan to keep generating stunning visuals with Typix.
        </p>
      </motion.div>

      {/* Pricing Plans */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`relative rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 p-8 shadow-lg transition hover:scale-[1.02] ${
              plan.popular ? 'border-purple-500' : ''
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">
                Most Popular
              </span>
            )}

            <h2 className="text-3xl font-bold mb-4">{plan.credits} Credits</h2>
            <p className="text-neutral-400 mb-6">{plan.description}</p>
            <div className="text-2xl font-semibold mb-6">{plan.price}</div>

            <ul className="mb-8 space-y-2 text-sm text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-green-400 w-4 h-4" />
                High-resolution output
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-green-400 w-4 h-4" />
                Commercial license
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-green-400 w-4 h-4" />
                Priority rendering
              </li>
            </ul>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition text-white font-medium"
              onClick={() => alert(`Buying ${plan.credits} credits...`)}
            >
              {user ? 'Buy Now' : 'Get Started'}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default BuyCredit
