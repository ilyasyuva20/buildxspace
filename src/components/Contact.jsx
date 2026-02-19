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
                    {/* Hidden iframe for silent submission */}
                    <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={() => { if (submitted) { } }}></iframe>

                    <form
                        className="contact-form"
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScijdwOLqeEoaSODgJIbqWh_GFXYVSipAZFDCcM5mmPp2-3hQ/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <input type="text" name="entry.61405063" id="name" required placeholder=" " />
                            <label htmlFor="name">Your Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" name="entry.430976715" id="email" required placeholder=" " />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="form-group">
                            <input type="tel" name="entry.1146990674" id="phone" required placeholder=" " />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="form-group">
                            <textarea name="entry.1419757304" id="message" rows="4" required placeholder=" "></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button type="submit" className="btn btn-primary block">Send Message</button>
                    </form>

                    {/* Success Popup */}
                    {submitted && (
                        <div className="popup-overlay">
                            <div className="popup-content">
                                <i className="fas fa-check-circle popup-icon"></i>
                                <h3>Message Sent!</h3>
                                <p>Thank you for contacting us. We will get back to you shortly.</p>
                                <button className="btn btn-primary popup-btn" onClick={() => {
                                    setSubmitted(false);
                                    // Optional: Reset form fields if needed, but handled by native form usually or requires ref
                                    document.querySelector('.contact-form').reset();
                                }}>Close</button>
                            </div>
                        </div>
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
