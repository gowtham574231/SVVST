import React from 'react';
import '../About/About.css';
import './Calendar.css';
import calendar1 from '../../assets/calendar1.jpg';
import calendar2 from '../../assets/calendar2.jpg';

const Calendar = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="container">
          <h1>Temple Calendar</h1>
          <p className="hero-subtitle">Yearly Events & Festivals (2026-27)</p>
          <div className="accent-line"></div>
        </div>
      </header>

      <div className="container" style={{ padding: '4rem 0' }}>


        <div className="calendar-images-container">
          <div className="calendar-image-wrapper">
            <a href={calendar1} target="_blank" rel="noopener noreferrer">
              <img src={calendar1} alt="Temple Calendar 2026-27 Page 1" className="calendar-full-image" title="Click to view full size" />
            </a>
          </div>
          <div className="calendar-image-wrapper">
            <a href={calendar2} target="_blank" rel="noopener noreferrer">
              <img src={calendar2} alt="Temple Calendar 2026-27 Page 2" className="calendar-full-image" title="Click to view full size" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
