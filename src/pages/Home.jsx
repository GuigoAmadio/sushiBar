import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Menu />
      <About />
    </div>
  );
}
