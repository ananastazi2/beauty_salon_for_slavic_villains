import { NavLink } from 'react-router-dom'
import React, {useState} from 'react'
import './Header.css'
import logo from '../images/logo.png'
import Hamburger from './Hamburger'
import DropdownMenu from '../components/DropdownMenu.js'

function Header() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)

    document.body.style.overflow = showNavbar ? 'auto' : 'hidden'
  }

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  
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

          <ul className={`${showNavbar && "active"}`} id='menu-header'>
            <li><NavLink to="/">Home</NavLink></li>
            <li  onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave} className='dropdown-menu'>
              <NavLink to="/services">Services</NavLink>
              <DropdownMenu isVisible={isDropdownVisible} />  
            </li>
            <li id='li-logo'><img src={logo} width='auto' id='logo' /></li>
            <li><NavLink to="/team">Team</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header