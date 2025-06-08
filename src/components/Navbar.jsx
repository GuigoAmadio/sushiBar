import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-8 py-4 bg-black bg-opacity-50 backdrop-blur-sm fixed w-full z-10 top-0">
      <Link to="/" className="text-light hover:text-red-500 transition-colors">Início</Link>
      <Link to="/reservar" className="text-light hover:text-red-500 transition-colors">Reservar</Link>
    </nav>
  );
}
