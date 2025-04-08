import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fallon-studio-assignment.onrender.com/api/v1",
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
