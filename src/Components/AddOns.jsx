import React, {useEffect} from 'react'
import { addOns } from '../constants';

const AddOns = () => {
  return (
    <div className='w-full mt-12 py-12 items-center overflow-hidden flex flex-col'>
      <div className='flex items-center gap-3 pb-8 flex-col'>
        <h1 data-aos='zoom-in-up' className='font-inter text-white font-bold text-3xl '>Web Hosting Add-Ons</h1>
        <p data-aos='zoom-in-up'  className='font-inter text-md text-gray-300'>HOST.CO.IN. offers several Add-Ons services that you can use to increase your web site's functionality, security, and more.</p>
      </div>

      <div className='flex justify-between items-center'>
        {addOns.map((addon) =>(
          <AddonCard />
        ))}
      </div>

    </div>
  )
}

const AddonCard = ({ id, icon, title, description, price }) =>(
  <div className='flex flex-col w-[32%] whychoseuscard'></div>
)

export default AddOns;