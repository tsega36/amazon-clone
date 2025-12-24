import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5001/clone-a5af3/us-central1/api',
  headers: { 'Content-Type': 'application/json' },
});

export { axiosInstance };
