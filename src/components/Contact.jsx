import React, { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <section id="contact" className="section contact-section bg-dark">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>6/116, Vaduthala, Arookutty, Alappuzha, Kerala-688535</p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <p>sajid@buildxspace.in</p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <p>+91 90729 57160</p>
                    </div>

                </div>
                <div className="contact-form-wrapper">
                    {submitted ? (
                        <div className="success-message" style={{ textAlign: 'center', padding: '40px', background: '#151515', borderRadius: '8px' }}>
                            <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: '#4caf50', marginBottom: '20px' }}></i>
                            <h3>Message Sent!</h3>
                            <p>Thank you for contacting us. We will get back to you shortly.</p>
                            <button className="btn btn-outline" onClick={() => setSubmitted(false)} style={{ marginTop: '20px' }}>Send Another</button>
                        </div>
                    ) : (
                        <React.Fragment>
                            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
                            <form
                                className="contact-form"
                                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScSyoyjob7L8kAS6_wb6mtRHqbcZdFwO1UUn9QUPFZkpOXjNQ/formResponse"
                                method="POST"
                                target="hidden_iframe"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-group">
                                    <input type="text" name="entry.2005620554" id="name" required placeholder=" " />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="entry.1045781291" id="email" required placeholder=" " />
                                    <label htmlFor="email">Email Address</label>
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="entry.1166974658" id="phone" required placeholder=" " />
                                    <label htmlFor="phone">Phone Number</label>
                                </div>
                                <div className="form-group">
                                    <textarea name="entry.839337160" id="message" rows="4" required placeholder=" "></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                                <button type="submit" className="btn btn-primary block">Send Message</button>
                            </form>
                        </React.Fragment>
                    )}
                </div>
            </div>
            {/* Google Map */}
            <div className="map-container">
                <iframe
                    src="https://maps.google.com/maps?q=9.8543661,76.3261354&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </section>
    );
};

export default Contact;
