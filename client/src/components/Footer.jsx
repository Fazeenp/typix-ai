import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="w-full mt-24 border-t border-white/10 bg-white/5 backdrop-blur-sm text-neutral-300">
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        
        {/* Branding */}
        <div>
          <img src={assets.logo} alt="Typix Logo" className="w-28 mb-4" />
          <p className="text-neutral-400">
            Create stunning visuals using AI. Fast, intuitive, and crafted for modern creators.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/buy" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/result" className="hover:text-white">Gallery</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-6 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Typix AI. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
