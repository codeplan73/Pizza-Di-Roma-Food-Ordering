import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
// import axios from 'axios'
// const API_URL = '/api/v1/meals'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  error: false,
  success: false,
  loading: false,
  message: '',
}

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      return await authService.register(data)
    } catch (error) {
      const message = error.response.data.msg
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export default authSlice.reducer;
