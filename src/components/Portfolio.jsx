import React, { useState } from 'react';

// Import images
import elevationVilla from '../assets/portfolio-elevation-villa.png';
import interiorLiving from '../assets/portfolio-interior-living.png';
import ongoingMall from '../assets/hero-bg.png'; // Using hero bg (construction site) for ongoing
import completedBridge from '../assets/slide2.png'; // Using architectural slide for completed
import officeElevation from '../assets/slide4.png'; // Using villa exterior slide for another elevation
import minimalistKitchen from '../assets/slide3.png'; // Using minimalist interior slide

const portfolioData = [
    {
        category: 'elevation',
        title: 'Modern Villa Elevation',
        image: elevationVilla
    },
    {
        category: 'interior',
        title: 'Luxury Living Room',
        image: interiorLiving
    },
    {
        category: 'ongoing',
        title: 'City Mall Project',
        image: ongoingMall
    },
    {
        category: 'completed',
        title: 'Highway Bridge',
        image: completedBridge
    },
    {
        category: 'elevation',
        title: 'Corporate Office',
        image: officeElevation
    },
    {
        category: 'interior',
        title: 'Minimalist Kitchen',
        image: minimalistKitchen
    }
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const filteredItems = filter === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === filter);

    return (
        <section id="portfolio" className="section portfolio-section bg-dark">
            <div className="container">
                <h2 className="section-title text-center">Our Portfolio</h2>
                <div className="portfolio-filters">
                    {['all', 'elevation', 'interior', 'ongoing', 'completed'].map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="portfolio-grid">
                    {filteredItems.map((item, index) => (
                        <div className="portfolio-item" key={index}>
                            <img src={item.image} alt={item.title} loading="lazy" />
                            <div className="portfolio-overlay">
                                <h4>{item.title}</h4>
                                <span className="category">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
