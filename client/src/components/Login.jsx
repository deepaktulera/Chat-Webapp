import React from "react";

const Login = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-200"
        type="email"
        placeholder="Enter your email"
      />

      <input
        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none text-white placeholder-gray-200"
        type="password"
        placeholder="Enter your password"
      />

      <button
        type="submit"
        className="py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
      >
        Login
      </button>
    </form>
  );
};

export default Login;