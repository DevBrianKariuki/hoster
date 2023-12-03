import React,{useEffect} from 'react'
import { whyUs } from '../constants'
import AOS from 'aos'
import 'aos/dist/aos.css'

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className='w-full mt-12 py-12 items-center overflow-hidden flex flex-col'>
      <div className='flex items-center gap-3 pb-8 flex-col'>
        <h1 data-aos='fade-right' className='font-inter text-white font-bold text-3xl '>Why Choose Host.Co.In ?</h1>
        <p data-aos='fade-left' className='font-inter text-center w-[60%] text-md text-gray-400'>With Host.co.in stand apart in the sphere of World Wide Web with maximum flexibility offering elevated packages
          for all your business needs ensuring smooth execution of your business activities.</p>
      </div>

      <div className='flex w-full my-10 items-center justify-between'>
        {whyUs.map((reason, id) =>(
          <WhyCard icon={reason.icon} title={reason.title} text={reason.text} />
        ) )}
      </div>
    </div>
  )
}

const WhyCard = ({icon, title, text}) => (
  <div data-aos='zoom-in-up' className='flex relative py-8 px-6 h-[200px] rounded-xl w-[32%] whychoseuscard flex-col justify-center items-start'>
    <div id='icon' className='w-[60px] shadow-md absolute flex items-center justify-center h-[60px] rounded-full bluebutton'>
      < img className='w-[50%]' src={icon} />
    </div>
    <div className='flex flex-col gap-3'>
      <h1 className='font-inter font-bold text-xl text-white'>{title}</h1>
      <p className='font-inter text-gray-300 text-sm'>{text}</p>
    </div>
  </div>
)

export default WhyChooseUs