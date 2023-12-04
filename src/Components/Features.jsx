import React,{useEffect} from 'react'
import { features } from '../constants'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Features = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  

  return (
    <div className='w-full mt-12 py-12 overflow-hidden flex flex-col'>
      <div className='flex items-center gap-3 pb-8 flex-col'>
        <h1 data-aos='zoom-in-up' className='font-inter text-white font-bold text-center text-3xl '>What will you get if you join us ?</h1>
        <p data-aos='zoom-in-up' className='font-inter text-md text-center text-gray-300'>Get the best hosting service at the price you can afford</p>
      </div>
      <div className='flex overflow-x-auto md:overflow-x-hidden gap-16 mt-6 justify-between'>
        {features.map((feature, id)=>(
          <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  )
}

const FeatureCard = ({icon, title, text}) =>(
  <div className='flex items-center flex-col'>
    <div data-aos='zoom-in-up' className='p-4 w-[70px] mb-6 h-[70px] rounded-full whychoseuscard flex items-center justify-center'>
      <img src={icon} />
    </div>
    <div className='flex flex-col items-center'>
      <h1 data-aos='fade-left' className='font-inter font-semibold text-white text-2xl'>{title}</h1>
      <p data-aos='fade-right' className='font-inter text-center text-sm text-gray-500'>{text}</p>
    </div>
  </div>
)


export default Features