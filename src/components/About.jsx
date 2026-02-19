import React, { useEffect } from 'react';
import aboutImg from '../assets/about.png';
import AOS from 'aos';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-text" data-aos="fade-right">
                    <h2 className="section-title">About Us</h2>
                    <div className="divider"></div>
                    <p>A construction company is a business entity that specializes in the planning, design, and execution of construction projects. These projects can range from residential and commercial buildings to infrastructure development, such as roads, bridges, and utility systems.</p>
                    <p>Construction companies employ a variety of skilled professionals, including project managers, architects, engineers, construction workers, electricians, plumbers, carpenters, and other tradespeople. They work together to bring construction projects from concept to completion, ensuring that the finished product meets the client's requirements and adheres to applicable building codes and regulations.</p>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-number">15+</span>
                            <span class="stat-label">Years Experience</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">100+</span>
                            <span class="stat-label">Projects Completed</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">50+</span>
                            <span class="stat-label">Expert Team</span>
                        </div>
                    </div>
                </div>
                <div className="about-image" data-aos="fade-left">
                    <div className="image-wrapper">
                        <img src={aboutImg} alt="About BuildxSpace" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
