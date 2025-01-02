import React from 'react';

interface CountdownBlockProps {
  label: string;
  value: number;
}

export const CountdownBlock: React.FC<CountdownBlockProps> = ({ label, value }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-orange-600 bg-orange-50 rounded-lg p-4">
      {String(value).padStart(2, '0')}
    </div>
    <p className="text-gray-600 mt-2">{label}</p>
  </div>
);