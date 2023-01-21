import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import ProjectHero from '../components/ProjectHero'
import Form from '../components/Form'

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHero heading ="Contact Us" text="Reach out to us"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default ContactUs