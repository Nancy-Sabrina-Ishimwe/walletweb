import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";

// Create an Axios instance with a base URL
const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Access Vite's env variables
});

// Define the request handler
const requestHandler = (
  request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
  const token = localStorage.getItem("token");
  if (token) {
    // Ensure `headers` is an instance of AxiosHeaders
    if (request.headers instanceof AxiosHeaders) {
      request.headers.set("Authorization", `Bearer ${token}`);
    } else {
      // Fallback for plain object headers
      // request.headers = {
      //   ...request.headers,
      //   Authorization: `Bearer ${token}`,
      // };
    
    }
  }
  return request;
};

// Define the response handler
const responseHandler = (response: AxiosResponse): AxiosResponse => {
  return response;
};

// Attach interceptors
http.interceptors.request.use(requestHandler);
http.interceptors.response.use(responseHandler);

export default http;
