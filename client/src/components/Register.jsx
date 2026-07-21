import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authServices";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avtar: null,
  });

  function handleChange({ target }) {
    const { name, value, files } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (FormData.password !== FormData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      await registerUser(FormData);

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        avtar: null,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        type="text"
        name="username"
        value={FormData.username}
        onChange={handleChange}
        placeholder="Enter your name"
        required
      />
      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        type="email"
        name="email"
        value={FormData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />

      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        type="password"
        name="password"
        value={FormData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required
      />

      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        type="password"
        name="confirmPassword"
        value={FormData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm your password"
        required
      />

      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        type="file"
        name="avatar"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition"
      >
        Register
      </button>

      <p className="text-center text-sm text-gray-300">
        Already Have account ?{" "}
        <Link className="text-green-600 font-semibold" to={"/login"}>
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
