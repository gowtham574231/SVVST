import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      submenu: [
        { name: 'History', path: '/about' },
        { name: 'Calendar', path: '/calendar' },
        { name: 'Festival', path: '/festivals' }
      ]
    },
    { name: 'Sevas', path: '/sevas' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <Landmark size={32} className="logo-icon" />
          <div className="logo-text">
            <span>Sri Veera Vittala Venkataramana Swamy</span>
            <span>Temple</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu-desktop">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="nav-item-wrapper"
              onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path || (link.submenu?.some(sub => location.pathname === sub.path)) ? 'active' : ''}`}
              >
                {link.name}
                {link.submenu && <ChevronDown size={16} className="dropdown-icon" />}
              </Link>

              {link.submenu && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, y: 10, x: "-50%" }}
                      className="dropdown-menu"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`dropdown-item ${location.pathname === sub.path ? 'active' : ''}`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="navbar-menu-mobile"
            >
              {navLinks.map((link) => (
                <div key={link.name} className="mobile-nav-item">
                  <Link
                    to={link.path}
                    onClick={() => !link.submenu && setIsOpen(false)}
                    className={`nav-link-mobile ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="mobile-submenu">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className={`mobile-submenu-item ${location.pathname === sub.path ? 'active' : ''}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
