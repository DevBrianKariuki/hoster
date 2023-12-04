import React from 'react'
import { footerLinks } from '../constants'
import { logo } from '../assets'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-bgFooter w-full px-32 py-16 items-center justify-between overflow-hidden flex">
      <div className='flex flex-col gap-4'>
        <img src={logo} className='w-[50%]' />
        <p className='font-inter font-normal max-w-[300px] text-sm text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem
        </p>
        <div className='flex gap-3'>
          <FaFacebookSquare fontSize={24} className='text-lightblue' />
          <RiInstagramFill fontSize={24} className='text-lightblue' />
          <BsTwitterX fontSize={24} className='text-lightblue' />
          <FaLinkedin fontSize={24} className='text-lightblue' />
        </div>
      </div>

      <div className='flex items-start justify-end'>
        {footerLinks.map((footerLink) =>(
          <div className='flex flex-col'>
            <h1 className='font-inter text-white text-lg font-bold'>
              {footerLink.title}
            </h1>
            <ul className='list-none mt-2'>
              {footerLink.links.map((link)=>(
                <li className='p-1 font-inter text-white' key={link}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ) )}
      </div>
    </div>
  )
}

export default Footer