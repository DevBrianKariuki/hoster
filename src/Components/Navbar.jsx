import React, {useState} from 'react'
import { logo } from '../assets'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { TbHelp } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { navLinks } from '../constants';
import { IoSearchOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { close, menu } from '../assets'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <div className='w-full flex flex-col py-6'>
      <div className='flex w-full justify-center sm:justify-between'>
        <div className='flex w-full justify-between pb-4 gap-8'>
          <div className='flex items-center gap-2'>
            <IoMdMail className='text-white ' />
            <p className='font-inter text-white text-sm cursor-pointer '>hosting@gmail.com</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaPhoneAlt className='text-white ' />
            <p className='font-inter text-white text-sm cursor-pointer '>(+254) 703 814228</p>
          </div>
        </div>
        <div className='flex hidden sm:flex gap-6'>
          <div className='flex items-center gap-2'>
            <BiSupport fontSize={20} className='text-white' />
            <p className='font-inter text-white text-sm cursor-pointer'>Support</p>
          </div>
          <div className='flex items-center gap-2'>
            <TbHelp fontSize={20} className='text-white ' />
            <p className='font-inter text-white text-sm cursor-pointer '>Help</p>
          </div>
        </div>
      </div>

      <div className='flex sm:hidden py-6 border-t-[1px] justify-between'>
          <div>
              <img src={logo} className='w-[100px]'/>
          </div>

          <div className='sm:hidden relative flex'>
                <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <div className={` ${ toggle ? 'flex' : 'hidden' } absolute navbarbg w-[200px]`}>

                <div className='flex flex-col'>
                  <ul className='list-none flex gap-4'>
                    {navLinks.map((nav, index) =>(
                      <li className='font-inter cursor-pointer hover:text-primary text-md font-normal text-white' key={index}>
                        {nav.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


          </div>

      </div>

      



      <div className='flex hidden sm:flex h-[55px] rounded-sm items-center justify-between my-3 p-6 navbarbg'>
        <div>
          <img src={logo} className='w-[120px]'/>
        </div>
        <div className='flex flex-row'>
          <ul className='list-none flex gap-4'>
            {navLinks.map((nav, index) =>(
              <li className='font-inter cursor-pointer hover:text-primary text-md font-normal text-white' key={index}>
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center gap-3'>
          <IoSearchOutline className='text-white cursor-pointer hover:text-lightblue' fontSize={20} />
          <TbWorld className='text-white cursor-pointer hover:text-lightblue' fontSize={20} />
          <button className='flex items-center text-white buttonbg py-2 px-4 rounded-full font-inter text-sm'>Login</button>
          <button className='flex items-center text-white buttonbg py-2 px-4 rounded-full font-inter text-sm'>Sign Up</button>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar