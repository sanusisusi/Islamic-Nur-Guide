import React, { useState, useEffect } from 'react';
import { Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './Navigation';
import { ThemeToggle } from '../ThemeToggle';
import { AdhanButton } from '../adhan/AdhanButton';
import { audioService } from '../../services/audioService';

interface HeaderProps {
  onDeveloperClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDeveloperClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdhanPlaying, setIsAdhanPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAdhan = () => {
    if (isAdhanPlaying) {
      audioService.stopAdhan();
      setIsAdhanPlaying(false);
    } else {
      audioService.playAdhan();
      setIsAdhanPlaying(true);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-indigo-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center py-2">
          <p className="text-2xl font-arabic text-white/90">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        </div>
        
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Moon className="w-8 h-8 text-yellow-200 animate-pulse" />
            <h1 className="text-2xl font-bold text-white">
              <span className="hidden sm:inline">Islamic Nur Guide</span>
              <span className="sm:hidden">ING</span>
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <AdhanButton isPlaying={isAdhanPlaying} onToggle={toggleAdhan} />
            <Navigation onDeveloperClick={onDeveloperClick} />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <AdhanButton isPlaying={isAdhanPlaying} onToggle={toggleAdhan} />
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <Navigation 
                mobile 
                onClose={() => setIsMenuOpen(false)}
                onDeveloperClick={onDeveloperClick}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};