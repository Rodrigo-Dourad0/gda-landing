
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Feedbacks from './sections/Feedbacks/Feedbacks';
import Footer from './sections/Footer/Footer';

function App() {
  

  return (
    <div className="app-container">
       
        <div className="reveal"><Hero/></div>
        <div className="reveal"><About/></div>
        <div className="reveal"><Services/></div>
        <div className="reveal"><Feedbacks/></div>
        <Footer/> 
    </div>
  );
}

export default App;