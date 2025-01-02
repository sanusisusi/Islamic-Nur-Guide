import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimeRemaining } from '../../utils/dateUtils';

interface RamadanTimerState extends TimeRemaining {
  startDate: string;
  year: number;
}

const initialState: RamadanTimerState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  startDate: '2025',
  year: 2025,
};

const ramadanTimerSlice = createSlice({
  name: 'ramadanTimer',
  initialState,
  reducers: {
    updateCountdown: (state, action: PayloadAction<TimeRemaining>) => {
      state.days = action.payload.days;
      state.hours = action.payload.hours;
      state.minutes = action.payload.minutes;
      state.seconds = action.payload.seconds;
    },
  },
});

export const { updateCountdown } = ramadanTimerSlice.actions;
export default ramadanTimerSlice.reducer;