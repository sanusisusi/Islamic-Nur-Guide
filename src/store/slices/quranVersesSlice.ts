import { createSlice } from '@reduxjs/toolkit';

interface Verse {
  arabic: string;
  translation: string;
  reference: string;
}

interface QuranState {
  dailyVerse: Verse;
  verses: Verse[];
}

const initialState: QuranState = {
  dailyVerse: {
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ',
    translation: 'O you who believe! Fasting is prescribed for you',
    reference: 'Al-Baqarah 2:183',
  },
  verses: [],
};

const quranVersesSlice = createSlice({
  name: 'quranVerses',
  initialState,
  reducers: {},
});

export default quranVersesSlice.reducer;