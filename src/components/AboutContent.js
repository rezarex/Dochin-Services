import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import About1 from "../assets/about1.jpg"
import About2 from "../assets/about2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who are we?</h1>
            <p>Dochin Services is an engineering consultancy company dealing in electrical and mechanical installations, supply of high quality and genuine spare parts specializing in grain milling and animal feeds plants.</p>
            <p>The founder Eng. David Okwaro is an accomplished Engineer of over 35 years experience in the field of grain milling undertaking plant maintenance, mills and flour packing machine installations and commissioning with great success.</p>
            <Link to="/ContactUs">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={About1} className="img" alt="topper"/>
                </div>
                <div className="img-stack bottom">
                    <img src={About2} className="img" alt="bottomer"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent