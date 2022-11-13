import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CarCard from '../components/CarCard'
import './Home.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useCars } from '../context/Cars'
function Home() {
    const [cars, setCars] = useState([])
    const { allCars } = useCars()
    
    

    async function getAllCars() {
        let url = "http://localhost:5000/getallcars"
        const data = await axios.get(url)
        setCars(data.data)
    }
   
    useEffect(() => {
        setCars(allCars)
    })

    return (
        <div>
            <Navbar />
            <div className='grid-container'>
                {cars.map((car, idx) => {
                    return <CarCard className='grid-item' key={idx} id={car._id} carname={car.name} brand={car.brand} rent={car.rentPerHour} img={car.image} owner={car.user} />
                })}

            </div>

        </div>
    )
}

export default Home