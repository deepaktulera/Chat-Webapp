import React, { useEffect, useState } from "react";
import { EllipsisVertical, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const name = localStorage.getItem("name");
  const avatar = localStorage.getItem("avtar");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("avtar");

    navigate("/login");
};

  return (
    <div className="flex items-center justify-between bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white px-4 py-3 rounded-xl shadow-md">
      {/* Left */}
      <div className="relative group flex items-center">
        <img
          src={avatar}
          alt="Profile"
          className="aspect-square w-12 object-center rounded-full object-cover border-2 border-blue-500 cursor-pointer transition-transform duration-300 group-hover:scale-105"
        />

        {/* Tooltip */}
        <div className="absolute left-14 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
            {name}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative">
        <button
          onClick={() => setMenu(!menu)}
          className="p-2 rounded-full hover:scale-110 transition-colors"
        >
          <EllipsisVertical className="bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white w-5 h-5" />
        </button>

        {menu && (
          <div className="absolute right-0 mt-3 w-44 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden z-50">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-zinc-800 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;