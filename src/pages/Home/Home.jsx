import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Bell, ShieldCheck } from 'lucide-react';
import './Home.css';

// Import images
import heroImage from '../../assets/temple_hero_light.png';
import welcomeDeity from '../../assets/welcome_deity.png';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content container"
        >
          <span className="hero-subtitle">SVVST PANEMANGALORE</span>
          <h1 className="hero-title">Sri Veera Vittala Venkataramana Swamy Temple</h1>
          <p className="hero-description">
            A spiritual sanctuary where tradition meets divinity. Experience the peace and heritage of Panemangalore's historic temple.
          </p>
          <div className="hero-buttons">
            <a href="/sevas" className="btn btn-primary">Seva Services</a>
            <a href="/about" className="btn btn-secondary">Learn More</a>
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="welcome-section container"
      >
        <div className="section-header">
          <h2>SVVST PANEMANGALORE</h2>
          <h1>SRI VEERA VITTALA VENKATARAMANA SWAMY <br /> TEMPLE</h1>
          <div className="accent-line"></div>
        </div>
        <div className="welcome-grid">
          <div className="welcome-image">
            <img src={welcomeDeity} alt="Sri Veera Vittala Venkataramana" />
          </div>
          <div className="welcome-text">
            <p>
              Panemangalore, a serene village on the banks of the river Netravati, is home to a community deeply rooted in spiritual traditions. At its heart lies the Sri Veera Vittala Venkataramana Swamy Temple, a sacred sanctuary whose history traces back nearly two centuries.
            </p>
            <p className="welcome-para-extra">
              Founded in 1825 A.D., the temple stands as a testament to the undaunted spirit and devotion of the G.S.B. community. From surviving the Great Flood of 1923 to flourishing as a center of culture and knowledge, the temple continues to be a beacon of divine grace and prosperity.
            </p>
            <a href="/about" className="btn btn-primary welcome-btn">OUR FULL HISTORY</a>
          </div>
        </div>
      </motion.section>

      {/* Timings Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="timings-wrapper"
      >
        <div className="timings-section container">
          <div className="section-header">
            <h2>Darshan & Pooja Timings</h2>
            <div className="accent-line"></div>
          </div>
          <div className="timings-grid">
            <div className="timing-card">
              <Clock className="timing-icon" />
              <h3>Morning</h3>
              <p>06:00 AM - 12:30 PM</p>
            </div>
            <div className="timing-card highlight">
              <Bell className="timing-icon" />
              <h3>Maha Pooja</h3>
              <p>12:00 PM (Afternoon)</p>
            </div>
            <div className="timing-card">
              <Clock className="timing-icon" />
              <h3>Evening</h3>
              <p>06:00 PM - 08:30 PM</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <section className="highlights-wrapper">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-item">
              <Calendar className="highlight-icon" />
              <div className="highlight-content">
                <h3>Upcoming Festivals</h3>
                <p>Join us for the upcoming Rathotsava and special Deepotsava celebrations.</p>
              </div>
            </div>
            <div className="highlight-item">
              <ShieldCheck className="highlight-icon" />
              <div className="highlight-content">
                <h3>Sacred Traditions</h3>
                <p>Preserving centuries-old rituals and Vedic practices with utmost devotion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
