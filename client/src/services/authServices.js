import api from "./axios";

// Register User
export const registerUser = async (formData) => {
  return await api.post("/auth/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Login User
export const loginUser = async (userData) => {
  return await api.post("/auth/login", userData);
};

// Logout User
export const logoutUser = async () => {
  return await api.post("/auth/logout");
};