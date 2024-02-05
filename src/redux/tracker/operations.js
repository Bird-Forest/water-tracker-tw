// tracker/operations.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Додавання запису по спожитій воді
export const addWaterEntry = createAsyncThunk(
  'tracker/addWaterEntry',
  async (waterData, thunkAPI) => {
    try {
      const res = await axios.post('/water/add', waterData);
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
  async ({ waterId, updatedData }, thunkAPI) => {
    try {
      const res = await axios.put(`api/water/update/${waterId}`, updatedData);
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
      await axios.delete(`api/water/${waterId}`);
      return await thunkAPI.dispatch(getDailyWaterAmount());
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
