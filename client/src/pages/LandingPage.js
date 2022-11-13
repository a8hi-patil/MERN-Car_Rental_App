import React from 'react'
import Navbar from '../components/Navbar'
import './LandingPage.css'
import landingcar from '../assets/landingcar.jpg'
function LandingPage() {
    return (
        <div className='landingcar'>

            <div> <Navbar register="no" login="no" />  </div>

            <div>
                <h1>Welcome to Get A CAR</h1>
                {/* <img src={landingcar} alt="car" /> */}
            </div>
        </div>
    )
}

export default LandingPage