import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from './api/base';
import counterReducer from './slices/counter';

export const makeStore = () => configureStore({
  reducer: {
    counter: counterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (gDM) => gDM().concat(baseApi.middleware),
});
