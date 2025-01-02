import { configureStore } from '@reduxjs/toolkit';
import prayerTimesReducer from './slices/prayerTimesSlice';
import fastingTrackerReducer from './slices/fastingTrackerSlice';
import quranVersesReducer from './slices/quranVersesSlice';
import ramadanTimerReducer from './slices/ramadanTimerSlice';
import locationReducer from './slices/locationSlice';
import hadithReducer from './slices/hadithSlice';

export const store = configureStore({
  reducer: {
    prayerTimes: prayerTimesReducer,
    fastingTracker: fastingTrackerReducer,
    quranVerses: quranVersesReducer,
    ramadanTimer: ramadanTimerReducer,
    location: locationReducer,
    hadith: hadithReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;