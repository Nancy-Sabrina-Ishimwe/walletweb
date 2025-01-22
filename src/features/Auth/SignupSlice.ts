import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '../../services/LoginService';

// Define the shape of user signup data
export interface SignupUserData {
  hod_name: string;
  email: string;
  contact_number: number;
  password: string;
  password_confirmation: string;
}

// Define the shape of the signup state
interface SignupState {
  user: any | null;
  loading: boolean;
  error: string | null;
}

// Initial state with correct types
const initialState: SignupState = {
  user: null,
  loading: false,
  error: null,
};

// Async thunk for user signup
export const signupUser = createAsyncThunk(
  'auth/signup',
  async (userData: SignupUserData, { rejectWithValue }) => {
    try {
      const response = await loginService.signup(userData);
      return response.data; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Signup failed');
    }
  }
);

// Create signup slice
const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    resetSignupState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Ensure correct type assertion
      });
  },
});

// Export actions
export const { resetSignupState } = signupSlice.actions;

// Export reducer
export default signupSlice.reducer;
