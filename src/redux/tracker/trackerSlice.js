// tracker/trackerSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterEntry,
  updateWaterEntry,
  deleteWaterEntry,
  getDailyWaterAmount,
} from './operations';
import { logOut } from '../auth/operations';

const initialState = {
  dailyWaterAmount: [],
  loading: false,
  error: null,
};

export const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(addWaterEntry.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWaterEntry.fulfilled, (state, action) => {
        state.dailyWaterAmount.push(action.payload);
        state.loading = false;
      })
      .addCase(addWaterEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateWaterEntry.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWaterEntry.fulfilled, (state, action) => {
        const updatedEntry = action.payload;
        state.dailyWaterAmount = state.dailyWaterAmount.map(entry =>
          entry.id === updatedEntry.id ? updatedEntry : entry
        );
        state.loading = false;
      })
      .addCase(updateWaterEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteWaterEntry.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWaterEntry.fulfilled, (state, action) => {
        const deletedWaterId = action.payload;
        state.dailyWaterAmount = state.dailyWaterAmount.filter(
          entry => entry.id !== deletedWaterId
        );
        state.loading = false;
      })
      .addCase(deleteWaterEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getDailyWaterAmount.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDailyWaterAmount.fulfilled, (state, action) => {
        state.dailyWaterAmount = action.payload;
        state.loading = false;
      })
      .addCase(getDailyWaterAmount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.dailyWaterAmount = [];
      }),
});

export const trackerReducer = trackerSlice.reducer;
