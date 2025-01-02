import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FastingState {
  daysCompleted: number;
  totalDays: number;
  startTime: string;
  endTime: string;
}

const initialState: FastingState = {
  daysCompleted: 0,
  totalDays: 30,
  startTime: '05:30',
  endTime: '19:30',
};

const fastingTrackerSlice = createSlice({
  name: 'fastingTracker',
  initialState,
  reducers: {
    incrementDay: (state) => {
      state.daysCompleted += 1;
    },
    updateTimes: (state, action: PayloadAction<{ start: string; end: string }>) => {
      state.startTime = action.payload.start;
      state.endTime = action.payload.end;
    },
  },
});

export const { incrementDay, updateTimes } = fastingTrackerSlice.actions;
export default fastingTrackerSlice.reducer;