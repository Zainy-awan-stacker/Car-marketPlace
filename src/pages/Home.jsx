import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import FeaturedCars from '../components/FeaturedCars'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
   <>
    <Hero/>
    <About/>
    <FeaturedCars/>
    <Banner/>
    <Testimonial/>
   </>
  )
}

export default Home