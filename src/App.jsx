import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-dark text-light">
      <Hero />
      <Menu />
      <About />
      <Reservation />
    </div>
  );
}
