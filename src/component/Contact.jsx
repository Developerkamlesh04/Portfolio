// ContactHero.jsx
import React from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="font-sans">
      {/* TOP SECTION */}
      <div className="relative bbg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-20">
            {/* Left Text */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Contact Us
              </h2>
              <p className="mt-4 text-lg text-gray-200 max-w-xl leading-relaxed">
                We are an industry-leading company that values honesty,
                integrity, and efficiency. Building quality products and caring
                for our customers is our top priority.
              </p>
            </div>

            {/* Floating Form */}
            <div className="relative z-10">
              <div className="bg-[#0d0d0d] backdrop-blur-lg rounded-2xl shadow-xl p-7 lg:p-10 border border-white/20">
                <h3 className="text-xl font-semibold text-indigo-700">
                  Send us a message
                </h3>

                <form className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      placeholder="First Name"
                    />
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      placeholder="Email"
                    />
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      placeholder="Phone Number"
                    />
                  </div>

                  <textarea
                    rows="3"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                    placeholder="Message"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Gradient Blob */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-purple-400/40 rounded-full blur-3xl"></div>
      </div>

   
      
    </section>
  );
}
