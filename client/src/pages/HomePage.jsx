import React from "react";
import { Link, useParams } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

const HomePage = () => {
  const { id } = useParams();

  return (
    <div
      className="min-h-screen flex justify-center items-center p-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1662974770404-468fd9660389?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0')",
      }}
    >
      <div className="w-full max-w-md p-8 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Chat App 💬
        </h1>
        {id === "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default HomePage;
