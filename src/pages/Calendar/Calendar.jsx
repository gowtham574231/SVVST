import React from 'react';
import '../About/About.css'; // Corrected path

const Calendar = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="container">
          <h1>Temple Calendar</h1>
          <p className="hero-subtitle">Upcoming Events & Important Dates</p>
          <div className="accent-line"></div>
        </div>
      </header>
      <div className="history-article container">
        <section className="history-row">
          <div className="side-point">
            <h3>Yearly Calendar</h3>
          </div>
          <div className="para-content">
            <p>The temple's calendar is based on the traditional lunar calendar. Major events include Rathotsava, Lakshadipotsava, and various monthly Sankashti and Ekadashi poojas.</p>
            <p><em>Calendar details will be updated soon with specific dates for the current year.</em></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Calendar;
