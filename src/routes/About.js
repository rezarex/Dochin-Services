import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import ProjectHero from '../components/ProjectHero'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
    <Navbar/>
    <ProjectHero heading ="About" text="We are an Engineering Consultancy Company, dealing
    in electrical and mechanical installations. We also supply haigh quality and genuine parts."/> 
    <AboutContent/>
    <Footer/>
    </div>
  )
}

export default About