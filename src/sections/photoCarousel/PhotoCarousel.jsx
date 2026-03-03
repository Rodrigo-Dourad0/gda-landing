
import React, { useState, useEffect } from 'react';
import './photoCarousel.css';


import img1 from '../../assets/images/carousel1.jpg';
import img2 from '../../assets/images/carousel2.jpg';
import img3 from '../../assets/images/carousel3.jpg';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="photo-carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="carousel-overlay"></div>
        </div>
      ))}
      
      {/* Indicadores (pontinhos) */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default PhotoCarousel;