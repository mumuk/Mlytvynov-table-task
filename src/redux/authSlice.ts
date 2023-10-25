import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store"; // предположим, что вы импортируете тип состояния из store.ts
import { authAPI } from "../api/authAPI.ts";

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

interface MyPayloadType {
  error?: string;

}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authAPI.login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authAPI.login.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.message === "Authentication successful.") {
          state.isAuthenticated = true;
        } else {
          state.error = action.payload;
        }
      })
      .addCase(authAPI.login.rejected, (state, action) => {
        const payload = action.payload as MyPayloadType;
        state.error = payload.error || "An error occurred during authentication.";
      });
  },
});

export const selectAuthStatus = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
