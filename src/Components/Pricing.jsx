import React, {useEffect, useState} from 'react'
import { pricing } from '../constants'
import { CiCircleCheck } from "react-icons/ci";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Pricing = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  const [currentplan, setCurrentPlan] = useState('Monthly')
  

  return (
    <div className='w-full mt-12 py-12 items-center overflow-hidden flex flex-col'>
      <div className='flex items-center gap-3 pb-8 flex-col'>
        <h1 data-aos='zoom-in-up' className='font-inter text-white font-bold text-3xl '>Pricing plans</h1>
        <p data-aos='zoom-in-up' className='font-inter text-md text-gray-300'>Simple,transparent pricing that grows with you.</p>
      </div>

      <div data-aos='zoom-in' className='flex gap-2 items-center justify-center my-4 p-[7px] w-[230px] bg-white rounded-full'>
        <button onClick={() => setCurrentPlan('Monthly')} className={` ${ currentplan === 'Monthly' ? 'bg-primary text-white ' : 'bg-white text-black hover:font-bold'}  py-2 px-4 font-inter rounded-full w-[100px]`}>Monthly</button>
        <button onClick={() => setCurrentPlan('Yearly')} className={` ${ currentplan === 'Yearly' ? 'bg-primary text-white ' : 'bg-white text-black hover:font-bold'} py-2 px-4 font-inter rounded-full w-[100px]`}>Yearly</button>
      </div>

      <div className='flex mt-5 w-full flex-row justify-between items-center'>
        {pricing.map((price, id) =>(
          <PriceCard key={id} type={price.type} features={price.features} price={ currentplan === 'Yearly' ? ((price.price * 12) - (price.price) ) : price.price } id={price.id} description={price.description} />
        ))}
      </div>
    </div>
  )
}

const PriceCard = ({type, price,id ,description, features}) =>(
  <div data-aos='flip-right' className={` ${ id==='2' ? 'pricingcard border-none' : 'bg-none' } border-[1px] w-[32%] my-4 p-4 flex flex-col border-gray-400 rounded-xl`}>
    <p className='font-inter text-sm text-gray-300 pt-2'>{type}</p>
    <div className='flex justify-between pt-4 items-center'>
      <div className='flex items-center'>
        <p className='font-inter font-bold text-white text-2xl'>Ksh {price}.00</p>
        <p className='font-inter text-md text-white font-thin'>/Mo</p>
      </div>
      <div className='flex flex-col'>
        <p className={` ${ id==='2' ? 'text-lightblue' : 'text-red-500' } font-inter text-xs line-through`}>Ksh {Number(price) * 2}</p>
        <p className='font-inter text-xs text-white'>Save 50%</p>
      </div>
    </div>
    <div className='w-[90%] pt-4'>
        <p className='font-inter text-sm flex-1 text-gray-200'>{description}</p>
    </div>
    <div className='w-full pt-4 mb-3'>
          {(features).map((feature) =>(
            <div className='flex gap-3 my-3 items-center'>
              <CiCircleCheck className='text-white' />
              <p className='font-inter font-normal text-sm text-gray-300'>{feature}</p>
            </div>
          ))} 
    </div>
    <div className='flex justify-center  items-center my-4'>
      <button className={` ${ id==='2' ? 'bluebutton' :'whychoseuscard' }  py-3 w-[50%] rounded-full font-inter text-white text-sm`}>Choose Plan</button>
    </div>
  </div>
)


export default Pricing