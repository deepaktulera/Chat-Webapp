import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle user login
  const handleSubmit = async (e) => {
    // Prevent form submission refresh
    e.preventDefault();

    // Start loading state
    setIsLoading(true);

    try {
      // Send login credentials to backend
      const response = await loginUser(formData);

      // Extract user authentication data
      const { token, id , name , picture} = response.data;

      // Store user information locally
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      localStorage.setItem("id", id);
      localStorage.setItem("avtar", picture);
      // Reset form fields
      setFormData({
        email: "",
        password: "",
      });

      // Show success message and redirect
      navigate("/chats");
    } catch (error) {
      // Show login error message
      console.log(error.message);
      
    } finally {
      // Stop loading state
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-200"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />

      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-200"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required
      />

      <button
        type="submit"
        className="py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
      >
        Login
      </button>
      <p className="text-center text-sm text-gray-300">
        Create your account{" "}
        <Link className="text-blue-700" to={"/register"}>
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
