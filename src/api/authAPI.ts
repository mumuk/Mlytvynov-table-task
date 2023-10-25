import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {AxiosError} from 'axios';

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
    const axiosError = error as AxiosError;
    return thunkAPI.rejectWithValue(axiosError.response?.data);
  }
});


export const authAPI = {
  login
}
