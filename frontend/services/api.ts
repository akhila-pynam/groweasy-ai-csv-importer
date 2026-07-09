import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Preview CSV
export const previewCSV = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/preview", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Import CSV
export const uploadCSV = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export default api;