import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface Verse {
  arabic: string;
  translation: string;
  reference: string;
}

export const VerseCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [verses] = useState<Verse[]>([
    {
      arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ',
      translation: 'O you who believe! Fasting is prescribed for you',
      reference: 'Al-Baqarah 2:183'
    },
    {
      arabic: 'شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ',
      translation: 'The month of Ramadan in which was revealed the Quran',
      reference: 'Al-Baqarah 2:185'
    },
    {
      arabic: 'وَكُلُوا وَاشْرَبُوا حَتَّىٰ يَتَبَيَّنَ لَكُمُ الْخَيْطُ الْأَبْيَضُ',
      translation: 'And eat and drink until the white thread becomes distinct to you from the black thread',
      reference: 'Al-Baqarah 2:187'
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % verses.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [verses.length]);

  return (
    <motion.div
      id="verses"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
    >
      <div className="flex items-center mb-4">
        <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Daily Verses</h2>
      </div>
      
      <div className="relative h-[200px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <p className="text-2xl font-arabic leading-loose text-gray-800 dark:text-white mb-4">
              {verses[currentIndex].arabic}
            </p>
            <p className="text-gray-600 dark:text-gray-300 italic mb-2">
              {verses[currentIndex].translation}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {verses[currentIndex].reference}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};