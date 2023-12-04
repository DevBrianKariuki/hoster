import React, {useEffect} from 'react'
import { clients } from '../constants'
import { ratings, triangle } from '../assets'
import { FaStar } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])


  return (
    <div className='w-full mt-12 py-12 items-center overflow-hidden flex flex-col'>
      <div className='flex items-center gap-3 pb-8 flex-col'>
        <h1 data-aos='zoom-in-up' className='font-inter text-white font-bold text-3xl '>What our clients say</h1>
        <p data-aos='zoom-in-up'  className='font-inter text-center text-md text-gray-300'>Your trusted hosting partner since 2005. Here's what some of our customers say about HOST.CO.IN</p>
      </div>

      <div className='flex items-center flex-col md:flex-row justify-between'>
        {clients.map((client, id) =>(
          <ClientCard key={client.id} avatar={client.img} rating={client.rating} testimony={client.testimony} name={client.name} />
        ) )}
      </div>
    </div>
  )
}

const ClientCard = ({id, avatar, name, testimony, rating}) =>(
  <div className='flex md:w-[30%] mt-8 items-center flex-col'>
    <img data-aos='zoom-in-left' src={avatar} alt="" className='w-[70px] mb-8'/>
    <div data-aos='zoom-in-right' className='rounded-xl relative h-[120px] flex items-center border-[1px] border-gray-300 p-5'>
      <div id='triangle' className=' w-full absolute'>
        <img src={triangle} className='' />
      </div>
      <p className='font-inter text-sm text-gray-300'>{testimony}</p>
    </div>
    <div data-aos='fade-up' className='flex py-4 flex-col gap-3'>
      <p className='font-inter text-sm text-white'>{name}</p>
      <img src={rating} />
    </div>
  </div>
)

export default Testimonials