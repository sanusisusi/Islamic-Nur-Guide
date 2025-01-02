import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Timer, BookOpen, User, BookHeart, ScrollText, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
  onDeveloperClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ mobile, onClose, onDeveloperClick }) => {
  const mainNavItems = [
    { icon: Calendar, label: 'Countdown', path: '/#countdown' },
    { icon: Clock, label: 'Prayer Times', path: '/#prayer-times' },
    { icon: Timer, label: 'Fast Track', path: '/#fasting' },
  ];

  const spiritualNavItems = [
    { icon: BookOpen, label: 'Verses', path: '/#verses' },
    { icon: BookHeart, label: 'Hadith', path: '/#hadith' },
    { icon: Heart, label: 'Allah Names', path: '/names' },
    { icon: ScrollText, label: 'Guidelines', path: '/#guidelines' },
  ];

  const handleClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        onClose?.();
      }
    }
  };

  if (mobile) {
    return (
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-indigo-800/90 backdrop-blur-sm rounded-lg p-4"
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-white/60 text-sm mb-2">Main</h3>
            <ul className="space-y-2">
              {mainNavItems.map(({ icon: Icon, label, path }) => (
                <motion.li key={label} whileHover={{ x: 10 }}>
                  <Link
                    to={path}
                    onClick={() => handleClick(path)}
                    className="flex items-center text-white/80 hover:text-white"
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    <span>{label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white/60 text-sm mb-2">Spiritual</h3>
            <ul className="space-y-2">
              {spiritualNavItems.map(({ icon: Icon, label, path }) => (
                <motion.li key={label} whileHover={{ x: 10 }}>
                  <Link
                    to={path}
                    onClick={() => handleClick(path)}
                    className="flex items-center text-white/80 hover:text-white"
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    <span>{label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>
    );
  }

  return (
    <nav className="flex space-x-8">
      <div>
        <ul className="flex space-x-4">
          {mainNavItems.map(({ icon: Icon, label, path }) => (
            <motion.li key={label} whileHover={{ y: -2 }}>
              <Link
                to={path}
                onClick={() => handleClick(path)}
                className="flex items-center text-white/80 hover:text-white"
              >
                <Icon className="w-4 h-4 mr-1" />
                <span>{label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div>
        <ul className="flex space-x-4">
          {spiritualNavItems.map(({ icon: Icon, label, path }) => (
            <motion.li key={label} whileHover={{ y: -2 }}>
              <Link
                to={path}
                onClick={() => handleClick(path)}
                className="flex items-center text-white/80 hover:text-white"
              >
                <Icon className="w-4 h-4 mr-1" />
                <span>{label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};