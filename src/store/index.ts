// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from './services/films';
const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});

export default store;
