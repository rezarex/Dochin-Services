import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import ProjectHero from '../components/ProjectHero'
import PricingCard from '../components/PricingCard'
//import WorkCard from '../components/WorkCard'
import Work from '../components/Work'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHero heading ="PROJECTS" text="Mills and flour packing projects accomplished"/>
      {/* <WorkCard/> */}
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project