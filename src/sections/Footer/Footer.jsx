import React from 'react';
import './Footer.css';

// Importando a logo
import logoGda from '../../assets/images/logo-gda.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Lado Esquerdo: Logo + Nome + Slogan */}
        <div className="footer-brand">
          
          {/* 1. A Imagem da Logo */}
          <img src={logoGda} alt="GDA Logo" className="footer-logo-img" />
          
          {/* 2. O Texto GDA embaixo da imagem */}
          <h2 className="footer-brand-name">GDA</h2>
          
          {/* 3. O Slogan */}
          <p className="footer-slogan">Transformando vidas através do movimento.</p>
        </div>

        {/* Lado Direito: Redes Sociais */}
        <div className="footer-social">
          <h3>Siga-nos</h3>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/gdaassessoria/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram
            </a>
            <a 
              href="https://wa.me/557481376806" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GDA Assessoria Esportiva.</p>
      </div>
    </footer>
  );
};

export default Footer;