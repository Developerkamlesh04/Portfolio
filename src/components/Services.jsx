import React from "react";

const services = [
  {
    icon: (
      <svg
        className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12v8" />
        <path d="M12 12l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Building responsive and modern websites using the latest technologies like React, Tailwind CSS, and more.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 10h18" />
        <path d="M3 14h18" />
        <path d="M3 6h18" />
        <path d="M3 18h18" />
      </svg>
    ),
    title: "Content Creation",
    description:
      "Crafting compelling content for blogs, social media, and marketing materials.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
    title: "SEO Optimization",
    description:
      "Improving website visibility and driving organic traffic through effective SEO strategies.",
  },
];

export default function Services() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-yellow-600 font-semibold uppercase tracking-widest mb-2 text-sm sm:text-base">
          Our Services
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          What We Offer
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {services.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-2xl transition-transform transform hover:scale-[1.03]"
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 rounded-full bg-yellow-100 shadow-yellow-300 shadow-md">
                {icon}
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
              {title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
