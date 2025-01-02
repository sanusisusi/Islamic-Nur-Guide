import React from 'react';

export interface Hadith {
  text: string;
  narrator: string;
}

export interface HadithState {
  hadith: Hadith | null;
  isLoading: boolean;
  error: string | null;
}