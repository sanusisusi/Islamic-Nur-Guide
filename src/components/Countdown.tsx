import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { calculateTimeRemaining } from '../utils/dateUtils';
import { CountdownBlock } from './countdown/CountdownBlock';
import { RamadanMessage } from './countdown/RamadanMessage';

export const Countdown: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [isRamadan, setIsRamadan] = useState(false);
  const [isEid, setIsEid] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);

      if (remaining.days <= 0 && remaining.hours <= 0 && 
          remaining.minutes <= 0 && remaining.seconds <= 0) {
        setIsRamadan(true);
        
        setTimeout(() => {
          setIsRamadan(false);
          setIsEid(true);
          setTimeout(() => {
            setIsEid(false);
          }, 3 * 24 * 60 * 60 * 1000);
        }, 30 * 24 * 60 * 60 * 1000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isEid) {
    return <RamadanMessage type="eid" />;
  }

  if (isRamadan) {
    return <RamadanMessage type="ramadan" />;
  }

  const timeBlocks = [
    { label: 'Days', value: timeRemaining.days },
    { label: 'Hours', value: timeRemaining.hours },
    { label: 'Minutes', value: timeRemaining.minutes },
    { label: 'Seconds', value: timeRemaining.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-6"
      id="countdown"
    >
      <div className="flex items-center mb-6">
        <Calendar className="w-6 h-6 text-orange-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Ramadan Countdown</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {timeBlocks.map(({ label, value }) => (
          <CountdownBlock key={label} label={label} value={value} />
        ))}
      </div>
    </motion.div>
  );
};