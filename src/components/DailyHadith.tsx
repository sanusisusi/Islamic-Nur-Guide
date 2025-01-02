import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookHeart } from 'lucide-react';
import { HadithCard } from './hadith/HadithCard';

const hadiths = [
  {
    arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
    text: "The best among you is the one who learns the Quran and teaches it.",
    narrator: "Sahih Al-Bukhari"
  },
  {
    arabic: 'الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ',
    text: "Paradise lies at the feet of your mother.",
    narrator: "Sunan an-Nasa'i"
  },
  {
    arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
    text: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
    narrator: "Sahih Al-Bukhari"
  }
];

export const DailyHadith: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hadiths.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      id="hadith"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
    >
      <div className="flex items-center mb-4">
        <BookHeart className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Hadith of the Day</h2>
      </div>
      
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <HadithCard
            key={currentIndex}
            arabic={hadiths[currentIndex].arabic}
            text={hadiths[currentIndex].text}
            narrator={hadiths[currentIndex].narrator}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
};