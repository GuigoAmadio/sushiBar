import React from 'react';
import { motion } from 'framer-motion';

const salmonPieces = [
  '/images/salmon1.png',
  '/images/salmon2.png',
  '/images/salmon3.png',
];

const lemonZest = [
  { src: '/images/lemon1.png', x: -60, y: -40 },
  { src: '/images/lemon2.png', x: 40, y: -50 },
  { src: '/images/lemon3.png', x: -20, y: -70 },
];


export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-dark to-black">
      {salmonPieces.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt="salmon piece"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1, rotate: 360 }}
          transition={{ delay: index * 0.3, duration: 1 }}
          className="absolute w-20 h-20 object-cover"
          style={{ top: `${index * 20}px` }}
        />
      ))}
      {lemonZest.map((zest, index) => (
        <motion.img
          key={`zest-${index}`}
          src={zest.src}
          alt="lemon zest"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{ x: zest.x, y: zest.y, opacity: 1, scale: 1, rotate: 360 }}
          transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
          className="absolute w-8 h-8 object-cover"
          style={{ top: '50%', left: '50%' }}
        />
      ))}
      <motion.img
        src="/images/plate.png"
        alt="plate"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        className="w-64 h-64 object-contain mt-20"
      />
      <motion.h1
        className="text-5xl font-bold mt-8 text-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Bem-vindo ao Sushi Bar
      </motion.h1>
    </section>
  );
}
