import React, {useEffect} from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { dashedline1, dashedline2 } from '../assets'

import AOS from 'aos'
import 'aos/dist/aos.css'


const CallToAction = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className='w-full mt-12 py-12 items-center overflow-hidden flex flex-col'>
      <div className='flex items-center gap-3 pb-8 flex-col'>
        <h1 data-aos='zoom-in-up' className='font-inter text-white text-center mb-3 font-bold text-3xl '>Get Your Website Live Today</h1>
        <p data-aos='zoom-in-up'  className='font-inter md:w-[70%] text-center text-md text-gray-300'>Get everything that you require to set up your personal / business website and establish your online presence. Service includes web hosting in India, free domain registration along with 24x7 Support.</p>
      </div>

      <div className='md:w-[60%] gap-12 relative mt-6 flex md:flex-row flex-col justify-between'>
        
        
        <div className='flex flex-col gap-4 items-center'>
          <div data-aos='fade-left' className='whychoseuscard w-[80px] flex items-center z-40 justify-center rounded-full  h-[80px] '>
          <FaRegUserCircle fontSize={46} className='text-white' />
          </div>
          <p className='font-inter text-md font-bold text-white'>1.Register</p>
        </div>
        <img id='line1' data-aos='fade-down' src={dashedline1} className='hidden md:flex absolute z-0' />
        <div className='flex flex-col gap-4 items-center'>
          <div data-aos='fade-left' className='whychoseuscard w-[80px] flex items-center z-40 justify-center rounded-full  h-[80px] '>
          <FaCheck fontSize={46} className='text-white' />
          </div>
          <p className='font-inter text-md font-bold text-white text-center'>2.Choose Plan</p>
        </div>
        <div className='flex flex-col  gap-4 items-center'>
          <div data-aos='fade-left' className='whychoseuscard w-[80px] flex items-center z-40 justify-center rounded-full  h-[80px] '>
          <IoIosGlobe fontSize={46} className='text-white' />
          </div>
          <p className='font-inter text-md font-bold text-center text-white'>3.See your website live</p>
        </div>
        <img id='line2' data-aos='fade-down' src={dashedline2} className='absolute hidden md:flex' />
      </div>
      <div  className='flex flex-col mt-12 gap-4'>
        <h1 data-aos='fade-up-right' className="font-bold font-inter text-white text-xl">Starting at just Ksh 1000/yr</h1>
        <button data-aos='fade-up-right' className=' bluebutton py-3 rounded-full font-inter text-white'>Get Started</button>
      </div>
    </div>
  )
}

export default CallToAction