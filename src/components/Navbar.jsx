import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "CONTACT ME", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 bg-gradient-to-r from-white via-gray-600 to-gray-500 text-white z-50 relative">
        <div className="flex items-center space-x-2">
          <img src="./logok.png" alt="logo" className="h-10" />
        </div>

        <div className="hidden sm:flex items-center space-x-2 font-bold text-white tracking-wide">
          <span className="text-yellow-300 text-lg">◆</span>
          <span>WELCOME</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border border-yellow-300 text-white rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-yellow-300 hover:text-black transition sm:px-5 sm:py-2"
        >
          <span className="font-bold text-sm sm:text-base">
            {isOpen ? "CLOSE" : "MENU"}
          </span>
          <div className="flex flex-col space-y-[2px]">
            <div className="w-4 h-[2px] bg-yellow-300"></div>
            <div className="w-4 h-[2px] bg-yellow-300"></div>
          </div>
        </button>
      </nav>

      {/* Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white z-40 flex flex-col md:flex-row p-6 md:p-16 transition-all duration-300 ease-in-out overflow-y-auto">
          {/* Left Section */}
          <div className="md:w-1/3 mb-10 mt-20  md:mb-0 space-y-8 text-sm text-gray-300">
            <div>
              <p className="font-bold text-yellow-300">Support</p>
              <p>(+91) 7870925238</p>
            </div>
            <div>
              <p className="font-bold text-yellow-300">Account Queries</p>
              <p>kamleshwebstudio@gmail.com</p>
            </div>
            <div className="flex space-x-4 text-yellow-300 text-lg">
              <i className="fab fa-facebook-f cursor-pointer" />
              <i className="fab fa-linkedin-in cursor-pointer" />
              <i className="fab fa-youtube cursor-pointer" />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 space-y-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex justify-between items-center border-t border-gray-700 py-4 hover:text-yellow-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
                <FiArrowUpRight className="text-2xl" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
