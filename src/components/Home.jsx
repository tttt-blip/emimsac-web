import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { FiChevronRight, FiClock, FiSettings, FiUsers, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/home.css'
import cliente from '../assets/cliente1.webp';
import cliente2 from '../assets/cliente2.avif';
import cliente3 from '../assets/cliente3.jpg';
import cliente4 from '../assets/cliente4.jpg';
import cliente5 from '../assets/cliente5.png';
import cliente6 from '../assets/cliente6.jpg';
import cliente7 from '../assets/cliente7.avif';
import cliente8 from '../assets/cliente8.jpg';

import proyecto1 from '../assets/proyecto-1.jpg';
import proyecto2 from '../assets/proyecto-2.jpg';
import proyecto3 from '../assets/proyecto-3.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad'
    });
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <main className="home-container">
      
      {/* Sección Hero */}
      <section id="inicio" className="hero-section" data-aos="fade">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 data-aos="fade-up" data-aos-delay="200">
              <span>EMPRESA DE INGENIERIA Y MONTAJE S.A.C</span>

            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Líder en fabricación de productos metálicos estructurales en Perú, ofreciendo soluciones innovadoras y de alta calidad para la industria de la construcción.
            </p>
            <div className="cta-container" data-aos="fade-up" data-aos-delay="600">
              <a href="#contacto" className="cta-primary">
                Comunicate con Nosotros
              </a>
              <a href="#servicios" className="cta-secondary">
                Nuestros Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Clientes */}
      <section id='experiencia' className="clients-section">
        <div className="section-header">
          <h3>Confían en nuestra experiencia</h3>
          <div className="client-logos">
              <img 
                src={cliente} 
                loading="lazy"
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <img 
                src={cliente2} 
                loading="lazy"
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <img 
                src={cliente3} 
                loading="lazy"
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <img 
                src={cliente4} 
                loading="lazy"
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <img 
                src={cliente5} 
                loading="lazy"
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <img 
                src={cliente6} 
                loading="lazy"
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <img 
                src={cliente7} 
                loading="lazy"
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <img 
                src={cliente8} 
                loading="lazy"
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="services-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Servicios Especializados</h2>
          <p>Soluciones técnicas para producción industrial</p>
        </div>
        
        <div className="services-grid">
          {[
            { 
              icon: <FiSettings />,
              title: "Automatización",
              description: "Sistemas de control industrial integrados"
            },
            {
              icon: <FiUsers />,
              title: "Consultoría",
              description: "Optimización de procesos productivos"
            },
            {
              icon: <FiClock />,
              title: "Mantenimiento",
              description: "Planes preventivos y predictivos"
            }
          ].map((service, i) => (
            <div 
              key={i}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={i*150}
            >
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contacto" className="service-cta">
                Más detalles <FiChevronRight />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="projects-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Proyectos Recientes</h2>
          <p>Implementaciones tecnológicas destacadas</p>
        </div>

        <Slider {...carouselSettings} className="projects-carousel">
          {/* Proyecto 1 */}
            <div  className="project-card" data-aos="zoom-in">
              <div className="image-container">
                <img 
                  src={proyecto1} 
                  alt="Proyecto Industrial 1" 
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <h3>Proyecto Industria 4.0 #1</h3>
                <div className="tech-tags">
                  <span>IoT</span>
                  <span>Automatización</span>
                  <span>Robótica</span>
                </div>
                <button className="project-cta">
                  Ver Detalles <FiChevronRight />
                </button>
              </div>
            </div>
          {/* Proyecto 2 */}
          <div  className="project-card" data-aos="zoom-in">
              <div className="image-container">
                <img 
                  src={proyecto2}
                  alt="Proyecto Industrial 2" 
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <h3>Proyecto Industria 4.0 #2</h3>
                <div className="tech-tags">
                  <span>IoT</span>
                  <span>Automatización</span>
                  <span>Robótica</span>
                </div>
                <button className="project-cta">
                  Ver Detalles <FiChevronRight />
                </button>
              </div>
            </div>
                  {/* Proyecto 3 */}
          <div  className="project-card" data-aos="zoom-in">
              <div className="image-container">
                <img 
                  src={proyecto3}
                  alt='Proyecto Industrial 3'
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <h3>Proyecto Industria 4.0 #3</h3>
                <div className="tech-tags">
                  <span>IoT</span>
                  <span>Automatización</span>
                  <span>Robótica</span>
                </div>
                <button className="project-cta">
                  Ver Detalles <FiChevronRight />
                </button>
              </div>
            </div>
            {/* Proyecto 4 */}
            <div  className="project-card" data-aos="zoom-in">
              <div className="image-container">
                <img 
                  src={proyecto1} 
                  alt="Proyecto Industrial 1" 
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <h3>Proyecto Industria 4.0 #4</h3>
                <div className="tech-tags">
                  <span>IoT</span>
                  <span>Automatización</span>
                  <span>Robótica</span>
                </div>
                <button className="project-cta">
                  Ver Detalles <FiChevronRight />
                </button>
              </div>
            </div>
          {/* Proyecto 5 */}
          <div  className="project-card" data-aos="zoom-in">
              <div className="image-container">
                <img 
                  src={proyecto2}
                  alt="Proyecto Industrial 2" 
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <h3>Proyecto Industria 4.0 #5</h3>
                <div className="tech-tags">
                  <span>IoT</span>
                  <span>Automatización</span>
                  <span>Robótica</span>
                </div>
                <button className="project-cta">
                  Ver Detalles <FiChevronRight />
                </button>
              </div>
            </div>
                  {/* Proyecto 6 */}
          <div  className="project-card" data-aos="zoom-in">
              <div className="image-container">
                <img 
                  src={proyecto3}
                  alt='Proyecto Industrial 3'
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <h3>Proyecto Industria 4.0 #6</h3>
                <div className="tech-tags">
                  <span>IoT</span>
                  <span>Automatización</span>
                  <span>Robótica</span>
                </div>
                <button className="project-cta">
                  Ver Detalles <FiChevronRight />
                </button>
              </div>
            </div>
            
        </Slider>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-info" data-aos="fade-right">
            <h2>Contacto Industrial</h2>
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div>
                <h4>Ubicación</h4>
                <p>Parque Industrial Tecnológico, Nave 12</p>
              </div>
            </div>
            <div className="info-item">
              <FiClock className="info-icon" />
              <div>
                <h4>Horario</h4>
                <p>Lun-Vie: 7:00 - 19:00</p>
              </div>
            </div>
            <div className="info-item">
              <FiMail className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:contacto@industrial.com">EMIMSAC@industrial.com</a>
              </div>
            </div>
            <div className="info-item">
              <FiPhone className="info-icon" />
              <div>
                <h4>Teléfono</h4>
                <a href="tel:+34987654321">+34 987 654 321</a>
              </div>
            </div>
          </div>

          <form className="contact-form" data-aos="fade-left">
            <div className="form-group">
              <input type="text" placeholder="Nombre Completo" required />
              <input type="email" placeholder="Correo Electrónico" required />
            </div>
            <textarea placeholder="Describa su proyecto industrial..." rows="5" required></textarea>
            <button type="submit" className="submit-button">
              Enviar Consulta Técnica
            </button>
          </form>
        </div>
      </section>

      
    </main>
  );
};

export default Home;