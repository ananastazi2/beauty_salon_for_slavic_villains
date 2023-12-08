import React from "react";
import { Link } from 'react-router-dom'
import './DropdownMenu.css'
import { routes } from "../consts/RouteConsts";

function DropdownMenu({isVisible}) {
    return (
        <ul className={`services-dropdown-menu ${isVisible ? ' visible' : ' invisible'}`}>
            <li><Link to={routes.services.base + routes.services.witchingHairRituals}>Witching Hair Rituals</Link></li>
            <li>Moonlit Potion Pedicure</li>
            <li>Ethereal Enchantments Facial</li>
            <li>Sorcerers Stone Massage</li>
            <li>Mythical Creature Glamour</li>
            <li>Forest Nymph Manicure</li>
        </ul>
    );
};

export default DropdownMenu;