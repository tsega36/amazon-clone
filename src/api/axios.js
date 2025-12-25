import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosInstance };

// import axios from 'axios';

// const axiosInstance = axios.create({
//   //baseURL for firebase
//   // baseURL: 'http://127.0.0.1:5001/clone-a5af3/us-central1/api',
//   // headers: { 'Content-Type': 'application/json' },

//   //baseURL for deployed version of amazon on render
//   baseURL: 'https://amazon-api-miwf.onrender.com',
// });

// export { axiosInstance };
