import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NOTIFICATIONS, paramsForNotify } from '../notifications';

// axios.defaults.baseURL = 'http://localhost:3001';

axios.defaults.baseURL = 'https://backend-225p.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /auth/signup
 * body: { email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', user);
      setAuthHeader(res.data.token);
      logIn(user)(thunkAPI.dispatch, thunkAPI.getState);
      setAuthHeader(res.data);
      return res.data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          Notify.failure(NOTIFICATIONS.FAILURE.USER_CREATION, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 401:
          Notify.failure(NOTIFICATIONS.FAILURE.INVALID_DATA, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 404:
          Notify.failure(NOTIFICATIONS.FAILURE.NOT_FOUND, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 409:
          Notify.failure(NOTIFICATIONS.FAILURE.EMAIL, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 500:
          Notify.failure(NOTIFICATIONS.FAILURE.SERVER, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        default:
          return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

/*
 * POST @ /auth/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      Notify.info(NOTIFICATIONS.INFO.WELCOME, paramsForNotify);
      return res.data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          Notify.failure(NOTIFICATIONS.FAILURE.LOGIN, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 401:
          Notify.failure(NOTIFICATIONS.FAILURE.INVALID_DATA, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 404:
          Notify.failure(NOTIFICATIONS.FAILURE.NOT_FOUND, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 500:
          Notify.failure(NOTIFICATIONS.FAILURE.SERVER, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        default:
          return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

/*
 * GET @ /auth/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          Notify.failure(NOTIFICATIONS.FAILURE.FETCHING_USER, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 401:
          Notify.failure(NOTIFICATIONS.FAILURE.UNAUTHORIZED, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 500:
          Notify.failure(NOTIFICATIONS.FAILURE.SERVER, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        default:
          return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const getInfoUser = createAsyncThunk(
  'user/getInfoUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      setAuthHeader(token);

      const res = await axios.get('user/');
      return res.data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          Notify.failure(NOTIFICATIONS.FAILURE.FETCHING_USER, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 401:
          Notify.failure(NOTIFICATIONS.FAILURE.UNAUTHORIZED, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 404:
          Notify.failure(NOTIFICATIONS.FAILURE.NOT_FOUND, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 500:
          Notify.failure(NOTIFICATIONS.FAILURE.SERVER, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        default:
          return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (formData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      setAuthHeader(token);

      const res = await axios.patch('user/avatars', formData);

      Notify.success(NOTIFICATIONS.SUCCESS.AVATAR_UPDATED, paramsForNotify);
      return res.data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          Notify.failure(NOTIFICATIONS.FAILURE.NO_FILE, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 401:
          Notify.failure(NOTIFICATIONS.FAILURE.UNAUTHORIZED, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 404:
          Notify.failure(NOTIFICATIONS.FAILURE.NOT_FOUND, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 500:
          Notify.failure(NOTIFICATIONS.FAILURE.SERVER, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        default:
          return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      setAuthHeader(token);

      const res = await axios.patch('user/update/', userData);

      Notify.success(NOTIFICATIONS.SUCCESS.USER_UPDATED, paramsForNotify);

      thunkAPI.dispatch(refreshUser());
      return res.data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          Notify.failure(NOTIFICATIONS.FAILURE.USER_UPDATE, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 401:
          Notify.failure(NOTIFICATIONS.FAILURE.UNAUTHORIZED, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 404:
          Notify.failure(NOTIFICATIONS.FAILURE.NOT_FOUND, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        case 500:
          Notify.failure(NOTIFICATIONS.FAILURE.SERVER, paramsForNotify);
          return thunkAPI.rejectWithValue(error.message);
        default:
          return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const updateWaterRate = createAsyncThunk(
  'user/waterRate',
  async (dailyNorma, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      setAuthHeader(token);

      const res = await axios.patch('/user/water-rate', { dailyNorma });

      // Notify.success(NOTIFICATIONS.SUCCESS.USER_UPDATED, paramsForNotify);
      return res.data;
    } catch (error) {
      console.error(error);
      // Notify.failure(NOTIFICATIONS.FAILURE.USER_UPDATE, paramsForNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /auth/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
    Notify.info(NOTIFICATIONS.INFO.LOGOUT, paramsForNotify);
  } catch (error) {
    switch (error.response.status) {
      case 400:
        Notify.failure(NOTIFICATIONS.FAILURE.LOGOUT, paramsForNotify);
        return thunkAPI.rejectWithValue(error.message);
      case 401:
        Notify.failure(NOTIFICATIONS.FAILURE.UNAUTHORIZED, paramsForNotify);
        return thunkAPI.rejectWithValue(error.message);
      case 500:
        Notify.failure(NOTIFICATIONS.FAILURE.SERVER, paramsForNotify);
        return thunkAPI.rejectWithValue(error.message);
      default:
        return thunkAPI.rejectWithValue(error.message);
    }
  }
});
