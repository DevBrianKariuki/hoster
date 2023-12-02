import React from 'react'
import styles from './styles'
import { Navbar, AddOns, Banner, CallToAction, Features, Footer, Hero, Migration, Pricing, Subscribe, Testimonials, WhyChooseUs  } from './Components'

const App = () => (

  <div id='main-div' className={`bg-gradient-to-r from-bgColorOne to-bgColorTwo w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  </div>

  )

export default App