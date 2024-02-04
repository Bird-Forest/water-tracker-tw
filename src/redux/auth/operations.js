import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const paramsForNotify = {
  position: 'center-bottom',
  distance: '16px',
  timeout: 3000,
  width: '300px',
  fontSize: '16px',
  borderRadius: '10px',
  showOnlyTheLastOne: true,
  fontFamily: 'Montserrat',
  cssAnimationStyle: 'from-bottom',
  fontAwesomeIconSize: '20px',
};

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
      logIn(user)(thunkAPI.dispatch, thunkAPI.getState, null);
      setAuthHeader(res.data);
      console.log('I am operations:', res);
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        Notify.failure('User creation error.', paramsForNotify);
        return thunkAPI.rejectWithValue(error.message);
      } else if (error.response.status === 409) {
        Notify.failure('Email in already in use.', paramsForNotify);
        return thunkAPI.rejectWithValue(error.message);
      } else if (error.response.status === 500) {
        Notify.failure('Server error.', paramsForNotify);
        return thunkAPI.rejectWithValue(error.message);
      }
      console.log(error);
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
      Notify.info(
        `Welcome to Tracker
      of Water!`,
        paramsForNotify
      );
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        Notify.failure('Login error.', paramsForNotify);
      }
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
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

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
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

      const res = await axios.get('user/current');
      return res.data;
    } catch (error) {
      console.error(error);
      Notify.failure('Error fetching user information.', paramsForNotify);
      return thunkAPI.rejectWithValue(error.message);
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

      const res = await axios.patch('/avatars', formData);

      Notify.success('Avatar updated successfully.', paramsForNotify);
      return res.data;
    } catch (error) {
      console.error(error);
      Notify.failure('Error updating avatar.', paramsForNotify);
      return thunkAPI.rejectWithValue(error.message);
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

      const res = await axios.put('user/current', userData);

      Notify.success('User information updated successfully.', paramsForNotify);
      return res.data;
    } catch (error) {
      console.error(error);
      Notify.failure('Error updating user information.', paramsForNotify);
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
    Notify.info(`We're going to miss you, ...`, paramsForNotify);
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      Notify.failure('Logout error.', paramsForNotify);
    } else if (error.response.status === 500) {
      Notify.failure('Server error.', paramsForNotify);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});
