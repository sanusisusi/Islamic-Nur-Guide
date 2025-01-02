import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  city: string;
  country: string;
  timezone: string;
}

const initialState: LocationState = {
  latitude: null,
  longitude: null,
  city: '',
  country: '',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<{ latitude: number; longitude: number }>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
    setLocationInfo: (state, action: PayloadAction<{ city: string; country: string }>) => {
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
  },
});

export const { setLocation, setLocationInfo } = locationSlice.actions;
export default locationSlice.reducer;