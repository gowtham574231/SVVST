import React from 'react';
import '../About/About.css'; // Corrected path

const Festivals = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="container">
          <h1>Major Festivals</h1>
          <p className="hero-subtitle">Celebrating Our Divine Traditions</p>
          <div className="accent-line"></div>
        </div>
      </header>
      <div className="history-article container">
        <section className="history-row">
          <div className="side-point">
            <h3>Lakshadipotsava</h3>
          </div>
          <div className="para-content">
            <p>The festival of lights, celebrated on Kartika Suddha Hunnime, where thousands of lamps illuminate the temple grounds.</p>
          </div>
        </section>
        <section className="history-row">
          <div className="side-point">
            <h3>Rathotsava</h3>
          </div>
          <div className="para-content">
            <p>The annual chariot festival, a grand celebration involving the entire community and surrounding villages.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Festivals;
