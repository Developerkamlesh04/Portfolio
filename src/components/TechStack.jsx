import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const techs = [
  { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, label: "CSS", color: "text-blue-500" },
  { icon: <FaJs />, label: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />, label: "React", color: "text-cyan-400" },
  { icon: <FaNodeJs />, label: "Node.js", color: "text-green-500" },
  { icon: <FaGitAlt />, label: "Git", color: "text-red-500" },
  { icon: <FaGithub />, label: "GitHub", color: "text-white" },
];

const TechStack = () => {
  return (
    <div className=" bg-gradient-to-br from-yellow-50 via-white to-yellow-50 py-9 px-4">
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10 drop-shadow-md">
        My Tech Stack
      </h2>
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-yellow-400/40"
          >
            <div
              className={`text-5xl ${tech.color} drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]`}
            >
              {tech.icon}
            </div>
            <p className="mt-3 text-base text-gray-800 font-medium tracking-wide">
              {tech.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
