import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    const [ scrollColor, setScrollColor ] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setScrollColor(true)
        }else{
            setScrollColor(false)
        }
    };

    window.addEventListener("scroll", changeColor);


  return (
    <div className={scrollColor ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Dochin Services</h1>
        </Link>
        <ul className={ toggle ? "nav-menu active" : "nav-menu" }>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Project">Projects</Link>
            </li>
            <li>
                <Link to="/ContactUs">Contact Us</Link>
            </li>
            
        </ul>
        <div className="hamburger" onClick={handleToggle}>
            {toggle ? (<FaTimes size={20} style={{ color: "#fff" }}/>) : (<FaBars size={20} style={{ color: "#fff" }}/>)}
            
           
        </div>
    </div>
    
  )
}

export default Navbar