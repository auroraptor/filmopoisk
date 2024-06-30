// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from './services/films';
import { authApi } from './services/auth';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware, authApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
