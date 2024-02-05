export const selectTotalWater = state => state.tracker.totalAmountWater;

export const selectPercentage = state => state.tracker.percentage;

export const selectEntries = state => state.tracker.entries;

// tracker/selectors.js
// import { createSelector } from '@reduxjs/toolkit';

// const selectTracker = state => state.tracker;

// export const selectDailyWaterAmount = createSelector(
//   [selectTracker],
//   tracker => tracker.dailyWaterAmount
// );

// export const selectLoadingStatus = createSelector(
//   [selectTracker],
//   tracker => tracker.loading
// );

// export const selectError = createSelector(
//   [selectTracker],
//   tracker => tracker.error
// );
