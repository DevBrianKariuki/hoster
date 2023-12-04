import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div data-aos='fade-down' className='navbarbg px-32 items-center py-12 mt-12 flex justify-between w-full'>
      <div  className='flex flex-col justify-center items-start w-[50%]'>
        <h1 className='font-inter font-bold text-white text-xl'>Subscribe to our Newsletter</h1>
        <p className='text-gray-300 font-normal font-inter text-md'>Get Regularly News and Exclusive Offers</p>
      </div>

      <div className='bg-white flex justify-between rounded-full p-2'>
        <input className='font-inter px-4 py-2 text-sm outline-none' placeholder='Enter your email' />
        <button className='flex rounded-full text-white gap-2 font-inter items-center bg-primary py-2 px-4'>
            Subscribe
        </button>
      </div>
    </div>
  )
}

export default Subscribe