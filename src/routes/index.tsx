import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainContent } from '../components/MainContent';
import { NamesOfAllah } from '../pages/NamesOfAllah';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/names" element={<NamesOfAllah />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};