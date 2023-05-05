import React from 'react'
import About from './About'
import Services from './Services'
import Contactus from './Contactus'
import Footer from './Footer'
import Slider from './Carousel'
const Home = () => {
  return (
    <>
    <Slider/>
   
    <About/>
    <Services/>
    <Contactus/>
    <Footer/>
    </>
  )
}

export default Home