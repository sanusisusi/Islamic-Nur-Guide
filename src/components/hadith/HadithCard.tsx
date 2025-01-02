import React from 'react';
import { motion } from 'framer-motion';

interface HadithCardProps {
  arabic: string;
  text: string;
  narrator: string;
}

export const HadithCard: React.FC<HadithCardProps> = ({ arabic, text, narrator }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="space-y-4"
  >
    <p className="text-2xl font-arabic text-right text-gray-800 dark:text-white mb-4">
      {arabic}
    </p>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {text}
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-400">
      Narrated by: {narrator}
    </p>
  </motion.div>
);