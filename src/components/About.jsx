import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-dark">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nossa Hist\u00f3ria
        </motion.h2>
        <motion.p
          className="text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Fundado em 2023, o Sushi Bar traz a aut\u00eantica culin\u00e1ria japonesa com um toque contempor\u00e2neo. Nossa miss\u00e3o \u00e9 proporcionar uma experi\u00eancia gastron\u00f4mica inesquec\u00edvel em um ambiente sofisticado.
        </motion.p>
      </div>
    </section>
  );
}
