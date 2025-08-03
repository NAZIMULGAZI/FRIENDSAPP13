import axios from 'axios';

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "https://friendsapp13.onrender.com/api/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
