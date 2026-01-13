import { createSlice } from "@reduxjs/toolkit";
interface User {
  // Define your user properties here
  id: number;
  name: string;
  email: string;
  // ... other properties
}
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: true,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const userAuthState = (state: { auth: AuthState }) => state.auth;
export default authSlice.reducer;
