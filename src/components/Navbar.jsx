import React, { useState, useEffect } from 'react';
// Logo is in public/logo.svg

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    {/* Using absolute path for public folder asset if strictly static, or imported if in src/assets */}
                    {/* Since I moved logo.svg to public/, I can use /logo.svg */}
                    <img src="/logo-white.png" alt="BuildxSpace" />
                </div>
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
