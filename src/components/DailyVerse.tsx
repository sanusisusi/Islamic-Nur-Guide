import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { RootState } from '../store';

export const DailyVerse: React.FC = () => {
  const { dailyVerse } = useSelector((state: RootState) => state.quranVerses);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
        <BookOpen className="w-6 h-6 text-teal-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Daily Verse</h2>
      </div>
      <div className="space-y-4">
        <p className="text-2xl text-right font-arabic leading-loose text-gray-800">
          {dailyVerse.arabic}
        </p>
        <p className="text-gray-600 italic">{dailyVerse.translation}</p>
        <p className="text-sm text-gray-500">{dailyVerse.reference}</p>
      </div>
    </motion.div>
  );
};