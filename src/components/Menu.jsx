import React from 'react';
import { motion } from 'framer-motion';

const dishes = [
  { name: 'Sashimi Especial', description: 'Fatias finas de peixe fresco', image: '/images/dish1.png' },
  { name: 'Sushi Premium', description: 'Sele\u00e7\u00e3o dos melhores sushis', image: '/images/dish2.png' },
  { name: 'Tempur\u00e1 de Camar\u00e3o', description: 'Croc\u00e2ncia perfeita', image: '/images/dish3.png' },
  { name: 'Uramaki Especial', description: 'Recheios exclusivos', image: '/images/dish4.png' },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-dark">
      <h2 className="text-4xl font-bold text-center mb-12">Card\u00e1pio</h2>
      <div className="space-y-16">
        {dishes.map((dish, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start md:space-x-8 ${index % 2 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: index % 2 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={dish.image} alt={dish.name} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
            <div className="mt-4 md:mt-0">
              <h3 className="text-2xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-300">{dish.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
