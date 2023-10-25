import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginPayload {
  username: string;
  password: string;
}

export const login = createAsyncThunk('auth/login', async (payload: LoginPayload, thunkAPI) => {
  try {
    const response = await axios.post('https://technical-task-api.icapgroupgmbh.com/api/login/', payload);

    if (response.data.error) {
      return thunkAPI.rejectWithValue(response.data.error);
    }

    return response.data;
  } catch (error) {

    return thunkAPI.rejectWithValue(error.response.data);
  }
});


export const authAPI = {
  login
}
