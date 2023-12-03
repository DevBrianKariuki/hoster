import React, {useEffect} from 'react'
import { migration } from '../assets'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion';

const Migration = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])


  return (
    <div className='w-full mt-12 py-12 items-center overflow-hidden flex flex-col'>
      <div className='flex items-center gap-3 pb-8 flex-col'>
        <h1 data-aos='zoom-in-up' className='font-inter text-white font-bold text-3xl '>Migration is not an issue with us</h1>
        <p data-aos='zoom-in-up' className='font-inter text-md text-gray-300'>We provied free migration service so that ours customers can manage their work easily</p>
      </div>
      <div className='flex w-full mt-5 items-center flex-row gap-4'>
        <div className='flex w-[50%] items-start flex-col gap-5'>
          <h1 data-aos='fade-right' className='font-inter text-white font-bold text-xl'>Hassle Free Migration</h1>
          <p data-aos='fade-up' className='font-inter text-gray-300 w-[90%] text-sm'>Our technical expert team will help you to migrate your site from your current hosting provider to Host.co.in, You don't have to worry about any of the migration issues.</p>
          <button data-aos='fade-right' className='py-3 rounded-full text-white font-inter text-sm w-[30%] whychoseuscard'>Contact Sales</button>
        </div>
        <motion.div animate={{ y: [0, 25, 25, 0] }}  transition={{ repeat:Infinity, duration: 3 }} data-aos='fade-left' className='flex w-[50%]'>
          <img src={migration} />
        </motion.div>
      </div>
    </div>
  )
}

export default Migration