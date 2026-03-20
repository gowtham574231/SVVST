import React from 'react';
import { motion } from 'framer-motion';
import './Deities.css';

const Deities = () => {
  const deities = [
    {
      name: "Sri Veera Vittala Venkataramana",
      description: "The presiding deity of the temple, an avatar of Lord Vishnu, known as the 'Lord of the Seven Hills'. The idol is beautifully adorned with gold ornaments and exudes divine grace.",
      spiritual: "Worshipped for prosperity, protection, and spiritual liberation.",
      image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Sri Mahamaya",
      description: "The divine feminine energy, worshipped with deep devotion. She represents the creative power of the universe and offers protection to all her children.",
      spiritual: "Invoke her blessings for strength, wisdom, and inner peace.",
      image: "https://images.unsplash.com/photo-1590059536098-b80c102bd935?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Sri Lakshmi Narasimha",
      description: "The half-man, half-lion incarnation of Lord Vishnu, seen in a graceful posture with Goddess Lakshmi. A symbol of divine protection and fearlessness.",
      spiritual: "Worshipped to overcome obstacles and remove negativity.",
      image: "https://images.unsplash.com/photo-1582510003544-2d0956654591?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="deities-page">
      <section className="deities-header container">
        <h1>Divine Deities</h1>
        <p>Explore the sacred forms of the Almighty presiding at our temple.</p>
        <div className="accent-line"></div>
      </section>

      <section className="deities-list container">
        {deities.map((deity, index) => (
          <motion.div 
            key={deity.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`deity-card ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div className="deity-image">
              <img src={deity.image} alt={deity.name} />
              <div className="img-overlay"></div>
            </div>
            <div className="deity-info">
              <h2>{deity.name}</h2>
              <p className="description">{deity.description}</p>
              <div className="spiritual-insight">
                <h4>Spiritual Insight</h4>
                <p>{deity.spiritual}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Deities;
