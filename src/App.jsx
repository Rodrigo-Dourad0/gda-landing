
import React from 'react';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Feedbacks from './sections/Feedbacks/Feedbacks';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className="app-container">
        <Hero/>
        <About/>
        <Services/>
        <Feedbacks/>
        <Footer/>
    </div>
  );
}

export default App;