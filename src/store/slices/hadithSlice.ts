import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HadithState, Hadith } from '../../types/hadith';

const initialState: HadithState = {
  hadith: null,
  isLoading: true,
  error: null,
};

const hadithSlice = createSlice({
  name: 'hadith',
  initialState,
  reducers: {
    setHadith: (state, action: PayloadAction<Hadith>) => {
      state.hadith = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
      state.hadith = null;
    },
  },
});

export const { setHadith, setError } = hadithSlice.actions;
export default hadithSlice.reducer;