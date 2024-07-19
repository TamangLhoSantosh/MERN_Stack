import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 flex justify-between items-center h-16 px-5">
      <div className="text-xl font-bold">Logo</div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex gap-5 absolute md:static top-16 right-5 bg-gray-800 md:bg-transparent p-2 md:p-0`}
      >
        <Link to="home" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="about" className="hover:text-gray-400">
          About
        </Link>
        <Link to="services" className="hover:text-gray-400">
          Services
        </Link>
        <Link to="contact" className="hover:text-gray-400">
          Contact
        </Link>
        <Link to="product" className="hover:text-gray-400">
          Product
        </Link>
      </div>
      <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
