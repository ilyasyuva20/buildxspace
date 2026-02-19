import React, { useEffect, useState } from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Pre-construction Services, Design and Engineering, Construction Management...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText((prev) => prev + fullText.charAt(index));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <header id="home" className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-bg-overlay"></div>
            <div className="hero-content container">
                <h1 className="hero-title">BuildxSpace</h1>
                <p className="hero-tagline">
                    <span className="typing-text">{text}</span>
                </p>
                <div className="hero-cta">
                    <a href="#contact" className="btn btn-primary">Get a Quote</a>
                    <a href="#portfolio" className="btn btn-outline">View Portfolio</a>
                </div>
            </div>
            <div className="scroll-down">
                <i className="fas fa-chevron-down"></i>
            </div>
        </header>
    );
};

export default Hero;
