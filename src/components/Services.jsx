import React from 'react';

const services = [
    { name: 'Pre-construction Services', icon: 'fa-ruler-combined', desc: 'Thorough planning and cost estimation before breaking ground.' },
    { name: 'Design and Engineering', icon: 'fa-pencil-ruler', desc: 'Structural integrity meets architectural beauty.' },
    { name: 'Construction Management', icon: 'fa-tasks', desc: 'Overseeing daily operations to ensure timely delivery.' },
    { name: 'General Contracting', icon: 'fa-hard-hat', desc: 'Full responsibility for the day-to-day oversight of a construction site.' },
    { name: 'Specialty Construction', icon: 'fa-layer-group', desc: 'Expertise in unique and complex building requirements.' },
    { name: 'Renovation and Remodeling', icon: 'fa-hammer', desc: 'Breathing new life into existing structures.' }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <h2 className="section-title text-center">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <i className={`fas ${service.icon} service-icon`}></i>
                            <h3>{service.name}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
