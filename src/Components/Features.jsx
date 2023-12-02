import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Features = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  
  
  return (
    <div>Features</div>
  )
}

export default Features