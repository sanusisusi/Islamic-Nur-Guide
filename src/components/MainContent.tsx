import React from 'react';
import { Countdown } from './Countdown';
import { PrayerTimes } from './PrayerTimes';
import { FastingTracker } from './FastingTracker';
import { RamadanGuidelines } from './guidelines/RamadanGuidelines';
import { VerseCarousel } from './VerseCarousel';
import { DailyHadith } from './DailyHadith';
import { Contact } from './Contact';
import { QuestionBook } from './QuestionBook';
import { QiblaFinder } from './QiblaFinder';
import { FeaturedNames } from './names/FeaturedNames';

export const MainContent: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-24 flex-grow">
      <div className="max-w-3xl mx-auto space-y-6">
        <Countdown />
        <PrayerTimes />
        <FastingTracker />
        <QiblaFinder />
        <FeaturedNames />
        <VerseCarousel />
        <DailyHadith />
        <RamadanGuidelines />
        <QuestionBook />
        <Contact />
      </div>
    </main>
  );
};