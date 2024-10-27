import React from 'react';
import { motion } from 'framer-motion';

function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full"
      />
    </div>
  );
}

export default Loading;