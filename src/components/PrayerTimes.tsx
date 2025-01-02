import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { fetchPrayerTimes } from '../services/prayerService';
import { getUserLocation } from '../utils/location';

export const PrayerTimes: React.FC = () => {
  const [times, setTimes] = useState([]);
  const [currentPrayer, setCurrentPrayer] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrayerTimes = async () => {
      try {
        const position = await getUserLocation();
        const { latitude, longitude } = position.coords;
        const prayerTimes = await fetchPrayerTimes(latitude, longitude);
        
        // Convert to array format
        const timesArray = Object.entries(prayerTimes).map(([name, time]) => ({
          name: name.charAt(0).toUpperCase() + name.slice(1),
          time
        }));
        
        setTimes(timesArray);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
        setLoading(false);
      }
    };

    getPrayerTimes();
  }, []);

  return (
    <motion.div
      id="prayer-times"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
    >
      <div className="flex items-center mb-4">
        <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Prayer Times</h2>
      </div>
      
      {loading ? (
        <div className="text-center py-4">Loading prayer times...</div>
      ) : (
        <div className="grid gap-4">
          {times.map((prayer) => (
            <motion.div
              key={prayer.name}
              whileHover={{ scale: 1.02 }}
              className={`flex justify-between items-center p-4 rounded-lg ${
                currentPrayer === prayer.name
                  ? 'bg-emerald-100 dark:bg-emerald-900 border-l-4 border-emerald-500'
                  : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              <span className="font-medium text-gray-700 dark:text-gray-200">{prayer.name}</span>
              <span className="text-gray-600 dark:text-gray-300">{prayer.time}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};