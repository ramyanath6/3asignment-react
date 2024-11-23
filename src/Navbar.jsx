import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar1.css'

const Navbar = () => {
  return (
    <div className='container' style={{ backgroundColor: 'black',color:'blue' }}>
      <div className='row'>
        <div className='col' style={{ display: "flex", gap: "20px", listStyleType: "none" }}>
          <h1>First Steps</h1>
          <img style={{ width: '50px' }} src="a6.jpg" alt=" " />

        </div>
        <div className='col'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

        </div>
      </div>
    </div>





  )
}

export default Navbar
