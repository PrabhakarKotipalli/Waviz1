import React from 'react'
import "./App.css"
const Flights = ({Flight}) =>{
    const style = {
        "background-color":"#F0F0F0"
    }
    var RandomPrice = Math.floor(Math.random()*50)+10
    return(
        <a href = "">
        <div className="Flights" >
            <p><b>Flight Name:</b> {Flight}</p>
            <p class = "Price"><b>Price:</b> {RandomPrice}$</p>
            <button className = "btn btn-outline-primary">Book Now</button>
            <hr/>
        </div>
        </a>
    //     <ul>
    //     <li>
    //     Flight Name: {Flight}
    //     </li>
    // </ul> 
    );
}
export default Flights