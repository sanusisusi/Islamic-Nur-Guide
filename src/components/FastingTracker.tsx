import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Timer, Sun, Moon } from 'lucide-react';
import { RootState } from '../store';
import { incrementDay } from '../store/slices/fastingTrackerSlice';

export const FastingTracker: React.FC = () => {
  const dispatch = useDispatch();
  const { daysCompleted, totalDays, startTime, endTime } = useSelector(
    (state: RootState) => state.fastingTracker
  );

  useEffect(() => {
    const checkAndIncrementDay = () => {
      const now = new Date();
      const lastUpdate = localStorage.getItem('lastFastingUpdate');
      const today = now.toDateString();

      if (lastUpdate !== today) {
        dispatch(incrementDay());
        localStorage.setItem('lastFastingUpdate', today);
      }
    };

    checkAndIncrementDay();
    const interval = setInterval(checkAndIncrementDay, 3600000); // Check every hour

    return () => clearInterval(interval);
  }, [dispatch]);

  const progress = (daysCompleted / totalDays) * 100;

  return (
    <motion.div
      id="fasting"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
    >
      <div className="flex items-center mb-4">
        <Timer className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Fasting Tracker</h2>
      </div>

      <div className="mb-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 dark:text-purple-400 bg-purple-200 dark:bg-purple-900">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-purple-600 dark:text-purple-400">
                {daysCompleted}/{totalDays} days
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200 dark:bg-purple-900">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 bg-amber-50 dark:bg-amber-900/50 p-3 rounded-lg">
          <Sun className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Suhoor</p>
            <p className="font-semibold text-gray-800 dark:text-white">{startTime}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/50 p-3 rounded-lg">
          <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Iftar</p>
            <p className="font-semibold text-gray-800 dark:text-white">{endTime}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};