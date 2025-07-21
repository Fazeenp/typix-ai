import React from 'react'
import { Sparkles, PencilLine, Image as ImageIcon, DownloadCloud } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: <PencilLine className="w-6 h-6 text-blue-400" />,
    title: '1. Describe your idea',
    desc: 'Type what you’re imagining — a simple sentence or detailed prompt.',
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-purple-400" />,
    title: '2. Generate images',
    desc: 'Our AI instantly turns your text into beautiful, high-quality visuals.',
  },
  {
    icon: <DownloadCloud className="w-6 h-6 text-green-400" />,
    title: '3. Download or refine',
    desc: 'Save your image or tweak your prompt to regenerate until it’s perfect.',
  },
]

const HowItWorks = () => {
  return (
    <section className="relative z-10 w-full max-w-screen-xl mx-auto px-4 py-24 text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-neutral-300">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          How It Works
        </div>
        <h2 className="mt-6 text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text leading-snug sm:leading-tight">
          Create stunning visuals in 3 easy steps
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white/10">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-neutral-400">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
