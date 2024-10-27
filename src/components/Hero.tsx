import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-10">
        <iframe
          src="https://my.spline.design/clonercubesgenerativecopy-cb51bed8bab663d076e7b8a54d3ac55b/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        ></iframe>
        {/* Masque pour cacher complètement le badge et afficher "aetrad" */}
        <div className="spline-badge-mask flex items-center justify-center text-white font-bold">
          aetrad
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 text-center"
      >
        <h1 className="text-6xl font-bold mb-4 gradient-text">
          El Abbouti Abdelhilah
        </h1>
        <p className="text-xl text-gray-400">
          Développeur Full Stack & Créateur de Solutions B2B
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
