import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        type="text"
        placeholder="Enter your name"
      />
      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        type="email"
        placeholder="Enter your email"
      />

      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        type="password"
        placeholder="Enter your password"
      />

      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        type="password"
        placeholder="Confirm your password"
      />

      <button
        type="submit"
        className="py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition"
      >
        Register
      </button>

      <p className="text-center text-sm text-gray-300">
        Already Have account ? <Link className="text-green-600 font-semibold" to={"/login"}>Login</Link>
      </p>
    </form>
  );
};

export default Register;