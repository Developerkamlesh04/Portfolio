import React from "react";
import Lottie from "lottie-react";
import Tilt from "react-parallax-tilt";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFramer } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import animationData from "../assets/web development.json";

// Tech stack with icons
const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0d0d0d] text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-50 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#6C63FF_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left transition-all duration-700">
          {/* Avatar */}
          <div className="flex justify-center lg:justify-start">
            <div className="p-[3px] rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 shadow-lg">
              <img
                src="/klogo.jpeg"
                alt="Profile"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#0d0d0d]"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">
            Frontend Developer
          </h2>

          {/* Bio */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I create sleek, responsive, and animated web apps with{" "}
            <span className="text-purple-400 font-semibold">React</span> &{" "}
            <span className="text-purple-400 font-semibold">Tailwind CSS</span>.
            Currently learning{" "}
            <span className="text-purple-400 font-semibold">Node.js</span> and{" "}
            <span className="text-purple-400 font-semibold">MongoDB</span> to
            become a Full Stack Developer.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/20 transition"
              >
                {tech.icon}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/Kamlesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition font-medium shadow-lg backdrop-blur-sm">
              <HiDownload className="text-lg" /> Download Resume
            </button>
          </a>
        </div>

        {/* Right - Lottie Card */}
        <div className="flex justify-center transition-all duration-700">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="w-full max-w-md"
          >
            <div className="rounded-3xl p-[2px] bg-gradient-to-tr from-[#6C63FF] via-[#A855F7] to-[#6C63FF] shadow-xl">
              <div className="bg-[#111114]/80 backdrop-blur-lg rounded-3xl p-6 h-full">
                <div className="w-full h-64 sm:h-72 mb-4">
                  <Lottie animationData={animationData} loop />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">Frontend Engineer</h3>
                  <p className="text-sm text-gray-400">
                    Building interactive, fast, and beautiful UIs with modern
                    web tech.
                  </p>
                </div>
                <p className="text-center text-xs text-white/30 mt-6 animate-bounce">
                  ↓ Scroll to see projects
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
