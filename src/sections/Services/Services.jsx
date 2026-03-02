
import React from 'react';
import './services.css';

import imgCorrida from '../../assets/images/corrida.jpg';
import imgFuncional from '../../assets/images/funcional.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Corrida de Rua',
    description: 'Planilhas personalizadas para iniciantes e avançados. Melhore seu pace, técnica e resistência com acompanhamento constante.',
    image: imgCorrida 
  },
  {
    id: 2,
    title: 'Treinamento Funcional',
    description: 'Treinos dinâmicos para ganhar força, mobilidade e condicionamento físico. Prepare seu corpo para o dia a dia e evite lesões.',
    image: imgFuncional 
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        
        <div className="services-header">
          <h2>Nossas <span className="text-highlight">Modalidades</span></h2>
          <p>Escolha o treino ideal para o seu objetivo.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {/* Link direto para o WhatsApp */}
                <a 
                  href="https://wa.me/557481376806?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20GDA." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Saiba mais &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;