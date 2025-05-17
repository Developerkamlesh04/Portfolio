import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("Education");

  const renderContent = () => {
    const stats =
      activeTab === "Education"
        ? [
            { label: "College Projects", value: "5+" },
            { label: "Computer Science", value: "B.Tech" },
            { label: "Academic Score", value: "6.5 CGPA" },
          ]
        : [
            { label: "Open To Work", value: "Fresher" },
            { label: "Internships Done", value: "3+" },
            { label: "Coding League", value: "1" },
          ];

    const descriptions =
      activeTab === "Education"
        ? [
            "I completed my B.Tech in Computer Science, where I developed a strong foundation in software development and programming concepts.",
            "During my academic career, I undertook various team and individual projects, enhancing both my technical and collaborative skills.",
          ]
        : [
            "I have completed internships focused on front-end development and software engineering. These experiences helped me apply my academic knowledge to real-world projects.",
            "I am enthusiastic to join a team where I can contribute and grow as a full-stack developer.",
          ];

    return (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center mb-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-3xl font-extrabold text-yellow-500">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4 text-gray-700">
          {descriptions.map((text, i) => (
            <p key={i} className="leading-relaxed text-base md:text-lg">
              {text}
            </p>
          ))}
        </div>
      </>
    );
  };

  return (
    <section className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-12 py-12 flex flex-col items-center">
      <h2 className="text-sm text-yellow-500 font-semibold uppercase tracking-wider mb-3">
        About Me
      </h2>
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10">
        Things You Should Know Before Starting!
      </h1>

      <div className="w-full max-w-6xl flex flex-col gap-10">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 border-b border-gray-200 pb-4">
          {["Education", "Experience"].map((tab) => (
            <button
              key={tab}
              className={`text-base sm:text-lg font-medium pb-2 transition-colors ${
                activeTab === tab
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-500 hover:text-yellow-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="w-full">{renderContent()}</div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-yellow-600 transition">
            Download CV
          </button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-2xl hover:bg-yellow-50 transition">
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
