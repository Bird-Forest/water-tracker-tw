// tracker/operations.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://backend-225p.onrender.com';

// Додавання запису по спожитій воді
export const addWaterEntry = createAsyncThunk(
  'tracker/addWaterEntry',
  async (saveWater, thunkAPI) => {
    try {
      const res = await axios.post('/api/water/add', saveWater);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Редагування запису по спожитій воді
export const updateWaterEntry = createAsyncThunk(
  'tracker/updateWaterEntry',
  async (waterId, thunkAPI) => {
    try {
      const res = await axios.put(`api/water/update/${waterId}`);
      return res.data;
    } catch (error) {
      console.error(error);
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалення запису по спожитій воді
export const deleteWaterEntry = createAsyncThunk(
  'tracker/deleteWaterEntry',
  async (waterId, thunkAPI) => {
    try {
      const res = await axios.delete(`api/water/${waterId}`);
      return res.data;
    } catch (error) {
      console.error(error);
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання інформації про кількість води щоденно
export const getDailyWaterAmount = createAsyncThunk(
  'tracker/getDailyWaterAmount',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/water/today');
      // console.log('res: ', res.data);
      return res.data;
    } catch (error) {
      console.error(error);
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання інформації про кількість води за місяць
export const getMonthWaterAmount = createAsyncThunk(
  'tracker/getMonthWaterAmount',
  async (date, thunkAPI) => {
    try {
      const res = await axios.get(`/api/water/month/${date}`);
      // console.log('res: ', res.data);
      return res.data;
    } catch (error) {
      console.error(error);
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
