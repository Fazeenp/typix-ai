
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import { motion } from 'framer-motion'
const GenerateBtn = () => {
    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = () => {
        user ? navigate('/result') : setShowLogin(true);
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='pb-16 text-center'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-100 py-6 md:py-16'>
                See the magic. Try now!
            </h1>
            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onClick={onClickHandler}
                className=" inline-flex items-center gap-3 px-12 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-base sm:text-lg shadow-md hover:opacity-90 transition-all duration-300 cursor-pointer">
                Generate Images
                <img src={assets.star_group} alt="star" className="w-5 h-5" />
            </motion.button>
        </motion.div>

    )
}

export default GenerateBtn
