// tracker/trackerSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterEntry,
  updateWaterEntry,
  deleteWaterEntry,
  getDailyWaterAmount,
  getMonthWaterAmount,
} from './operations';
import { logOut } from '../auth/operations';

const initialState = {
  monthAmountWater: null,
  totalAmountWater: null,
  percentage: null,
  entries: [
    {
      _id: null,
      amountWater: null,
      day: null,
      time: null,
    },
  ],
};

export const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  // reducers: {},
  extraReducers: builder =>
    builder
      .addCase(addWaterEntry.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWaterEntry.fulfilled, (state, action) => {
        state.entries = action.payload.entries;
        state.totalAmountWater = action.payload.totalAmountWater;
        state.percentage = action.payload.percentage;
        state.loading = false;
      })
      .addCase(addWaterEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(updateWaterEntry.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWaterEntry.fulfilled, (state, action) => {
        state.entries = action.payload.entries;
        state.totalAmountWater = action.payload.totalAmountWater;
        state.percentage = action.payload.percentage;
        state.loading = false;
      })
      .addCase(updateWaterEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(deleteWaterEntry.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWaterEntry.fulfilled, (state, action) => {
        state.entries = action.payload.entries;
        state.totalAmountWater = action.payload.totalAmountWater;
        state.percentage = action.payload.percentage;
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
        state.totalAmountWater = action.payload.totalWater;
        state.entries = action.payload.entries;
        state.percentage = action.payload.percentage;
      })
      .addCase(getDailyWaterAmount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMonthWaterAmount.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMonthWaterAmount.fulfilled, (state, action) => {
        state.monthAmountWater = action.payload.monthAmountWater;
        state.loading = false;
      })
      .addCase(getMonthWaterAmount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.monthAmountWater = null;
        state.totalAmountWater = null;
        state.percentage = null;
        state.entries = [
          {
            _id: null,
            amountWater: null,
            day: null,
            time: null,
          },
        ];
      }),
});

export const trackerReducer = trackerSlice.reducer;

// const initialState = {
//   dailyWaterAmount: [],
//   loading: false,
//   error: null,
// };

// export const trackerSlice = createSlice({
//   name: 'tracker',
//   initialState,
//   reducers: {},
//   extraReducers: builder =>
//     builder
//       .addCase(addWaterEntry.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addWaterEntry.fulfilled, (state, action) => {
//         state.dailyWaterAmount.push(action.payload);
//         state.loading = false;
//       })
//       .addCase(addWaterEntry.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(updateWaterEntry.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateWaterEntry.fulfilled, (state, action) => {
//         const updatedEntry = action.payload;
//         state.dailyWaterAmount = state.dailyWaterAmount.map(entry =>
//           entry.id === updatedEntry.id ? updatedEntry : entry
//         );
//         state.loading = false;
//       })
//       .addCase(updateWaterEntry.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(deleteWaterEntry.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(deleteWaterEntry.fulfilled, (state, action) => {
//         const deletedWaterId = action.payload;
//         state.dailyWaterAmount = state.dailyWaterAmount.filter(
//           entry => entry.id !== deletedWaterId
//         );
//         state.loading = false;
//       })
//       .addCase(deleteWaterEntry.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(getDailyWaterAmount.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getDailyWaterAmount.fulfilled, (state, action) => {
//         state.dailyWaterAmount = action.payload;
//         state.loading = false;
//       })
//       .addCase(getDailyWaterAmount.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.dailyWaterAmount = [];
//       }),
// });

// export const trackerReducer = trackerSlice.reducer;
