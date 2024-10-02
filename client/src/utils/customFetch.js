import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1",
  withCredentials: true, // Include credentials with requests
});

// Add any request/response interceptors if needed

export default customFetch;
