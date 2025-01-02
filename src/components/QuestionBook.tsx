import React, { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';

export const QuestionBook: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [questions] = useState([
    { id: 1, q: 'When does Ramadan start?', a: 'Ramadan starts with the sighting of the new moon.' },
    { id: 2, q: 'What breaks the fast?', a: 'Eating, drinking, and other specific actions break the fast.' },
    // Add more Q&A pairs
  ]);

  const filteredQuestions = questions.filter(q => 
    q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Common Questions</h2>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search questions..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {filteredQuestions.map(({ id, q, a }) => (
          <div key={id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="font-medium text-gray-800 dark:text-white mb-2">{q}</h3>
            <p className="text-gray-600 dark:text-gray-300">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};