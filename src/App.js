import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Guitar from './components/Guitar';
import Vocals from './components/Vocals';
import Piano from './components/Piano';
import Gallery from './components/Gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guitar" element={<Guitar />} />
            <Route path="/vocals" element={<Vocals />} />
            <Route path="/piano" element={<Piano />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;