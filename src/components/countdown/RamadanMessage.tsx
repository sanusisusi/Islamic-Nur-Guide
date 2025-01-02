import React from 'react';
import { motion } from 'framer-motion';

interface RamadanMessageProps {
  type: 'ramadan' | 'eid';
}

export const RamadanMessage: React.FC<RamadanMessageProps> = ({ type }) => {
  const messages = {
    ramadan: {
      arabic: 'رمضان مبارك',
      english: 'Ramadan Mubarak'
    },
    eid: {
      arabic: 'عيد مبارك',
      english: 'Eid Mubarak'
    }
  };

  const message = messages[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-6 text-center"
    >
      <h2 className="text-4xl font-arabic mb-4">{message.arabic}</h2>
      <p className="text-2xl text-gray-800">{message.english}</p>
    </motion.div>
  );
};