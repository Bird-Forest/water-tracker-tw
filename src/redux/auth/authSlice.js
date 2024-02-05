import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateWaterRate,
  updateAvatar,
  updateUser,
  getInfoUser,
} from './operations';

const initialState = {
  dailyNorma: 2,
  user: {
    _id: null,
    name: null,
    email: null,
    avatarURL: null,
    gender: null,
    dailyNorma: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false, // Додано ключ loading
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.loading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.loading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.loading = false;
      })
      .addCase(updateWaterRate.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateWaterRate.fulfilled, (state, action) => {
        state.user.dailyNorma = action.payload.dailyNorma;
        state.loading = false;
      })
      .addCase(updateWaterRate.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateAvatar.pending, state => {
        state.loading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
        state.loading = false;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateUser.pending, state => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getInfoUser.pending, state => {
        state.loading = true;
      })
      .addCase(getInfoUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getInfoUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      }),
});

export const authReducer = authSlice.reducer;
