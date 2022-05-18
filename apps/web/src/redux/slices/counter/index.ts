import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../types/rootState';
import { CounterState } from './types/counterState';

// Define the initial state
const initialState: CounterState = { count: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.count;

export default counterSlice.reducer;
