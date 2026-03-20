import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin size={32} />,
      title: "Temple Address",
      details: ["Sri Veera Vittala Venkataramana Swamy Temple", "Carstreet, Panemangalore", "Bantwal, Karnataka - 574231"],
      delay: 0.1
    },
    {
      icon: <Phone size={32} />,
      title: "Contact Numbers",
      details: ["+91 1234 567 890", "+91 0824 222 3344"],
      delay: 0.2
    },
    {
      icon: <Mail size={32} />,
      title: "Official Email",
      details: ["info@svtpanemangalore.com", "admin@svtpanemangalore.com"],
      delay: 0.3
    },
    {
      icon: <Clock size={32} />,
      title: "Temple Hours",
      details: ["Morning: 6:00 AM - 12:30 PM", "Evening: 6:00 PM - 8:30 PM"],
      delay: 0.4
    }
  ];

  return (
    <div className="contact-page">
      {/* Premium Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Connect With Us</h1>
            <p>A spiritual sanctuary where tradition meets divinity. Reach out for Seva bookings, inquiries, or guidance.</p>
            <div className="accent-line"></div>
          </motion.div>
        </div>
      </section>

      <section className="contact-main container">
        <div className="contact-layout">
          {/* Left Column: Info Cards */}
          <div className="contact-info-side">
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: info.delay, duration: 0.6 }}
                  className="glass-card"
                >
                  <div className="card-icon">{info.icon}</div>
                  <div className="card-text">
                    <h3>{info.title}</h3>
                    {info.details.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="social-connect"
            >
              <h3>Follow Us</h3>
              <div className="social-labels">
                <span>Facebook</span>
                <span>Instagram</span>
                <span>YouTube</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-side"
          >
            <div className="form-container">
              <h2>Send us a Message</h2>
              <form className="premium-form">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="email@example.com" required />
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <select>
                    <option>General Inquiry</option>
                    <option>Seva Booking</option>
                    <option>Donation Advice</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Message</label>
                  <textarea rows="6" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="premium-btn" onClick={(e) => e.preventDefault()}>
                  SEND MESSAGE <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-width Map Section */}
      <section className="contact-map">
        <div className="map-overlay">
          <div className="container">
            <div className="map-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5399364096425!2d75.0442762!3d12.872964399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a6896587d90b%3A0xd6553478c44df52b!2sShree%20Veera%20Vittal%20Venkataramana%20Temple!5e0!3m2!1sen!2sin!4v1774009026922!5m2!1sen!2sin" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
