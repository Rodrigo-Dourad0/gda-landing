// src/sections/About/About.jsx
import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        
        {/* Coluna da Imagem */}
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop" 
            alt="Treinamento Funcional ao ar livre" 
            className="about-img"
          />
          {/* Elemento decorativo verde atrás da foto */}
          <div className="about-decoration"></div>
        </div>

        {/* Coluna do Texto */}
        <div className="about-text">
          <h2 className="section-title">
            Quem é a <span className="text-highlight">GDA?</span>
          </h2>
          
          <p>
            A GDA Assessoria Esportiva nasce com o propósito de oferecer acompanhamento 
            de qualidade para quem busca construir uma rotina ativa, segura e motivadora. 
            Em seu início, a assessoria concentra-se em duas modalidades essenciais — 
            <strong> corrida e treinamento funcional.</strong>
          </p>

          <p>
            Com uma metodologia simples, acessível e focada no aluno, buscamos criar 
            um ambiente de evolução contínua, no qual cada pessoa se sinta acompanhada, 
            orientada e inspirada a alcançar seus melhores resultados, promovendo saúde 
            de forma progressiva.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <h3>+Foco</h3>
              <span>No seu objetivo</span>
            </div>
            <div className="stat-item">
              <h3>+Saúde</h3>
              <span>Longevidade</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;