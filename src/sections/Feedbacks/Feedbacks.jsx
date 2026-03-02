
import React from 'react';
import './Feedbacks.css';


import feedbackImg1 from '../../assets/images/feedback1.jpeg';
import feedbackImg2 from '../../assets/images/feedback2.jpeg';
import feedbackImg3 from '../../assets/images/feedback3.jpeg';

const feedbacksData = [
  {
    id: 1,
    image: feedbackImg1, // Variável importada acima
    alt: 'Feedback aluno 1'
  },
  {
    id: 2,
    image: feedbackImg2, // Variável importada acima
    alt: 'Feedback aluno 2'
  },
  {
    id: 3,
    image: feedbackImg3, // Variável importada acima
    alt: 'Feedback aluno 3'
  }
];

const Feedbacks = () => {
  return (
    <section className="feedbacks-section" id="feedbacks">
      <div className="container">
        
        <div className="feedbacks-header">
          <h2>Quem treina, <span className="text-highlight">aprova</span></h2>
          <p>Resultados reais de alunos que transformaram sua rotina com a GDA.</p>
        </div>

        <div className="feedbacks-grid">
          {feedbacksData.map((item) => (
            <div key={item.id} className="feedback-card">
              {/* A imagem vai preencher o card mantendo a proporção */}
              <img src={item.image} alt={item.alt} />
              <div className="feedback-overlay"></div>
            </div>
          ))}
        </div>

        <div className="feedbacks-cta">
          <a 
            href="https://wa.me/557481376806?text=Ol%C3%A1!%20Vi%20os%20resultados%20no%20site%20e%20quero%20saber%20mais." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Quero ter resultados assim
          </a>
        </div>

      </div>
    </section>
  );
};

export default Feedbacks;