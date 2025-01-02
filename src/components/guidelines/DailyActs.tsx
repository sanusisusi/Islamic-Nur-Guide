import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { GuidelineItem } from './GuidelineItem';

export const DailyActs: React.FC = () => {
  const dailyActs = [
    { 
      title: 'Suhoor', 
      arabic: 'السحور',
      description: 'Take pre-dawn meal close to Fajr' 
    },
    { 
      title: 'Quran Recitation', 
      arabic: 'تِلاوَة القُرآن',
      description: 'Read and reflect daily' 
    },
    { 
      title: 'Morning/Evening Adhkar', 
      arabic: 'أذكار الصباح والمساء',
      description: 'Remember Allah throughout the day' 
    },
    { 
      title: 'Taraweeh Prayer', 
      arabic: 'صَلاة التَراويح',
      description: 'Attend night prayers' 
    },
    { 
      title: 'Dua at Iftar', 
      arabic: 'دُعاء الإفطار',
      description: 'اللَّهُمَّ إِنِّي لَكَ صُمْتُ، وَبِكَ آمَنْتُ، وَعَلَى رِزْقِكَ أَفْطَرْتُ',
      translation: 'O Allah, I fasted for You and I believe in You and I break my fast with Your sustenance'
    },
    { 
      title: 'Charity', 
      arabic: 'الصَدَقة',
      description: 'Give to those in need (Orphans & Poor)' 
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
        <CheckCircle2 className="w-5 h-5 mr-2" />
        Sunnah Daily Acts
      </h3>
      <div className="space-y-3">
        {dailyActs.map((act) => (
          <GuidelineItem
            key={act.title}
            title={act.title}
            arabic={act.arabic}
            description={act.description}
            translation={act.translation}
            type="positive"
          />
        ))}
      </div>
    </div>
  );
};