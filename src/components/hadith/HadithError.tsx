import React from 'react';

interface HadithErrorProps {
  message: string;
}

export const HadithError: React.FC<HadithErrorProps> = ({ message }) => (
  <div className="text-center py-4">
    <p className="text-gray-600 dark:text-gray-300">
      {message}
    </p>
  </div>
);