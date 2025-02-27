// src/App.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from "./components/Navigation";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-out-quad'
    });
  }, []);

  return (
    <div className="app-container">
     
        
        {/* Botones de acción flotantes */}
        <Navigation />   
        <Home/>     
        <FloatingCTA />

        <Footer />
        <SpeedInsights/>
    </div>
  );
}

export default App;
