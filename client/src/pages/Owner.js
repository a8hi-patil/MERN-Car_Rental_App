import React, { useState } from 'react'
import './Owner.css'
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'
function Owner() {
    let username = localStorage.getItem('username')
    // console.log('local',username)
    let [owner, setOwner] = useState({})
    const [cars, setCars] = useState([])

    async function getOwner(username) {
        let url = "http://localhost:5000/getsingleowner"
        let ownerCarData = await axios.post(url, { username })
        // console.log(ownerCarData.data[0])
        setOwner(ownerCarData.data[0])
        // console.log(owner)
    }


    function addVehicleHandler(e) {
        e.preventDefault()
        // console.log(e.target.image.value)
        let newVehicleData = {
            image: e.target.image.value,
            name: e.target.vname.value,
            brand: e.target.vbrand.value,
            rentPerHour: e.target.rent.value,
            user: username
        }
        // console.log(newVehicleData)
        let url = "http://localhost:5000/getallcars"
        axios.post(url, newVehicleData)
            .then(response => {
                alert('Car Added  successfully')
                getUserCarData(username)

            });
    }
    async function getUserCarData(username) {
        let url = "http://localhost:5000/getownercar"
        let user = username
        let ownerCarData = await axios.post(url, { user })
        console.log(url, username)
        setCars(ownerCarData.data)


    }
    useState(() => {
        getOwner(username)
        getUserCarData(username)
    }, [])
    return (
        <div>
            <Navbar />
            <h1>Hello : {owner.username}</h1>
            <div className="containerowner">
                <div className='small-conatiner'>
                    <h2>Your Vehicals</h2>
                    <table>
                        <tr>
                            <th>Vehical Name</th>
                            <th>Company</th>
                            <th>Rent</th>
                            <th>Action</th>

                        </tr>
                        {
                            cars.map((car, ind) => {
                                return (<tr>
                                    <td>{car.name}</td>
                                    <td>{car.brand} </td>
                                    <td>{car.rentPerHour}</td>
                                    <td><button className='obtn' id={car._id} >Delete</button></td>
                                </tr>)
                            })
                        }


                    </table>
                </div>
                <div className='small-conatiner vehicleform'>
                    <form action="" className='regveh' onSubmit={addVehicleHandler} >
                        <h1>Register New Vehicle</h1>

                        <label htmlFor="uname">Image Link</label><br />
                        <input type="text" placeholder="Image Link" name="image" required></input><br />

                        <label htmlFor="uname">Vehicle Name</label><br />
                        <input type="text" placeholder="Enter Vehicle Name" name="vname" required></input><br />
                        <label htmlFor="uname">Vehicle Brand</label><br />
                        <input type="text" placeholder="Vehicle Brand" name="vbrand" required></input><br />


                        <label htmlFor="psw">Rent</label><br />
                        <input type="number" placeholder="Enter Rent" name="rent" required></input><br />

                        <button className='submit' type="submit">Register New Vehicle</button>

                    </form></div>
                {/* <button onClick={ getUserCarData } >Get Cars</button> */}
            </div>
        </div>
    )
}

export default Owner