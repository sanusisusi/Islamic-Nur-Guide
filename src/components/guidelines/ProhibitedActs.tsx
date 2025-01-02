import React from 'react';
import { XCircle } from 'lucide-react';
import { GuidelineItem } from './GuidelineItem';

export const ProhibitedActs: React.FC = () => {
  const prohibitedActs = [
    { title: 'Eating/Drinking', description: 'Abstain from dawn to sunset' },
    { title: 'Bad Language', description: 'Avoid cursing and harsh words' },
    { title: 'Arguments', description: 'Stay away from disputes' },
    { title: 'Backbiting', description: 'Don\'t speak ill of others' },
    { title: 'Missing Prayers', description: 'Maintain all obligatory prayers' },
    { title: 'Wasteful Activities', description: 'Use time productively' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center">
        <XCircle className="w-5 h-5 mr-2" />
        Acts to Avoid
      </h3>
      <div className="space-y-3">
        {prohibitedActs.map((act) => (
          <GuidelineItem
            key={act.title}
            title={act.title}
            description={act.description}
            type="negative"
          />
        ))}
      </div>
    </div>
  );
};