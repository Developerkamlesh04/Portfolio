import React from "react";
import { Github } from "lucide-react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1E1E1E] to-[#121212] text-white px-6 md:px-16 py-12 rounded-t-[2rem]">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8">
        {/* Column 1 */}
        <div>
          <p className="text-gray-400 mt-4 leading-relaxed">
            We deliver premium solutions to help you grow your digital presence
            and business impact.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
