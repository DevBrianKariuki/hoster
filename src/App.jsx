import React from 'react'
import styles from './styles'
import { Navbar, AddOns, Banner, CallToAction, Features, Footer, Hero, Migration, Pricing, Subscribe, Testimonials, WhyChooseUs  } from './Components'

const App = () => (

  <div id='main-div' className={`bg-gradient-to-r from-bgColorOne to-bgColorTwo w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Hero />
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Banner />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Features />
        <Pricing />
        <WhyChooseUs />
        <Migration />
        <Testimonials />
        < AddOns />
        <CallToAction />
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Subscribe />
        <Footer />
      </div>
    </div>
  </div>

  )

export default App