import React from "react";
import { NavLink } from 'react-router-dom'
import './DropdownMenu.css'

function DropdownMenu(isVisible) {
    return (
        <ul className={"services-dropdown-menu" + (isVisible ? " active" : " inactive")}>
            <li><NavLink to='/witchingHairRituals'>Witching Hair Rituals</NavLink></li>
            <li>Moonlit Potion Pedicure</li>
            <li>Ethereal Enchantments Facial</li>
            <li>Sorcerers Stone Massage</li>
            <li>Mythical Creature Glamour</li>
            <li>Forest Nymph Manicure</li>
        </ul>
    );
};

export default DropdownMenu;