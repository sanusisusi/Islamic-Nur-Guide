import React from 'react';
import { motion } from 'framer-motion';
import { DailyActs } from './DailyActs';
import { ProhibitedActs } from './ProhibitedActs';

export const RamadanGuidelines: React.FC = () => {
  return (
    <motion.div
      id="guidelines"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Ramadan Guidelines
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <DailyActs />
        <ProhibitedActs />
      </div>
    </motion.div>
  );
};