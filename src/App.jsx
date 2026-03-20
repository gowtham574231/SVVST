import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Deities from './pages/Deities/Deities';
import Sevas from './pages/Sevas/Sevas';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Calendar from './pages/Calendar/Calendar';
import Festivals from './pages/Festivals/Festivals';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/deities" element={<Deities />} />
            <Route path="/sevas" element={<Sevas />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
