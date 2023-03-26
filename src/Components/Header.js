import React from "react";
import Food from '../assets/restauranfood.jpg';
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
                <div onClick={() => navigate("/reservation")} className="hero-button">
                    <h4 data-testid="reserve-button">Reserve a Table</h4>
                </div>
            </div>
            <div className="right-side">
                <div className="hero-image">
                    <img
                        src={Food}
                        alt="restaurant image"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;