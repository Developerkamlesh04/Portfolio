import React from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Left side - Form */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-black">Say Hi!</h1>
          <p className="text-lg text-black">
            Email us at{" "}
            <a
              href="mailto:jobs@company.com"
              className="font-semibold text-yellow-600"
            >
              jobs@company.com
            </a>{" "}
            and let’s see how we can work together
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="flex items-center bg-yellow-100 border border-gray-300 rounded px-3 py-2">
                <FaEnvelope className="text-yellow-600 mr-2" />
                <input
                  type="email"
                  id="email"
                  placeholder="mail@mail.com"
                  className="w-full bg-transparent outline-none text-black placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-700 mb-1"
              >
                Name
              </label>
              <div className="flex items-center bg-yellow-100 border border-gray-300 rounded px-3 py-2">
                <FaUser className="text-yellow-600 mr-2" />
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full bg-transparent outline-none text-black placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi Skylar team! I’d like to..."
                rows="4"
                className="w-full bg-yellow-100 border border-gray-300 rounded px-3 py-2 outline-none text-black placeholder:text-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500 transition font-semibold flex items-center gap-2"
            >
              Send message <span className="ml-1">→</span>
            </button>
          </form>
        </div>

        {/* Right side - Illustration */}
        <div className="flex justify-center items-center">
          <img
            src="/ContactMe.svg" // Placeholder: Replace with your vector
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
