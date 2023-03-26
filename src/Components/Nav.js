import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import "./Nav.css";

function NavBar() {
    return (
        <div className="navbar">
            <nav className="nav-items">
                <img src={Logo} alt="Little Lemon Logo" />
                <Link to="/">Home</Link>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <Link to="/reservation">Reservations</Link>
                <a href="#order-online">Order Online</a>
                {/* <ul>
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
                </ul> */}
            </nav >
        </div>
    );
}

export default NavBar;