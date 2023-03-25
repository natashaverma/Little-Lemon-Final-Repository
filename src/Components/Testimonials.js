import React from 'react';
import Testimonial from './Testimonial.js';

function Testimonials() {
    return (
        <>
            <h1 className='testimonials-title'>Testimonials</h1>
            <div className='testimonial-container'>
                <Testimonial />
                <Testimonial />
            </div>
        </>
    )
}

export default Testimonials;