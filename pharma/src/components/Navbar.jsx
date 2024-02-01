import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../src/assets/logo.jpg"

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-white shadow-md py-2 px-4 flex justify-between items-center">
      <div className="w-24 h-24">
        <Link to="/">
          <img className="w-full h-full" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "text-blue-500" : "text-gray-500"
          }
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={
            location.pathname === "/shop" ? "text-blue-500" : "text-gray-500"
          }
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "text-blue-500" : "text-gray-500"
          }
        >
          Contact
        </Link>
        <Link
          to="/cart"
          className={
            location.pathname === "/cart" ? "text-blue-500" : "text-gray-500"
          }
        >
          <FiShoppingCart className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};
