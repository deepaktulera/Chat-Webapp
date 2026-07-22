import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authServices";

const Register = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    picture: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      setIsLoading(true);

      const formData = new FormData();

      formData.append("username", form.username);
      formData.append("email", form.email);
      formData.append("password", form.password);

      if (form.picture) {
        formData.append("picture", form.picture);
      }

      await registerUser(formData);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={form.username}
        onChange={handleChange}
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white"
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={form.password}
        onChange={handleChange}
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white"
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white"
      />

      <input
        type="file"
        name="picture"
        accept="image/*"
        onChange={handleChange}
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white"
      >
        {isLoading ? "Registering..." : "Register"}
      </button>

      <p className="text-center text-sm text-gray-300">
        Already have an account?{" "}
        <Link className="text-green-500" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
