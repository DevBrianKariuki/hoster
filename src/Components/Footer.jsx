import React from 'react'
import { footerLinks } from '../constants'
import { logo } from '../assets'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-bgFooter w-full px-6 md:px-32 pt-16 pb-6 items-center justify-center overflow-hidden flex-col">
      <div className='md:justify-starts flex-col md:flex-row flex w-full'>
        <div className='flex flex-col w-[100%] mb-8 gap-4'>
          <img src={logo} className='w-[40%]' />
          <p className='font-inter font-normal md:max-w-[300px] text-sm text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem
          </p>
          <div className='flex gap-3'>
            <FaFacebookSquare fontSize={20} className='text-lightblue' />
            <RiInstagramFill fontSize={20} className='text-lightblue' />
            <BsTwitterX fontSize={20} className='text-lightblue' />
            <FaLinkedin fontSize={20} className='text-lightblue' />
          </div>
        </div>

        <div className='grid  md:grid-cols-4 grid-cols-2 w-full gap-12'>
          {footerLinks.map((footerLink) =>(
            <div className='flex flex-col'>
              <h1 className='font-inter text-white text-lg font-bold'>
                {footerLink.title}
              </h1>
              <ul className='list-none mt-2'>
                {footerLink.links.map((link)=>(
                  <li className='p-1 font-inter text-sm text-white' key={link}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ) )}
        </div>
      </div>
      <div className='flex justify-center mt-8 items-center'>
       <p className='font-inter text-sm text-gray-300'>Copyright © 2023 hoster.co.in All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer