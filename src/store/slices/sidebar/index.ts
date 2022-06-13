import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './constants/initialState';
import type { RootState } from '../../types/rootState';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.open = !state.open;
    }
  }
});

export const { toggleMenu } = sidebarSlice.actions;

export const selectIsOpenMenu = (state: RootState) => state.sidebar.open;

export default sidebarSlice.reducer;
