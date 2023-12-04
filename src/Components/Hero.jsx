import React,{useEffect} from 'react'
import { hero } from '../assets'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

const Hero = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  

  return (
    <div className='w-full relative z-0 flex flex-col sm:flex-row sm:justify-between items-center overflow-hidden'>
      <div className='flex items-center sm:items-start flex-col gap-5'>
        <h1 data-aos='fade-right' className='font-inter text-center sm:text-left mt-8 text-4xl sm:text-3xl leading-[48px] font-extrabold text-white'>Reliable Web Hosting Platform<br /> for Your Website</h1>
        <p data-aos='fade-up-right' className='font-inter text-center sm:text-left mt-2 mb-4 sm:my-0 text-lg leading-[36px] sm:text-md sm:w-[100%] w-[80%] text-gray-300'>
          Fully Managed High Performance Web Hosting With Free Domain
        </p>
        <div data-aos='fade-left' className='flex w-full items-center flex-col sm:flex-row gap-4'>
          <button className='py-3 w-[70%] sm:w-[40%] bg-primary font-inter text-md text-white rounded-full'>
            Try for 7 days free
          </button>
          <button className='py-3 w-[70%] sm:w-[40%]  mt-2 border-[1px] border-white font-inter text-md text-white rounded-full'>
            Choose Plan
          </button>
        </div>
      </div>
      <motion.div animate={{ y: [0, 40, 40, 0] }} className='w-full sm:w-[50%] sm:mt-0 mt-8 flex items-center justify-center'  transition={{ repeat:Infinity, duration: 3 }} data-aos='zoom-in-up' >
        <img src={hero} className='w-[100%] sm:w-[85%]' />
      </motion.div>
      <div data-aos='fade-up' id='bubble' className='w-[60px] hidden sm:block h-[60px] rounded-full absolute whychoseuscard'></div>
    </div>
  )
}

export default Hero