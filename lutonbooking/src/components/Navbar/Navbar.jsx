import React, { useState } from "react";
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
        <a href="#home" className="hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#services" className="hover:text-gray-400">
          Services
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </div>
      <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
