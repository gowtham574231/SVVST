import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

// Import images
import aboutTemple from '../../assets/about_temple.png';
import hero from '../../assets/hero.png';
import templeAboutHero from '../../assets/temple_about_hero.png';
import templeFest from '../../assets/temple_fest.png';
import templeHeroLight from '../../assets/temple_hero_light.png';
import templeInner from '../../assets/temple_inner.png';
import welcomeDeity from '../../assets/welcome_deity.png';

const Gallery = () => {
  const images = [
    aboutTemple,
    hero,
    templeAboutHero,
    templeFest,
    templeHeroLight,
    templeInner,
    welcomeDeity
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
