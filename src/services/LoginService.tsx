import http from "../AxiosInstint";
import { MakeSignupProps } from "../features/Auth/AuthSlice";

interface LoginData {
  email: string;
  password: string;
}

// interface SignupData {
//   name: string;
//   email: string;
//   password: string;
// }

interface ResetPasswordData {
  token: string;
  newPassword: string;
}

class LoginDataService {
  login(data: LoginData): Promise<any> {
    return http.post("/login", data);
  }

  signup(data: MakeSignupProps): Promise<any> {
    return http.post("/register", data);
  }

  forgotPassword(email: string): Promise<any> {
    return http.post("/forgot-password", { email });
  }

  verifyEmail(token: string): Promise<any> {
    return http.get(`/verify-email/${token}`);
  }

  resetPassword(data: ResetPasswordData): Promise<any> {
    return http.post("/reset-password", data);
  }

  // Uncomment and add proper types if needed
  // update(id: string, data: any): Promise<any> {
  //   return http.put(`/users/${id}`, data);
  // }

  // getSingle(id: string): Promise<any> {
  //   return http.get(`/users/${id}`);
  // }
}

const loginService = new LoginDataService();
export default loginService;
