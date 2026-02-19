import React, { useState, useEffect } from 'react';

const FloatingActions = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="floating-actions">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-action instagram">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-action facebook">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/919072957160" target="_blank" rel="noopener noreferrer" className="social-action whatsapp">
                <i className="fab fa-whatsapp"></i>
            </a>
            <button
                className={`scroll-top ${showScroll ? 'show' : ''}`}
                onClick={scrollTop}
                aria-label="Scroll to top"
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default FloatingActions;
