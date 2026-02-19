import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container footer-content">
                <div className="footer-col about">
                    <h3>BuildxSpace</h3>
                    <p>Premier construction services delivering excellence in every project. From residential to commercial, we build your dreams.</p>
                </div>
                <div className="footer-col links">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#portfolio">Our Work</a></li>
                        <li><a href="#testimonials">Reviews</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col services">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#services">Construction</a></li>
                        <li><a href="#services">Renovation</a></li>
                        <li><a href="#services">Architecture</a></li>
                        <li><a href="#services">Consulting</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} BuildxSpace. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
