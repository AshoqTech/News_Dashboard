import React from 'react'

import { 
    LuNewspaper,
    LuSearch,
    LuMoon,
    LuSun
    } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const Navbar = ({toggleDarkMode, darkMode}) => {
  return (
    <div className='flex w-full justify-between items-center h-16 bg-gray-800 dark:bg-gray-900 shadow-sm text-white px-2 transition-colors duration-200 sticky top-0'>
      <div>
        <NavLink to='/' className='flex justify-center items-center gap-1'>
         <LuNewspaper className='md:mr-1 text-lg md:text-2xl text-blue-500'/>
         <h2 className='text-lg md:text-xl'>News<span className='text-blue-500'>Hub</span></h2>
        </NavLink>
      </div>
      <div className='flex justify-center relative items-center w-[50%]'>
        <input type="text" placeholder='Search news...' className='border border-gray-800 bg-gray-800 px-2 py-1 rounded-md focus:outline-0 w-full'/>
        <LuSearch className='absolute right-3'/>
      </div>
      <div className='items-center justify-center md:gap-3 gap-2 hidden sm:flex'>
        <button onClick={toggleDarkMode}>
            { darkMode ? <LuSun className='text-lg md:text-2xl mr-1'/> : <LuMoon className='text-lg md:text-2xl mr-1'/>}
        </button>
        <button className='bg-blue-500 px-5 py-1 rounded-md'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
