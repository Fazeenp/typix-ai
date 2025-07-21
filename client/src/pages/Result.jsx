import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Loader2 } from 'lucide-react'
import {motion} from 'framer-motion'
const Result = () => {
  const [prompt, setPrompt] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const generateImage = async () => {
    if (!prompt.trim()) return

    setLoading(true)
    setIsImageLoaded(false)
    setImage(null)

    // Simulate async generation
    setTimeout(() => {
      const generated = Math.random() > 0.5 ? assets.sample_img_1 : assets.sample_img_2
      setImage(generated)
      setLoading(false)
    }, 2000)
  }

  const handleDownload = () => {
    if (!image) return
    const link = document.createElement('a')
    link.href = image
    link.download = 'typix-image.png'
    link.click()
  }

  return (
    <motion.section
      className="w-full max-w-screen-xl mx-auto px-4 py-24 text-white relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Describe. Generate. Create.
        </h1>
        <p className="mt-4 text-neutral-400 text-base sm:text-lg max-w-xl mx-auto">
          Type in your idea and let Typix turn it into a stunning visual in seconds.
        </p>
      </div>

      {/* Form */}
       <motion.form
        onSubmit={(e) => {
          e.preventDefault()
          generateImage()
        }}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="A futuristic cyberpunk city at night"
          className="w-full flex-1 px-5 py-3 rounded-full bg-neutral-900 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition text-white font-medium whitespace-nowrap flex items-center gap-2"
        >
          {loading && <Loader2 className="animate-spin w-4 h-4" />}
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </motion.form>

      {/* Image Preview */}
      <div className="mt-16 flex justify-center">
        {loading && (
          <div className="flex justify-center items-center h-60">
            <Loader2 className="animate-spin w-10 h-10 text-blue-400" />
          </div>
        )}

        {!loading && image && (
          <div className="flex flex-col items-center gap-4">
            {!isImageLoaded && (
              <div className="h-[300px] w-[300px] flex items-center justify-center">
                <Loader2 className="animate-spin w-8 h-8 text-purple-300" />
              </div>
            )}

            <img
              src={image}
              alt="Generated Visual"
              className={`rounded-xl shadow-lg max-w-sm transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsImageLoaded(true)}
            />

            <div className="flex gap-4">
              <button
                onClick={generateImage}
                disabled={loading}
                className="px-5 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition text-sm"
              >
                Generate Another
              </button>
              <button
                onClick={handleDownload}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition text-sm"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  )
}

export default Result
