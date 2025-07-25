
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
const Navbar = () => {
  
  const {user, setShowLogin, logout,credit } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between text-white py-2'>
      <Link to='/'>
        <img src={assets.logo} alt="" className='w-18 sm:w-22 lg:w-30'/>
      </Link>

      <div>
        {user?
          <div className='flex text-center gap-2 sm:gap-3'>
            <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'
            onClick={()=>navigate('/buy')}
            >
              <img src={assets.credit_star} alt="" />
              <p className='text-xs sm:text-sm text-gray-600 font-medium'>Creadits left: {credit}</p>
            </button>
            <p className='text-gray-200 max-sm:hidden pl-4 pt-2 text-center'>Hi, {user.name}</p>
            <div className='relative group cursor-pointer'>
              <img src={assets.profile_icon} className='w-10 drop-shadow ' alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12 '>
                <ul className='list-none m-0 p-2  
                bg-blue-200 text-black rounded-md border text-sm'>
                  <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>:
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <button className='bg-indigo-600 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer' onClick={()=>setShowLogin(true)}>Login</button>
          </div>
        }
        
        
      </div>
    </div>
  )
}

export default Navbar
