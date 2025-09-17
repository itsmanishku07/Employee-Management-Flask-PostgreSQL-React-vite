import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLogin = localStorage.getItem("isLogin") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/"); 
  };

  return (
    <nav className="bg-blue-300 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="text-xl font-extrabold text-black">
          <Link to="/index">MyApp</Link>
        </div>

        <ul className="hidden md:flex gap-8 font-semibold text-black">
          <li><Link to="/index">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contect">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <div className="hidden md:flex">
          {isLogin ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Employee Login
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">✖</span> // Close icon
          ) : (
            <span className="text-2xl">☰</span> // Hamburger icon
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 bg-blue-200 rounded-lg p-4 space-y-3">
          <ul className="flex flex-col gap-3 font-semibold text-black">
            <li><Link to="/index" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contect" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          </ul>
          <div className="mt-3">
            {isLogin ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="w-full block text-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Employee Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
