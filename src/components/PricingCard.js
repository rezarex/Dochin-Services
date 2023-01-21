import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>Installations</h3>
                <span className="bar"></span>
                <p className="btc">Project Details</p>
                <p>- 3 Weeks -</p>
                <p>- Mills Plants -</p>
                <p>- Animal Feeds Plants -</p>
                <p>- Flour packing machines -</p>
                <Link to="/ContactUs" className="btn">Request Quote</Link>
            </div>

            <div className="card">
                <h3>Supplies</h3>
                <span className="bar"></span>
                <p className="btc">Supplies and Consultancy</p>
                <p>- Milling Consultancy -</p>
                <p>- Electrical and Mechanical spare parts supplies -</p>
                <p>- Mills and animal feeds plants consumables supplies -</p>
                <p>- Flour packing spare parts supplies -</p>
                <Link to="/ContactUs" className="btn">Request Quote</Link>
            </div>

            {/* <div className="card">
                <h3>Installations</h3>
                <span className="bar"></span>
                <p className="btc">Project Details</p>
                <p>- 3 Weeks -</p>
                <p>- Mills Plants -</p>
                <p>- Animal Feeds Plants -</p>
                <p>- Flour packing machines -</p>
                <Link to="/ContactUs" className="btn">Request Quote</Link>
            </div> */}

        </div>

    </div>
  )
}

export default PricingCard