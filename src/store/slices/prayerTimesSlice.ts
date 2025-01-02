import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PrayerTime {
  name: string;
  time: string;
}

interface PrayerTimesState {
  times: PrayerTime[];
  currentPrayer: string;
}

const initialState: PrayerTimesState = {
  times: [
    { name: 'Fajr', time: '05:30' },
    { name: 'Dhuhr', time: '13:15' },
    { name: 'Asr', time: '16:45' },
    { name: 'Maghrib', time: '19:30' },
    { name: 'Isha', time: '21:00' },
  ],
  currentPrayer: 'Fajr',
};

const prayerTimesSlice = createSlice({
  name: 'prayerTimes',
  initialState,
  reducers: {
    setCurrentPrayer: (state, action: PayloadAction<string>) => {
      state.currentPrayer = action.payload;
    },
  },
});

export const { setCurrentPrayer } = prayerTimesSlice.actions;
export default prayerTimesSlice.reducer;