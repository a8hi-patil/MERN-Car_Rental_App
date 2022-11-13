import React from 'react'
import './CarCard.css'
function CarCard(props) {
    function bookHandler(e) {
        // console.log(e.target.name)
        localStorage.setItem('carId', e.target.name)
        window.location.href = '/booking'

    }
    return (

        <div className="card">
            {/* props='Nexon' brand="Tata" rent='50' */}
            <div className="container">
                <img src={props.img} alt="car" />
                <h4>{props.carname}</h4>
                <p>Company : { props.brand}</p>
                <p>Owner : {props.owner}</p>
                <strong><p>Rent : {props.rent}</p></strong>
                <button onClick={bookHandler} name={props.id} >Book Now</button>
            </div>
        </div>
    )
}

export default CarCard