import React from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section about">
          <h3>Sri Veera Vittala Venkataramana Swamy Temple</h3>
          <p>A sacred heritage in the heart of Panemangalore, dedicated to Sri Veera Vittala Venkataramana Swamy.</p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Our History</a></li>
            <li><a href="/deities">Main Deities</a></li>
            <li><a href="/sevas">Seva Details</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <MapPin size={20} className="footer-icon" />
            <p>Carstreet, Panemangalore, Bantwal, Karnataka - 574231</p>
          </div>
          <div className="contact-item">
            <Phone size={20} className="footer-icon" />
            <p>+91 1234 567 890</p>
          </div>
          <div className="contact-item">
            <Mail size={20} className="footer-icon" />
            <p>info@svtpanemangalore.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Veera Vittala Venkataramana Swamy Temple, Panemangalore. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
