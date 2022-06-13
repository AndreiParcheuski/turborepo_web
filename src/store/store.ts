import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { baseApi } from './api/base';
import localeReducer from './slices/locale';
import sidebarReducer from './slices/sidebar';

const rootReducer = combineReducers({
  locale: localeReducer,
  sidebar: sidebarReducer,
  [baseApi.reducerPath]: baseApi.reducer
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(baseApi.middleware),
    devTools: process.env.NODE_ENV !== 'production'
  });
