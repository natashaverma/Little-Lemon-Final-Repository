import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

function NavBar() {
    return (
        <nav id="navbar">
            <img src={Logo} alt="Little Lemon Logo" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#menu">Menu</a>
                </li>
                <li>
                    <Link to="/reservation">Reservations</Link>
                </li>
                <li>
                    <a href="#order-online">Order Online</a>
                </li>
                <li>
                    <a href="#login">Login</a>
                </li>
            </ul>
        </nav >
    );
}

export default NavBar;