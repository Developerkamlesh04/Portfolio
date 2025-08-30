import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  // Scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-7xl z-[1000]
      px-4 sm:px-6 py-3 rounded-xl border backdrop-blur-lg transition-all duration-300 shadow-xl
      ${
        scrolled
          ? "bg-white/30 dark:bg-black/30 border-white/40 dark:border-white/20"
          : "bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10"
      }`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg sm:text-xl font-extrabold tracking-tight select-none">
          <a href="/" className="focus:outline-none">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#A855F7] text-transparent bg-clip-text">
              Kamlesh.dev
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="relative text-sm font-medium text-white hover:text-[#A855F7] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#A855F7] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white hover:text-[#A855F7] p-1.5 rounded-md transition-all duration-200"
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden mt-3 overflow-hidden transition-all duration-300 ease-in-out
        ${
          open ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        }
        origin-top`}
      >
        <div className="flex flex-col gap-2 text-white text-base mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
