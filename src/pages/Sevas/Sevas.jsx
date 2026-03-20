import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';
import './Sevas.css';

const Sevas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sevaCategories = [
    {
      title: "Sri Veera Vittala Venkataramana Sevas",
      sevas: [
        { name: "Karthika Deepotsava", price: "5000" },
        { name: "Maha Pooja", price: "1500" },
        { name: "Alankara Pooja", price: "750" },
        { name: "Panchamrutha Abhisheka", price: "250" },
        { name: "Kasturi Tilaka", price: "100" }
      ]
    },
    {
      title: "Sri Mahamaya Sevas",
      sevas: [
        { name: "Chandika Homa", price: "10000" },
        { name: "Kumkumarchana", price: "50" },
        { name: "Sahasranama Archana", price: "150" },
        { name: "Navratri Special Pooja", price: "2000" }
      ]
    },
    {
      title: "General Sevas",
      sevas: [
        { name: "Shashwatha Seva", price: "10000" },
        { name: "Vahana Pooja", price: "300" },
        { name: "Namakarana", price: "500" }
      ]
    }
  ];

  const filteredCategories = sevaCategories.map(cat => ({
    ...cat,
    sevas: cat.sevas.filter(seva => 
      seva.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.sevas.length > 0);

  return (
    <div className="sevas-page">
      <section className="sevas-header container">
        <h1>Sacred Seva Services</h1>
        <p>Offer your devotion through our various religious services and poojas.</p>
        <div className="accent-line"></div>
        
        <div className="search-container">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="Search for a Seva..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="sevas-list container">
        {filteredCategories.map((category, idx) => (
          <div key={idx} className="seva-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="seva-grid">
              {category.sevas.map((seva, sIdx) => (
                <motion.div 
                  key={sIdx}
                  className="seva-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="seva-info">
                    <h3>{seva.name}</h3>
                    <p className="price">₹ {seva.price}</p>
                  </div>
                  <button className="book-btn">
                    Details <ChevronRight size={18} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="donation-info container">
        <div className="donation-card">
          <h2>General Donations</h2>
          <p>Support the temple's maintenance and social activities through your generous contributions.</p>
          <div className="bank-details">
            <p><strong>Bank:</strong> Canara Bank, Panemangalore</p>
            <p><strong>A/C Name:</strong> Sri Veera Vittala Venkataramana Swamy Temple Trust</p>
            <p><strong>A/C No:</strong> 1234567890123</p>
            <p><strong>IFSC:</strong> CNRB0001234</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sevas;
