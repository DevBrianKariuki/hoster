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
    <div className='w-full realtive flex justify-between items-center overflow-hidden'>
      <div className='flex flex-col gap-5'>
        <h1 data-aos='fade-right' className='font-inter text-3xl font-extrabold text-white'>Reliable Web Hosting Platform<br /> for Your Website</h1>
        <p data-aos='fade-up-right' className='font-inter text-md text-gray-300'>
          Fully Managed High Performance Web Hosting With Free Domain
        </p>
        <div data-aos='fade-left' className='flex gap-4'>
          <button className='py-2 px-6 buttonbg font-inter text-md text-white rounded-full'>
            Try for 7 days free
          </button>
          <button className='py-2 px-6 border-[1px] border-white font-inter text-md text-white rounded-full'>
            Choose Plan
          </button>
        </div>
      </div>
      <motion.div animate={{ y: [0, 40, 40, 0] }}  transition={{ repeat:Infinity, duration: 3 }} data-aos='zoom-in-up' >
        <img src={hero} className='w-[85%]' />
      </motion.div>
      <div data-aos='fade-up' id='bubble' className='w-[60px] h-[60px] rounded-full absolute whychoseuscard'></div>
    </div>
  )
}

export default Hero