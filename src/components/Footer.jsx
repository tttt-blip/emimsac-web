// src/components/Footer/Footer.jsx
import React from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-scroll';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>EMIMSAC(EMPRESA DE INGENIERIA Y MONTAJE S.A.C)</h4>
          <p>Expertos en ingeniería industrial avanzada con más de 15 años de experiencia.</p>
          <div className="contact-info">
            <div className="contact-item">
              <FiMapPin />
              <span>LEJOS</span>
            </div>
            <div className="contact-item">
              <FiMail />
              <a href="mailto:contacto@industrial.com">EMIMSAC@industrial.com</a>
            </div>
            <div className="contact-item">
              <FiPhone />
              <a href="tel:+123456789">+1 (234) 567-89</a>
            </div>
          </div>
        </div>

        <div className="footer-section links">
          <h4>Enlaces Rápidos</h4>
          <Link to="servicios" smooth={true}>Servicios</Link>
          <Link to="proyectos" smooth={true}>Proyectos</Link>
          <Link to="proceso" smooth={true}>Metodología</Link>
          <Link to="contacto" smooth={true}>Contacto</Link>
        </div>

        <div className="footer-section social">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://pe.linkedin.com/in/empresa-emimsac-emimsac-2519761ba">LinkedIn</a>
            <a href="https://www.facebook.com/EMIMSAC/?locale=es_LA">Facebook</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 EMIMSAC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
