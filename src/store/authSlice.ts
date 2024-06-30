import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: typeof window !== 'undefined' && !!localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', 'your-token'); // сохраните токен при входе
      }
    },
    logout(state) {
      state.isAuth = false;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token'); // удалите токен при выходе
      }
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
