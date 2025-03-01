import React, { useState } from 'react'
import {BsSunFill} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {HiOutlineMenu} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import useDarkMode from '../../useDarkMode'

const Navbar = (props) => {
  const {isMobile} = props;

  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toogleDarkMode] = useDarkMode();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className='flex items-center'>
      <div className='flex items-center'>
        <div className='text-[20px] font-bold mr-3'>NerdCard</div>
        {isDarkMode ? (
          <BsSunFill size={"24px"} color="e9c463" className='cursor-pointer'onClick={()=>toogleDarkMode(!isDarkMode)}/>

        ): (
          <FaMoon size={"24px"} color="e9c463" className='cursor-pointer'onClick={()=>toogleDarkMode(!isDarkMode)}/>
        )}
      </div>

      <ul className='md:flex md:gap-10 ml-auto text-[20px] font-semibold'>
        {openMenu && isMobile ? (
          <MdOutlineClose size={"24px"} className='cursor-pointer' onClick={handleMenu}/>
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu size={"24px"} className='cursor-pointer' onClick={handleMenu}/>
        ) : (
          <>
            <li className='btn-hover'>Features</li>
            <li className='btn-hover'>Menu</li>
            <li className='btn-hover'>Our Story</li>
            <li className='btn-hover ml-28'>Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 bg-white p-8 text-center text-black text-[13px]">
            <li className='hover:text-purple-500 transition-all duration-200 cursor-pointer'>Features</li>
            <li className='cursor-pointer'>Menu</li>
            <li className='cursor-pointer'>Our Story</li>
            <li className='cursor-pointer'>Contact</li>
          </div>
        )}
      </ul>

    </nav>
  )
}

export default Navbar
