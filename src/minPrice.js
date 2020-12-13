import React from 'react'
import "./App.css"
const minPrice = ({min}) =>{
    const style = {
        "color":"black",
    }
    return(
        <a href="">
        <div onClick = {()=>console.log("Clicked")}>
            <p style={style}>minPrice: {min}</p>
            
            <hr/>
        </div>
        </a>
/* <ul>
        <li>
        minPrice: {min}$
        </li>
    </ul>         */
    );
}
export default minPrice