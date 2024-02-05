export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectDailyNorma = state => state.auth.dailyNorma;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLoadingStatus = state => state.auth.loading;
