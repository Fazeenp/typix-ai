import React from 'react'
import { Wand2 } from 'lucide-react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-24 text-white flex flex-col-reverse lg:flex-row items-center gap-16">
      
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <div className="flex items-center gap-2 mb-3 bg-white/10 px-3 py-1 w-fit rounded-full border border-white/10 text-sm text-neutral-300">
          <Wand2 className="w-4 h-4 text-indigo-400" />
          <span>Why Typix AI?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Instantly create visuals from your ideas
        </h2>

        <p className="text-neutral-400 text-base sm:text-lg mb-6 max-w-xl">
          Typix uses cutting-edge AI models to bring your imagination to life — whether you're a designer, marketer, or dreamer. Just type what you envision, and let our system generate beautiful, high-res images in seconds.
        </p>

        <ul className="space-y-3 text-neutral-300 text-sm sm:text-base">
          <li className="flex items-start gap-2">
            <span className="text-blue-500">✔</span> Fast & intuitive interface
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">✔</span> High-quality, commercial-use images
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">✔</span> No design skills needed
          </li>
        </ul>
      </motion.div>

      {/* Image Preview */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        <img
          src={assets.sample_img_2}
          alt="AI preview"
          className="w-full max-w-md rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  )
}

export default Description
