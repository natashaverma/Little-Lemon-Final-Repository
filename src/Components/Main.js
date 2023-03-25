import React from "react";
import Highlight from "./SpecialsSection";
import Testimonials from "./Testimonials";

function Main() {
    return (
        <main className="container">
            <section id="highlight-section">
                <Highlight />
            </section>
            <section id="testimonials-section">
                <Testimonials />
            </section>
        </main>
    );
}

export default Main;
