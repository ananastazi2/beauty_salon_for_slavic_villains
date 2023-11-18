import React from 'react'
import './Header.css'
import logo from '../images/logo.png'

function Header() {
  return (
    <header>
        <nav className='nav-bar'>
            <a href='#'>About</a>
            <a href='#'>Services</a>
            <a href='#'><img src={logo} width='auto' id='logo' /></a>
            <a href='#'>Team</a>
            <a href='#'>Contacts</a>
        </nav>
    </header>
  )
}

export default Header