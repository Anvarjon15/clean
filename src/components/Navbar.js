import React from "react";
import { Link } from "react-router-dom";



function Navbar(){
    return(
        <div className="Navbar" style={{ display: "flex" ,fontFamily:"Gilroy" ,gap:"50px"}} >
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </div>
    )
}

export default Navbar