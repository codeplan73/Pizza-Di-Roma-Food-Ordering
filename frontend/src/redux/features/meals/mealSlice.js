import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mealService from './mealService'
// import axios from 'axios'
// const API_URL = '/api/v1/meals'

const initialState = {
  meals: [],
  meal: {},
  error: false,
  success: false,
  loading: false,
  message: '',
}

// get all meals
export const getAllMeals = createAsyncThunk(
  'meals/getAll',
  async (_, thunkAPI) => {
    try {
      return await mealService.getAllMeals()
    } catch (error) {
      const message = error.response.data.msg
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getMeal = createAsyncThunk('meal/getMeal', async (id, thunkAPI) => {
  try {
    return await mealService.getMeal(id)
  } catch (error) {
    const message = error.response.data.msg
    return thunkAPI.rejectWithValue(message)
  }
})

export const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllMeals.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllMeals.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.meals = action.payload
      }) 
      .addCase(getMeal.pending, (state) => {
        state.loading = true
      })
      .addCase(getMeal.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.meal = action.payload
      })
      .addCase(getMeal.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
      })
  },
})

export default mealSlice.reducer
