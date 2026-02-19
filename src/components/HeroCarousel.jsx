import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import AOS from 'aos';

const slides = [
    {
        image: slide1,
        title: "Elevating Living, Redefining Spaces",
        desc: "Crafting bespoke interiors that redefine luxury living."
    },
    {
        image: slide2,
        title: "Where Vision Meets Structure, Spaces Come Alive",
        desc: "Exquisite designs tailored to reflect your unique style and personality."
    },
    {
        image: slide4, // Villa exterior
        title: "Precision in Every Detail",
        desc: "Building your dreams with uncompromising quality and expertise."
    },
    {
        image: slide3, // Minimalist interior
        title: "Modern Design, Timeless Quality",
        desc: "Creating sustainable and innovative spaces for generations to come."
    }
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // AOS needs to be triggered on slide change if we want re-animation, 
    // but for simple carousel, CSS transitions are smoother.
    // We'll use keyframe animations for text.

    return (
        <div id="home" className="hero-carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === current ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content container">
                        <h1 className={`hero-title ${index === current ? 'animate-slide-up' : ''}`}>
                            {slide.title}
                        </h1>
                        <p className={`hero-desc ${index === current ? 'animate-slide-up-delay' : ''}`}>
                            {slide.desc}
                        </p>
                        <div className={`hero-cta ${index === current ? 'animate-fade-in' : ''}`}>
                            <a href="#contact" className="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Indicators */}
            <div className="hero-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
