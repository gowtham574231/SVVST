import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1544013919-450bc9d0bc6b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1590059536098-b80c102bd935?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1582510003544-2d0956654591?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1561059488-916d69792237?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-header container">
        <h1>Temple Gallery</h1>
        <p>Glimpses of the divine architecture and sacred celebrations.</p>
        <div className="accent-line"></div>
      </section>

      <section className="gallery-grid container">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={img} alt={`Gallery ${idx + 1}`} />
            <div className="gallery-overlay">
              <span>View Image</span>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
