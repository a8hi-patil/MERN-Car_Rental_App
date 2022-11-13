import React from 'react'

import Navbar from '../components/Navbar'

function PaymentGateway() {
    function payHandler(e) {
        e.preventDefault()
        alert('Payment Succesfull')
    }
    return (
        <div><Navbar/>
        <div className='formdiv'>

            <form action="" onSubmit={payHandler}>
                <h1>Pay Here</h1>
                <label htmlFor="uname">Your Name</label><br />
                <input type="text" placeholder="Enter Your Name" name="uname" required></input><br />

                <label htmlFor="uname">Creadit Card Number</label><br />
                <input type="number" placeholder="Enter Creadit Card Number" name="uname" required></input><br />


                <label htmlFor="cars">Expiry Date</label>
                <input type="date" name="sdate"></input>


                <label htmlFor="psw">CVV</label><br />
                <input type="text" placeholder="CVV" name="cpsw" maxLength={3} required></input><br />


                <button className='submit' type="submit"  > <strong>PAY !</strong>  </button>
                {/* <div className='link' >   <Link to='/login' >Click Here to Log In</Link></div> */}

            </form>
            </div>
        </div>
    )
}

export default PaymentGateway