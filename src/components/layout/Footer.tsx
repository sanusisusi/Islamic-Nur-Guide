import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-indigo-900/50 backdrop-blur-sm py-3">
    <div className="container mx-auto px-4 text-center text-white/80 text-sm">
      <p>Islamic Nur Guide © {new Date().getFullYear()}</p>
    </div>
  </footer>
);