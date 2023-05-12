import React from 'react'
import Navbar from '../components/Navbar'
import Background from "../assets/home.png"


function Home() {
  return (
    <div>
         <div style={{ backgroundImage: `url(${Background})`, width:"100%" ,height:"500px" ,objectFit:'cover' }} >
        <Navbar></Navbar>
        <div>
        <h1 style={{fontFamily:"Gilroy"}}>Cleaning of apartments, private houses, cottages, offices</h1>
        <p style={{fontFamily:'cursive'}}>We are engaged in the organization of apartment, office moving, moving shops, salons, transportation of goods, etc.</p>
        <button style={{width:'200px' , height:'50px' , border:"1px solid white",backgroundColor:"#00CA2C" ,color:"#FEFDFF" , fontFamily:"Gilroy"}}>More</button>
        <button style={{width:'200px' , height:'50px', border:"1px solid white", backgroundColor:"#6442E5", color:"white" ,fontFamily:"Gilroy"}}>Contact</button>
        </div>
    </div>

    </div>
  )
}

export default Home