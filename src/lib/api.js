import axios from "axios";

// Ganti URL ini sesuai alamat backend FastAPI (localhost atau production)
const API_URL = "http://localhost:8000";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getHistory = async () => {
  const response = await api.get("/history");
  return response.data.data;
};

export const getPredictions = async () => {
  const response = await api.get("/predict");
  return response.data;
};
