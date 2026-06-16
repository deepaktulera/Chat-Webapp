import React from "react";

const Register = () => {
  return (
    <form className="flex flex-col gap-4">
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
        Create your account 🚀
      </p>
    </form>
  );
};

export default Register;