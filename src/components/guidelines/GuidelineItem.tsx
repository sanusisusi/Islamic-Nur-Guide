import React from 'react';
import { motion } from 'framer-motion';

interface GuidelineItemProps {
  title: string;
  arabic?: string;
  description: string;
  translation?: string;
  type: 'positive' | 'negative';
}

export const GuidelineItem: React.FC<GuidelineItemProps> = ({
  title,
  arabic,
  description,
  translation,
  type
}) => {
  const colors = {
    positive: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
    negative: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-lg border ${colors[type]}`}
    >
      <div className="mb-2">
        <h4 className="font-medium text-gray-800 dark:text-white">{title}</h4>
        {arabic && (
          <p className="text-lg font-arabic text-gray-700 dark:text-gray-200 mt-1">
            {arabic}
          </p>
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      {translation && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
          {translation}
        </p>
      )}
    </motion.div>
  );
};