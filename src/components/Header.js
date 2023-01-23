import React from 'react'
import { Link } from 'react-router-dom'
import './css/header.css'
import Image from '../assets/img/houses/logo.png'


const Header = () => {
  return (
   <header className='header'>
    <div className='header_container'>
     <Link to='/' className='home_logo'>
        <img className='logo' src={Image} alt=''/>
        <h1><span>Villa</span>Land</h1>
       
      </Link>
      <div className='links'>
         <button className='btn'>Login</button>
         <button className='btn_sign'>Sign Up</button>
      </div>
    </div>
    
   </header>
  )
}

export default Header