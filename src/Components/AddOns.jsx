import React, {useEffect} from 'react'
import { addOns } from '../constants';
import AOS from 'aos'
import 'aos/dist/aos.css'

const AddOns = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  
  return (
    <div className='w-full mt-12 py-12 items-center overflow-hidden flex flex-col'>
      <div className='flex items-center gap-3 pb-8 flex-col'>
        <h1 data-aos='zoom-in-up' className='font-inter text-white font-bold text-3xl '>Web Hosting Add-Ons</h1>
        <p data-aos='zoom-in-up'  className='font-inter text-center text-md text-gray-300'>HOST.CO.IN. offers several Add-Ons services that you can use to increase your web site's functionality, security, and more.</p>
      </div>

      <div className='flex justify-between flex-col md:flex-row items-center'>
        {addOns.map((addon) =>(
          <AddonCard key={addon.id} id={addon.id} icon={addon.icon} title={addon.title} description={addon.description} price={addon.price} />
        ))}
      </div>
    </div>
  )
}

const AddonCard = ({ id, icon, title, description, price }) =>(
  <div data-aos= 'fade-up-right' className='flex z-5 relative flex-col md:w-[32%] mt-14  h-[22rem] items-center p-6 whychoseuscard rounded-2xl'>
    <img src={icon} alt="" className={` ${ id === 2 ? 'w-[100px]' : 'w-[55px]' }  py-5`}/>
    <h1 className='font-inter text-xl font-bold text-white'>{title}</h1>
    <p className='font-inter text-center text-sm text-gray-300 py-4'>{description}</p>
    <span className={` ${ id === 2 ? 'mt-3' : 'mt-2'} font-inter flex items-center text-white text-xl font-bold`}>
      Ksh {price}.00/yr
    </span>
    <div id='learnbutton' className='absolute bottom-0 rounded-full bluebutton'>
      <button className='px-14 py-3 rounded-full flex items-center font-inter text-white'>Learn more</button>
    </div>
  </div>
)

export default AddOns;