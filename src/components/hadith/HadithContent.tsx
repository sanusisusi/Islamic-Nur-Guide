import React from 'react';
import { Hadith } from '../../types/hadith';

interface HadithContentProps {
  hadith: Hadith;
}

export const HadithContent: React.FC<HadithContentProps> = ({ hadith }) => (
  <div className="space-y-4">
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{hadith.text}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400">
      Narrated by: {hadith.narrator}
    </p>
  </div>
);