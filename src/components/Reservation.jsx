import React from 'react';
import { motion } from 'framer-motion';

export default function Reservation() {
  return (
    <section id="reservation" className="py-24 bg-dark">
      <div className="max-w-xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Reserve sua Mesa
        </motion.h2>
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Nome"
            className="w-full p-2 rounded bg-black text-light placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-black text-light placeholder-gray-500"
          />
          <input
            type="date"
            className="w-full p-2 rounded bg-black text-light"
          />
          <button
            type="submit"
            className="w-full p-2 bg-red-600 rounded hover:bg-red-700 transition-colors"
          >
            Reservar
          </button>
        </motion.form>
      </div>
    </section>
  );
}
