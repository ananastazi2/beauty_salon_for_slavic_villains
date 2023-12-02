import { NavLink } from 'react-router-dom'
import React, {useState} from 'react'
import './Header.css'
import logo from '../images/logo.png'
import Hamburger from './Hamburger'

function Header() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  return (
    <header className='general-header'>
        <nav className='navbar'>
          <div className='toggled-navbar'>
            <div>
              <img src={logo} />
            </div>
            
            <div id='hamburger' onClick={handleShowNavbar}>
              <Hamburger />
            </div>
          </div>

          <ul className={`${showNavbar && "active"}`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li id='li-logo'><img src={logo} width='auto' id='logo' /></li>
            <li><NavLink to="/team">Team</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header