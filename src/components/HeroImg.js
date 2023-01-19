import "./HeroImgStyles.css"

import React from 'react'
import herobg from "../assets/herobg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-bg" src={herobg} alt="herobg"/>
        </div>
        <div className="content">
            <p>Welcome to</p>
            <h1>Dochin Services</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg