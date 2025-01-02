import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredNames = [
  { number: 1, arabic: 'ٱللَّٰه', transliteration: 'Allah', meaning: 'The Greatest Name' },
  { number: 2, arabic: 'ٱلرَّحْمَٰن', transliteration: 'Ar-Rahman', meaning: 'The Most Gracious' },
  { number: 3, arabic: 'ٱلرَّحِيم', transliteration: 'Ar-Raheem', meaning: 'The Most Merciful' },
];

export const FeaturedNames: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Heart className="w-6 h-6 text-rose-600 dark:text-rose-400 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Names of Allah</h2>
        </div>
        <Link 
          to="/names"
          className="flex items-center text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {featuredNames.map((name) => (
          <motion.div
            key={name.number}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800"
          >
            <div className="text-center">
              <span className="inline-block w-8 h-8 rounded-full bg-rose-200 dark:bg-rose-800 text-rose-800 dark:text-rose-200 text-sm flex items-center justify-center mb-2">
                {name.number}
              </span>
              <h3 className="text-2xl font-arabic mb-2">{name.arabic}</h3>
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {name.transliteration}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {name.meaning}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};