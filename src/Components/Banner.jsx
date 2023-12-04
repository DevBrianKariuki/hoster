import React,{useEffect} from 'react'
import { IoSearchSharp } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  

  return (
    <div data-aos='fade-up' className='navbarbg px-6 sm:px-32 sm flex-col sm:flex-row items-center py-12 mt-12 flex justify-between w-full'>
      <div data-aos='fade-up-left' className='flex flex-col sm:pb-0 pb-6 items-center sm:items-start sm:w-[50%]'>
        <h1 className='font-inter font-bold text-white text-center sm:text-left text-2xl sm:text-xl pb-4'>Get 10% off today</h1>
        <p className='w-full text-gray-300 font-normal text-center sm:text-left font-inter text-md'>Grab the holiday offer.This offer will end in 3 days.Hurry Up!
          Get your perfect domain starting from<span className='font-bold text-lightblue'> 149/Month</span> </p>
      </div>
      <div data-aos='fade-up-right' className='flex items-center mx-4 flex-col gap-3'>
        <div className='bg-white flex justify-between rounded-full p-2'>
          <input className='font-inter px-4 py-2 text-sm outline-none' placeholder='Type Your Domain Name' />
          <select data-te-select-init className='outline-none bg-white text-sm font-inter mr-3' >
            <option className='py-2' value="1">.com</option>
            <option className='py-2' value="2">.org</option>
            <option className='py-2' value="3">.co.ke</option>
            <option className='py-2' value="4">.net</option>
            <option className='py-2' value="5">.store</option>
            <option className='py-2' value="6">.info</option>
          </select>
          <button className='flex rounded-full text-white gap-2 font-inter items-center bg-primary py-2 px-4'>
            Search
            <IoSearchSharp fontSize={18} />
        </button>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center flex-col'>
            <p className='font-white font-inter text-white text-lg'>.com</p>
            <p className='font-inter text-sm text-gray-300'>199/Mo</p>
          </div>
          <div className='flex items-center flex-col'>
            <p className='font-white font-inter text-white text-lg'>.org</p>
            <p className='font-inter text-sm text-gray-300'>179/Mo</p>
          </div>
          <div className='flex items-center flex-col'>
            <p className='font-white font-inter text-white text-lg'>.co.ke</p>
            <p className='font-inter text-sm text-gray-300'>189/Mo</p>
          </div>
          <div className='flex items-center flex-col'>
            <p className='font-white font-inter text-white text-lg'>.net</p>
            <p className='font-inter text-sm text-gray-300'>199/Mo</p>
          </div>
          <div className='flex items-center flex-col'>
            <p className='font-white font-inter text-white text-lg'>.store</p>
            <p className='font-inter text-sm text-gray-300'>199/Mo</p>
          </div>
          <div className='flex items-center flex-col'>
            <p className='font-white font-inter text-white text-lg'>.info</p>
            <p className='font-inter text-sm text-gray-300'>309/Mo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner