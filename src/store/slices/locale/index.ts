import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { ARABIC_LOCALES } from './constants/arabicLocales';
import { initialState } from './constants/initialState';
import type { RootState } from '../../types/rootState';

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.isArabic = ARABIC_LOCALES.includes(
        action.payload.locale.locale.toLowerCase()
      );
      state.locale = action.payload.locale.locale;
    }
  }
});

export const { setLocale } = localeSlice.actions;

export const selectIsArabic = (state: RootState) => state.locale.isArabic;

export default localeSlice.reducer;
