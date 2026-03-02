import React from 'react';
import './hero.css';

import logoGda from '../../assets/images/logo-gda.png';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Camada escura para o texto ficar legível */}
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="logo-container">
          <img src={logoGda} alt="GDA Assessoria Esportiva" className="hero-logo" />
        </div>

        <h1>
          Construa uma rotina <span className="highlight">ativa</span>, 
          <span className="highlight"> segura</span> e <span className="highlight">motivadora</span>.
        </h1>
        
        <p className="hero-description">
          A GDA Assessoria Esportiva oferece acompanhamento em 
          <strong> Corrida</strong> e <strong>Treinamento Funcional</strong> para 
          você alcançar seus melhores resultados.
        </p>

        <div className="hero-buttons">
          {/* Botão Principal (Verde) */}
          <a 
            href="https://wa.me/557481376806" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Começar Agora
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;