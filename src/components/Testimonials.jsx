import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        name: 'John Doe',
        quote: 'BuildxSpace transformed our vision into reality. Their attention to detail is unmatched.',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Sarah Smith',
        quote: 'Professional, reliable, and on time. Highly recommend them for any construction needs.',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: 'Michael Brown',
        quote: 'The quality of materials provided was top-notch. Great service!',
        rating: 4,
        image: 'https://randomuser.me/api/portraits/men/86.jpg'
    }
];

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <h2 className="section-title text-center">Client Testimonials</h2>
                <div className="testimonial-carousel">
                    <div className="testimonial-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {testimonials.map((t, index) => (
                            <div className="testimonial-card" key={index}>
                                <img src={t.image} alt={t.name} className="client-img" />
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>"{t.quote}"</p>
                                <div className="client-name">- {t.name}</div>
                                <div className="stars" style={{ color: '#f1c40f', marginTop: '10px' }}>
                                    {[...Array(t.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <button className="prev-btn" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
                        <button className="next-btn" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
