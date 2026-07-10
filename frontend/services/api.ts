import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://localhost:5000/api";

console.log("API URL:", API_URL);

const api = axios.create({
  baseURL: API_URL,
});

// Preview CSV
export const previewCSV = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/preview", formData);

  return response.data;
};

// Upload CSV
export const uploadCSV = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/upload", formData);

  return response.data;
};

export default api;