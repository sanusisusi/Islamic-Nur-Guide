import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { store } from './store';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { DeveloperProfile } from './components/DeveloperProfile';
import { AppRoutes } from './routes';
import { useTheme } from './hooks/useTheme';

export function App() {
  const [showDeveloperProfile, setShowDeveloperProfile] = useState(true);
  useTheme();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <AnimatePresence>
            {showDeveloperProfile && (
              <DeveloperProfile onClose={() => setShowDeveloperProfile(false)} />
            )}
          </AnimatePresence>
          
          <div className={showDeveloperProfile ? 'blur-sm pointer-events-none' : ''}>
            <Header onDeveloperClick={() => setShowDeveloperProfile(true)} />
            <AppRoutes />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}