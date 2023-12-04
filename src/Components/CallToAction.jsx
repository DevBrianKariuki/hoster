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
        <h1 data-aos='zoom-in-up' className='font-inter text-white font-bold text-3xl '>Get Your Website Live Today</h1>
        <p data-aos='zoom-in-up'  className='font-inter w-[70%] text-center text-md text-gray-300'>Get everything that you require to set up your personal / business website and establish your online presence. Service includes web hosting in India, free domain registration along with 24x7 Support.</p>
      </div>

      <div className='w-[60%] relative mt-6 flex justify-between'>
        
        
        <div data-aos='fade-left' className='whychoseuscard w-[80px] flex items-center z-40 justify-center rounded-full  h-[80px] '>
          <FaRegUserCircle fontSize={46} className='text-white' />
        </div>
        <img id='line1' data-aos='fade-down' src={dashedline1} className='absolute z-0' />
        <div data-aos='zoom-in' className='whychoseuscard w-[80px] flex items-center z-40 justify-center rounded-full  h-[80px] '>
          <FaCheck fontSize={46} className='text-white' />
        </div>
        <div data-aos='fade-right' className='whychoseuscard w-[80px] flex items-center z-40 justify-center rounded-full  h-[80px] '>
          <IoIosGlobe fontSize={46} className='text-white' />
        </div>
        <img id='line2' data-aos='fade-down' src={dashedline2} className='absolute' />
      </div>
      <div  className='flex flex-col mt-12 gap-4'>
        <h1 data-aos='fade-up-right' className="font-bold font-inter text-white text-xl">Starting at just Ksh 1000/yr</h1>
        <button data-aos='fade-up-right' className=' bluebutton py-3 rounded-full font-inter text-white'>Get Started</button>
      </div>
    </div>
  )
}

export default CallToAction