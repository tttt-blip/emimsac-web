// src/components/FloatingCTA/FloatingCTA.jsx
import React from 'react';
import { FiMessageSquare, FiPhone } from 'react-icons/fi';
import '../styles/floatingCTA.css';

const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <a 
        href="https://wa.me/51926536417?text=Me%20gustar%C3%ADa%20contratar%20sus%20servicios" 
        className="cta-button phone"
        aria-label="Llamar"
        role="button"
        tabIndex="0"
      >
        <FiPhone className="cta-icon" />
      </a>
      <a 
        href="#contacto" 
        className="cta-button chat"
        aria-label="Enviar mensaje"
        role="button"
        tabIndex="0"
      >
        <FiMessageSquare className="cta-icon" />
      </a>
    </div>
  );
};

export default FloatingCTA;