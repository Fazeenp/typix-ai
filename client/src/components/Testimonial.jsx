import React from 'react'
import { Quote } from 'lucide-react'
import { testimonials } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonial = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-24 text-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-neutral-300">
          <Quote className="w-4 h-4 text-yellow-300" />
          What creators are saying
        </div>
        <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Trusted by creators around the world
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Quote Text */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
              “{t.quote}”
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative w-12 h-12 shrink-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="rounded-full w-full h-full object-cover border-2 border-blue-500 shadow"
                />
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-neutral-400">{t.title}</p>
              </div>
            </div>

            {/* Decorative Quote Icon */}
            <Quote className="absolute top-4 right-4 w-5 h-5 text-white/10 group-hover:text-white/20 transition" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
