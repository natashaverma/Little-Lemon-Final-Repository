import React from "react";
import Food from '../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <div className="left-side">
                <h1 data-testid="homepage-title">
                    Little Lemon
                </h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
            </div>
            <div className="right-side">
                <img
                    src={Food}
                    alt="our cook holding a tablet with delicoues baguettes"
                />
            </div>
            <div onClick={() => navigate("/reservations")} className="hero-button">
                <h4 data-testid="reserve-button">Reserve a Table</h4>
            </div>
        </header>
    )
}

export default Header;