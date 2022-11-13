import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
function CarBooking() {
  let [car, setCar] = useState({})
  let _id = localStorage.getItem('carId')
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  let [date, setDate] = useState(`${yyyy}-${mm}-${dd}`)
  let [diffDays, setDiffDays] = useState(1)
  function fromDateHandlet(e) {
    console.log('to', e.target.value)
    setDate(e.target.value)
  }

  function paymentHandler() {
    window.location.href = '/payment'
  }

  function toDateHandlet(e) {
    // console.log('from', e.target.value)
    var date1 = new Date(date);
    var date2 = new Date(e.target.value);
    let diff = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10) + 1
    setDiffDays(diff)
  }


  async function getSingleCar() {
    let url = "http://localhost:5000/getsinglecar"
    let singleCarData = await axios.post(url, { _id })
    console.log(singleCarData.data[0])
    setCar(singleCarData.data[0])

  }
  useState(() => {
    getSingleCar()
  }, [])
  return (
    <div>
      <Navbar />
      <div className='formdiv'>
        <form action="">
          <h1>Book Car Here</h1>
          <div className="container">
            <img src={car.image} alt="car" />
            <h4>{car.carname}</h4>
            <p>Company {car.brand}</p>
            <p>Rent : {car.rentPerHour}$ Per Day</p>
          </div>
          <label htmlFor="uname">Name</label><br />
          <input type="text" placeholder="Enter Username" name="uname" required value={localStorage.getItem('username')}></input><br />
          <label htmlFor="cars">From Date</label>
          <input type="date" name="sdate" min={date} value={date} onChange={fromDateHandlet} ></input>
          <label htmlFor="cars">To Date</label>
          <input type="date" name="tdate" onChange={toDateHandlet} ></input>
          {/* <button className='submit' type="submit">Book a Car</button> */}
          {/* <div className='link' >   <Link to='/' >hom</Link></div> */}
        </form>
        <h3>Total : {car.rentPerHour * diffDays}$</h3>
        <button onClick={paymentHandler}>Pay Now</button>
      </div>
    </div>
  )
}

export default CarBooking