import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import closeIcon from "../assets/close_icon.svg";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    checkAuth(); // initial check

    window.addEventListener("auth-change", checkAuth);

    return () => {
      window.removeEventListener("auth-change", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    window.dispatchEvent(new Event("auth-change")); // 🔥 notify navbar
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 border-b border-black">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-lungs fa-2x text-red-800"></i>
        <h2 className="font-black text-2xl sm:text-3xl">ORGAN-I-ZATION</h2>
      </div>

      {/* Menu */}
      <div
        className={`text-gray-700 dark:text-white sm:text-lg
        ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        }
        max-sm:fixed top-0 bottom-0 right-0
        max-sm:min-h-screen max-sm:flex-col
        max-sm:bg-gray-900 max-sm:text-white
        max-sm:pt-20
        flex sm:items-center gap-5 transition-all duration-300`}
      >
        {/* Close */}
        <img
          src={closeIcon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <Link to="/home" onClick={() => setSidebarOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setSidebarOpen(false)}>
          About
        </Link>
        <Link to="/donor" onClick={() => setSidebarOpen(false)}>
          Become a Donor
        </Link>
        <Link to="/dashboard" onClick={() => setSidebarOpen(false)}>
          Dashboard
        </Link>

        {!isLoggedIn ? (
          <Link to="/login" onClick={() => setSidebarOpen(false)}>
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="text-red-600 sm:hover:border-b"
          >
            Logout
          </button>
        )}
      </div>

      {/* Hamburger */}
      <button
        className="sm:hidden text-2xl"
        onClick={() => setSidebarOpen(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
};

export default Navbar;
