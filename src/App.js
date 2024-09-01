import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import About_Us from './components/About_Us';
import Contact from './components/Contact';
import ImageSlider from '../src/ImageSlider';

function App() {
  

  return (
    
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<About_Us />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
