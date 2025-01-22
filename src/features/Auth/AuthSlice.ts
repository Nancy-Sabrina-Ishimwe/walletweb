import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "../../services/LoginService";
import { RootState } from "../../redux/store";


interface MakeLoginProps{
  email: string;
  password: string;
}
export interface MakeSignupProps{
  hod_name:string;
  email: string;
  contact_number:number;
  password: string;
  password_confirmation:string;
} 
interface initialStateInterface{
  userData: any | null;
  users:any | null;
  loading: boolean;
  error: any | null;
  message?: string;


}
          
const initialState:initialStateInterface = {
  userData: localStorage.getItem("hod_name")
    ? {
        email: localStorage.getItem("email"),
      }
    : null,
  users:null ,
  loading: false,
  error: null,
  message:"",
};

export const makeLogin = createAsyncThunk(
  "login/login",
  async ({ email, password }: MakeLoginProps, { rejectWithValue }) => {
    try {
      const response = await loginService.login({ email, password });
      if (response) {
        localStorage.setItem("token", response.data.authorization.token);
        localStorage.setItem("email", response.data.user.email);
        // localStorage.setItem("user", response.data.user);
      }
      return response.data;
    } catch (error:any) {
      return rejectWithValue(
        error.response?.data?.error || "Invalid Username or Password"
      );
    }
  }
);

export const signup = createAsyncThunk(
  "login/signup",
  async (
    { hod_name, email, contact_number, password, password_confirmation }:MakeSignupProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await loginService.signup({
        hod_name,
        email,
        contact_number,
        password,
        password_confirmation,
      });

      return response.data;
    } catch (error:any) {
      return rejectWithValue(
        error.response?.data?.error || "Invalid Username or Password"
      );
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (email:string, { rejectWithValue }) => {
    try {
      const response = await loginService.forgotPassword(email); 
      return response.data.message; 
    } catch (error:any) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to send password reset email"
      );
    }
  }
);

// export const resetPassword = createAsyncThunk(
//   'auth/resetPassword',
//   async (data, { rejectWithValue }) => {
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(makeLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.users = action.payload.user;
      })
      .addCase(makeLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        
        state.loading = false;
        state.userData = action.payload;
        state.users = action.payload;
      })
      
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload; // Store the success message
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

//selectors
export const selectLogin = (state:RootState) => state.login.users;
export const selectSignup = (state:RootState) => state.login.users;
export const selectLoginError = (state:RootState) => state.login.error;
export const selectLoginLoading = (state:RootState) => state.login.loading;
export default loginSlice.reducer;
