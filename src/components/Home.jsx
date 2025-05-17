import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 overflow-hidden">
      {/* Background Pattern with overlay */}
      <div className="absolute inset-0 opacity-15 bg-[url('/lines.jpg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-start text-center h-screen px-6 sm:px-8 lg:px-12 pt-28 sm:pt-36 md:pt-44 max-w-4xl mx-auto">
        <p className="text-sm sm:text-base text-yellow-600 font-semibold mb-3 tracking-wide uppercase">
          Welcome
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight drop-shadow-md">
          Hi! I am <span className="text-yellow-500">Kamlesh.</span>
        </h1>

        <div className="mt-8 bg-white px-8 py-4 border-l-8 border-yellow-400 inline-block shadow-xl text-xl sm:text-2xl font-semibold text-gray-800 rounded-lg">
          FULL-STACK DEVELOPER
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 animate-bounce">
        <div className="w-7 h-12 border-2 border-yellow-500 rounded-full flex items-start justify-center">
          <div className="w-2 h-2 bg-yellow-500 mt-3 rounded-full"></div>
        </div>
        <span className="text-xs mt-1 text-yellow-600 tracking-wider font-medium select-none">
          SCROLL DOWN
        </span>
      </div>
    </div>
  );
}
