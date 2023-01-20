import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
               <div>
                <p>Langata Road</p>
                <p>Nairobi</p>
               </div>
                </div>
            <div className="phone">
                {/* <h4>
                <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                +254 722 614718, +254 721 212353<br/>
                +254 731 212353, +254 732 001666
                </h4> */}
                <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                <p>+254 722 614718, +254 721 212353<br/>
                +254 731 212353, +254 732 001666</p>
            </div>
            <div className="email">
                 <h4>
                <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                info@dochinservices.com
                {/* , dochinservices@gmail.com */}
                 </h4>
            </div>
            </div>
            {/* <div className="middle"></div> */}
            <div className="right">
                <h4>About Us</h4>
                <p>Dochin Services is an engineering consultancy company dealing in electrical and mechanical installations, supply
                    of high quality and genuine spare parts specializing in grain milling and animal feeds plants.
                </p>
                <p>
                    The founder Eng. David Okwaro is an accomplished Engineer of over 35 years experience in the field of grain milling
                    undertaking plant maintenance, mills and flour packing machine installations and commissioning with great success.
                </p>
                <div className="social">
                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer