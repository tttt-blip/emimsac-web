// src/components/Navigation/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import logo from '../assets/LOGO.png';
import '../styles/navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Actualizar sección activa
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if(window.scrollY >= sectionTop) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <Link 
          to="inicio" 
          smooth={true} 
          duration={800} 
          className="logo-link"
          onClick={handleLinkClick}
        >
          <img 
            src={logo}
            alt="Industrial Solutions" 
            className="logo-img" 
          />
        </Link>

        <button 
          className="menu-toggle"
          onClick={handleMenuToggle}
          aria-label="Menú de navegación"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="servicios" 
            smooth={true} 
            duration={800} 
            offset={-80}
            className={activeSection === 'servicios' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Servicios
          </Link>
          <Link 
            to="proyectos" 
            smooth={true} 
            duration={800} 
            offset={-80}
            className={activeSection === 'proyectos' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Proyectos
          </Link>
          <Link 
            to="experiencia" 
            smooth={true} 
            duration={800} 
            offset={-80}
            className={activeSection === 'proceso' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Experiencia
          </Link>
          <Link 
            to="contacto" 
            smooth={true} 
            duration={800} 
            offset={-80}
            className={activeSection === 'contacto' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Contacto
          </Link>
        </div>

        
      </div>
    </nav>
  );
};

export default Navigation;